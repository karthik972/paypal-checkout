function isNumber(x) {
    return (typeof x === 'number');
}

function isInteger(x) {
    return ((x % 1) === 0);
}

export function validateCardStyle(style : Object = {}) {

    if (!style) {
        throw new Error(`Expected props.style to be set`);
    }

    let installments = style.installments;

    if (installments && !installments.display) {
        return;
    }

    if (installments && installments.fixedInstallments) {

        let fixedInstallmentsTerm = installments.fixedInstallmentsTerm;

        if (!fixedInstallmentsTerm) {
            throw new Error(`Fixed Installments are enabled, but Installment period is undefined`);
        }

        if (!isNumber(fixedInstallmentsTerm)) {
            throw new Error(`Installment period should be a number`);
        }

        if (!isInteger(fixedInstallmentsTerm) || fixedInstallmentsTerm < 1) {
            throw new Error(`Invalid Installment period: ${ fixedInstallmentsTerm }`);
        }
    }
}