const emailRegex = /\S+@\S+\.\S+/;
const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

export function validate(object, type) {
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
            return validateUrl(object);
        case "date":
            return validateDate(object);
        case "string":
            return validateString(object);
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

function validateUrl(str) {
    return urlRegex.test(str);
}

function validateDate(str) {
    return !isNaN(new Date(str));
}