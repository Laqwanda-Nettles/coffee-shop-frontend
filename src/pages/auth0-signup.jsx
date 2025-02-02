import LoginButton from "@/components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const registerURL = `${BACKEND_URL}/auth/auth0-register`;

export default function Auth0Signup() {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();

  async function handleSignup({ idToken, name }) {
    // fetch POST /register

    const registerInfo = {
      user: {
        email: user.email,
        name,
      },
      auth0TokenId: idToken,
    };
    const response = await fetch(registerURL, {
      method: "POST",
      body: JSON.stringify(registerInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else {
      router.push("/signin");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;

    const claims = await getIdTokenClaims();
    const idToken = claims.__raw;
    console.log(idToken);

    handleSignup(idToken, name);
  }

  const auth0SignupForm = (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <div>Email:{user && user.email}</div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );

  const signupJsx = <LoginButton />;
  return <>{isAuthenticated ? auth0SignupForm : signupJsx}</>;
}
