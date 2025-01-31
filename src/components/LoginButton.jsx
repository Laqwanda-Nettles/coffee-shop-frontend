import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  function handleLogIn() {
    loginWithRedirect();
  }

  return (
    <>
      <Button
        label={"Log In"}
        handleClick={handleLogIn}
        variant="btn btn-info"
      />
    </>
  );
}
