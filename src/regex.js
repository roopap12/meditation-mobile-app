//exports the regex.js to Form.js
export const firstNameRegex = new RegExp("^[A-Za-z]{1,20}$");

export const lastNameRegex = new RegExp("^[A-Za-z]{1,20}$");

export const dateOfBirthRegex = new RegExp(
  "^(18[0-9]{2}|19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$"
);

export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-za-zA-Z0-9.-]+.[a-z]{2,3}$"
);