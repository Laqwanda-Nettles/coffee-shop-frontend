import PropTypes from "prop-types";
import Button from "@/components/Button";
import { useState } from "react";

//check if it is > 8 characters
function checkPassword(password) {
  if (password.length > 8) {
    return true;
  } else {
    return false;
  }
}

//check email format
const checkEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

export default function SignupForm({ buttonLabel, handleSignup }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");

  //form submit function
  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };

    handleSignup(user);

    //reset after submit
    setPasswordValue("");
    setNameValue("");
    setEmailValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="form flex flex-col gap-4">
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          name="name"
          className="grow"
          placeholder="Name"
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          name="email"
          className="grow"
          placeholder="Email"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
            if (!checkEmail(emailValue)) {
              setError("Invalid email format.");
            } else {
              setError("");
            }
          }}
        />
      </label>
      {error && <p className="text-xs text-red-400">{error}</p>}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          name="password"
          className="grow"
          placeholder="Password"
          value={passwordValue}
          onChange={(e) => {
            if (checkPassword(e.target.value)) {
              setPasswordIsValid(true);
            } else {
              setPasswordIsValid(false);
            }
            setPasswordValue(e.target.value);
          }}
        />
      </label>
      <div
        className={
          passwordIsValid ? "invisible text-xs" : "text-xs text-red-400"
        }
      >
        Password must be at least 8 characters long.
      </div>
      <Button label={buttonLabel} />
    </form>
  );
}

SignupForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleSignup: PropTypes.func.isRequired,
};
