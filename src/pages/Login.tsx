// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../app/hook";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../aws/amplifyConfig";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Bienvenido, {user?.username}</h1>
            <button onClick={signOut}>Cerrar sesión</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
