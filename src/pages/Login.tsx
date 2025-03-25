import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { signIn } from "@aws-amplify/auth";
import "../aws/amplifyConfig";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        Login
        <div
          onClick={async () => {
            try {
              const user = await signIn({
                username: "saemp21@gmail.com",
                password: "Password123*",
              });

              console.log(user);
            } catch (error) {
              console.error(error);
            }
          }}
          className="border px-6 py-4 cursor-pointer hover:bg-slate-100">
          iniciar
        </div>
      </div>
    </div>
  );
}
