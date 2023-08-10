//import the component regex.js
import React, { useState } from "react";
import {
  firstNameRegex,
  lastNameRegex,
  dateOfBirthRegex,
  emailRegex,
} from "../regex";
//declared the functional Form component and use the useState Hook to declare state
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [donation, setDonation] = useState("");
  const [achievement, setAchievement] = useState(false);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    email: false,
  });

  //This code validates the fields
  function validate(e) {
    e.preventDefault();
    const regexErrors = {
      firstName: !firstNameRegex.test(firstName),
      lastName: !lastNameRegex.test(lastName),
      dateOfBirth: !dateOfBirthRegex.test(dateOfBirth),
      email: !emailRegex.test(email),
    };
    setErrors(regexErrors);

    // This Checks if there are no errors
    if (
      !regexErrors.firstName &&
      !regexErrors.lastName &&
      !regexErrors.dateOfBirth &&
      !regexErrors.email
    ) {
      setAchievement(true);

      // This Reset the form fields
      setFirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setDonation("");
    } else {
      setAchievement(false);
    }
  }
  //This will show the fields on the form with
  return (
    <>
      <div className="box">
        <h1>Registration Form</h1>
      <div className="box">
        <label>First Name</label>
        <input
          className="input"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="firstname"
          />
        {errors.firstName && (
          <p className="errorMessage">
            Name should not be more than of 20 characters
          </p>
        )}
      </div>
      <div className="box">
        <label>Last Name</label>
        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="lastname"
          />
        {errors.lastName && (
          <span className="errorMessage">
            Should not be more than of 20 characters
          </span>
        )}
      </div>
      <div className="box">
        <label>Date of Birth</label>
        <input
          className="input"
          type="date"
          value={dateOfBirth}
          onChange={(event) => setDate(event.target.value)}
          placeholder="DOB"
          />
        {errors.dateOfBirth && (
          <span className="errorMessage">
            Please enter valid date of birth dd-mm-yyyy
          </span>
        )}
      </div>
      <div className="box">
        <label>Email</label>
        <input
          className="input"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          />
        {errors.email && (
          <span className="errorMessage">Invalid email address!</span>
          )}
      </div>
      <div className="box">
        <label>Donation $</label>
        <input
          className="input"
          type="number"
          value={donation}
          onChange={(event) => setDonation(event.target.value)}
          placeholder="donation"
          />
      </div>
      <button onClick={(e) => validate(e)}>SIGN UP!</button>
      <br></br>
          </div>
    </>
  );
}

export default Form;
