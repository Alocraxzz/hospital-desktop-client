export const phoneNumberFormatter = (phoneNumber: string) => {
    // Remove all non-numeric characters except for the first '+' character
    phoneNumber = phoneNumber.replace(/[^+\d]/g, '');

    // Only keep the first '+' character and up to 11 digits
    phoneNumber = phoneNumber.substring(0, 10);

    // Format the phone number with parentheses and dashes
    let formattedValue = '';
    if (phoneNumber.charAt(0) === '+') {
        formattedValue = '+';
        phoneNumber = phoneNumber.substring(1);
    }
    if (phoneNumber.length > 3) {
        formattedValue += `(${phoneNumber.substring(0, 3)}) `;
        phoneNumber = phoneNumber.substring(3);
    }
    if (phoneNumber.length > 3) {
        formattedValue += `${phoneNumber.substring(0, 3)}-`;
        phoneNumber = phoneNumber.substring(3);
    }
    formattedValue += phoneNumber;

    return formattedValue;
};