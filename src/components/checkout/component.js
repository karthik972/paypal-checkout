/* @flow */

import { SyncPromise } from 'sync-browser-mocks/src/promise';
import $logger from 'beaver-logger/client';
import xcomponent from 'xcomponent/src';

// $FlowFixMe
import parentTemplate from './parentTemplate.htm';

// $FlowFixMe
import componentTemplate from './componentTemplate.htm';

import { isDevice, request, getQueryParam, urlWillRedirectPage } from '../../lib';
import { config } from '../../config';

import { validateProps } from '../common';

import contentJSON from './content';
let content = JSON.parse(contentJSON);


function addHeader(name, value) : void {

    if (!window.$Api) {
        return;
    }

    if (window.$Api.addHeader) {
        return window.$Api.addHeader(name, value);
    }
}


function logReturnUrl(returnUrl) {

    let currentDomain = `${window.location.protocol}//${window.location.host}`.toLowerCase();
    returnUrl = returnUrl.toLowerCase();

    if (currentDomain !== 'https://www.paypal.com') {

        if (returnUrl.indexOf(currentDomain) === 0) {
            $logger.info(`return_url_domain_match`);
        } else {
            $logger.info(`return_url_domain_mismatch`, { returnUrl, currentDomain });
        }

        let currentHost = currentDomain.replace(/^https?/, '');
        let returnHost = returnUrl.replace(/^https?/, '');

        if (returnHost.indexOf(currentHost) === 0) {
            $logger.info(`return_url_host_match`);
        } else {
            $logger.info(`return_url_host_mismatch`, { returnUrl, currentDomain });
        }

        let currentTLD = currentHost.replace(/^www\./, '');
        let returnTLD = returnHost.replace(/^www\./, '');

        if (returnTLD.indexOf(currentTLD) === 0) {
            $logger.info(`return_url_tld_match`);
        } else {
            $logger.info(`return_url_tld_mismatch`, { returnUrl, currentDomain });
        }
    }
}

export let Checkout = xcomponent.create({

    tag: 'paypal-checkout',
    name: 'ppcheckout',

    buildUrl(instance, props) : string | SyncPromise<string> {
        let env = instance.props.env || config.env;

        return props.payment().then(token => {

            if (token.indexOf('BA-') === 0) {
                $logger.info(`url_billing`);
                return config.billingUrls[env];
            }

            if (token.indexOf('PAY-') === 0) {
                $logger.info(`url_payment`);
                return config.checkoutUrls[env];
            }

            if (token.indexOf('EC-') === 0) {
                $logger.info(`url_checkout`);
                return config.checkoutUrls[env];
            }

            $logger.info(`url_default`);
            return config.checkoutUrls[env];
        });
    },

    remoteRenderDomain: config.paypal_domain_regex,

    get bridgeUrls() : Object {
        return config.bridgeUrls;
    },

    get bridgeDomains() : Object {
        return config.paypalDomains;
    },

    contexts: {
        iframe: false,
        lightbox: false,
        popup: true
    },

    get version() : string {
        return config.ppobjects ? __FILE_VERSION__ : __MINOR_VERSION__;
    },

    get domains() : Object {
        return config.paypalDomains;
    },

    validateProps(component, props, required = true) : void {
        if (required) {
            return validateProps(props);
        }
    },

    get componentTemplate() : string {

        return componentTemplate;
    },

    get parentTemplate() : string {

        let template = parentTemplate;
        let localeContent = content[config.locale.country][config.locale.lang];

        template = template.replace('#windowMessage', localeContent.windowMessage);
        template = template.replace('#continue', localeContent.continue);

        return template;
    },

    props: {

        env: {
            type: 'string',
            required: false,
            queryParam: true,

            def() : string {
                return config.env;
            }
        },

        stage: {
            type: 'string',
            required: false,
            queryParam: true,

            def() : string {
                return config.stage;
            }
        },

        locale: {
            type: 'string',
            required: false,
            queryParam: 'locale.x'
        },


        client: {
            type: 'object',
            required: false,
            def() : Object {
                return {};
            },
            sendToChild: false
        },

        payment: {
            type: 'string',
            required: false,
            getter: true,
            memoize: true,
            queryParam(value = '') : string {
                return value.indexOf('BA-') === 0 ? 'ba_token' : 'token';
            },
            childDef() : ?string {
                return getQueryParam('token');
            },
            alias: 'paymentToken'
        },

        commit: {
            type: 'boolean',
            required: false
        },

        onAuthorize: {
            type: 'function',
            required: false,
            once: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions = {}) : void {

                        try {
                            logReturnUrl(data.returnUrl);
                        } catch (err) {
                            // pass
                        }

                        let close = () => {
                            return SyncPromise.try(() => {
                                if (actions.close) {
                                    return actions.close();
                                }
                            }).then(() => {
                                return this.closeComponent();
                            });
                        };

                        let redirect = (win, url) => {

                            win = win || window.top;
                            url = url || data.returnUrl;

                            setTimeout(() => {
                                win.location = url;
                            }, 1);

                            return close().then(() => {
                                if (urlWillRedirectPage(url)) {
                                    return new SyncPromise();
                                }
                            });
                        };

                        return SyncPromise.try(() => {

                            try {
                                let isButton = window.location.href.indexOf('/webapps/hermes/button') !== -1;
                                let isGuest  = this.window.location.href.indexOf('/webapps/xoonboarding') !== -1;

                                if (isButton && isGuest) {
                                    return request({
                                        win: this.window,
                                        method: 'get',
                                        url: '/webapps/hermes/api/auth'
                                    }).then(result => {
                                        if (result && result.data && result.data.access_token) {
                                            addHeader('x-paypal-internal-euat', result.data.access_token);
                                        }
                                    }).catch(err2 => {
                                        // pass
                                    });
                                }

                            } catch (err) {
                                // pass
                            }

                        }).then(() => {
                            return original.call(this, data, { ...actions, close, redirect });
                        }).finally(() => {
                            return this.close();
                        });
                    };
                }
            }
        },

        onAuth: {
            type: 'function',
            required: false,
            sameDomain: true
        },

        onCancel: {
            type: 'function',
            required: false,
            once: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions = {}) : void {

                        let close = () => {
                            return SyncPromise.try(() => {
                                if (actions.close) {
                                    return actions.close();
                                }
                            }).then(() => {
                                return this.closeComponent();
                            });
                        };

                        let redirect = (win, url) => {

                            win = win || window.top;
                            url = url || data.cancelUrl;

                            setTimeout(() => {
                                win.location = url;
                            }, 1);

                            return close().then(() => {
                                if (urlWillRedirectPage(url)) {
                                    return new SyncPromise();
                                }
                            });
                        };

                        return SyncPromise.try(() => {
                            return original.call(this, data, { ...actions, close, redirect });
                        }).finally(() => {
                            this.close();
                        });
                    };
                }
            }
        },

        init: {
            type: 'function',
            required: false,
            once: true,

            decorate(original) : Function {
                return function(data) : void {

                    this.paymentToken = data.paymentToken;
                    this.cancelUrl    = data.cancelUrl;

                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
        },

        onClose: {
            type: 'function',
            required: false,
            once: true,
            promisify: true,

            def() : Function {
                return function(reason) : void {
                    let CLOSE_REASONS = xcomponent.CONSTANTS.CLOSE_REASONS;

                    if (this.props.onCancel && [ CLOSE_REASONS.CLOSE_DETECTED, CLOSE_REASONS.USER_CLOSED ].indexOf(reason) !== -1) {

                        if (this.paymentToken && this.cancelUrl) {

                            $logger.info(`close_trigger_cancel`);

                            return this.props.onCancel({
                                paymentToken: this.paymentToken,
                                cancelUrl:    this.cancelUrl
                            });

                        } else {

                            $logger.warn(`close_no_token_cancelurl`);
                        }
                    }
                };
            }
        },

        onError: {
            type: 'function',
            required: false,
            promisify: true,
            noop: true,
            once: true
        },

        fallback: {
            type: 'function',
            required: false,
            once: true,

            def() : Function {
                return function(url) : void {
                    $logger.warn('fallback', { url });
                    return window.onLegacyPaymentAuthorize(this.props.onAuthorize);
                };
            }
        },

        testAction: {
            type: 'string',
            required: false,
            def() : string {
                return 'checkout';
            }
        }
    },

    autoResize: true,

    get dimensions() : { width : string | number, height : string | number } {

        if (isDevice()) {
            return {
                width: '100%',
                height: '100%'
            };
        }

        if (this.contexts.lightbox) {
            return {
                width: '450px',
                height: '300px'
            };
        }

        return {
            width: '450px',
            height: '535px'
        };
    }
});

let enableCheckoutIframeTimeout;

export function enableCheckoutIframe() {

    Checkout.contexts.lightbox = true;
    Checkout.contexts.iframe = true;

    if (enableCheckoutIframeTimeout) {
        clearTimeout(enableCheckoutIframeTimeout);
    }

    enableCheckoutIframeTimeout = setTimeout(() => {
        Checkout.contexts.lightbox = false;
        Checkout.contexts.iframe = false;
    }, 5 * 60 * 1000);
}
