const emailRegex = /\S+@\S+\.\S+/;
const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;

//validate the given object based on the given type
export function validateObject(object, type) {
    let nullable = false;
    if (type.startsWith("nullable-")) {
        type = type.replace("nullable-", "");
        nullable = true;
    }
    if (object == null || object === "") {
        return nullable;
    }
    if (typeof object !== "string") {
        return false;
    }
    switch (type) {
        case "number":
            return validateNumber(object);
        case "email":
            return validateMail(object);
        case "url":
            return validateURL(object);
        case "date":
            return validateDate(object);
        case "string":
            return validateString(object);
        default:
            throw new Error(`No validation case for type ${type}.`);
    }
}

function validateString(str) {
    return typeof str === "string";
}

function validateNumber(str) {
    const number = Number(str);
    return !isNaN(number);
}

function validateMail(str) {
    return emailRegex.test(str);
}

function validateURL(str) {
    return urlRegex.test(str);
}

function validateDate(str) {
    return !isNaN(new Date(str));
}
