// App.js

import { useAuth } from "react-oidc-context";

export default function Login() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7mqoe47nd4eht0hjo882qs4hqq";
    const logoutUri = "<logout uri>";
    const cognitoDomain =
      "https://videogamecogpcc.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() =>
          auth.signinRedirect({
            redirect_uri: "https://main.d12rdorbfrxk5.amplifyapp.com/login",
          })
        }>
        Sign in
      </button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}
