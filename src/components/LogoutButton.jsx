import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

export default function LogoutButton() {
  const { logout } = useAuth0();

  function handleLogOut() {
    logout({
      logoutParams: { returnTo: process.env.NEXT_PUBLIC_REDIRECT_URL },
    });
  }

  return (
    <>
      <Button
        label={"Log Out"}
        handleClick={handleLogOut}
        variant="btn btn-error"
      />
    </>
  );
}
