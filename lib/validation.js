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
    switch (type) {
        case "age":
            return validateAge(object);
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

function validateAge(str) {
    const age = parseInt(str);
    return !isNaN(age);
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
