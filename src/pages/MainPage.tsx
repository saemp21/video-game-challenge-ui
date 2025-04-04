import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { setProfile, setTicketType, setTokens } from "../app/sliceArena";
import { useAuth } from "react-oidc-context";

export default function MainPage() {
  const auth = useAuth();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    dispatch(
      setTokens({
        id_token: auth.user?.id_token,
        access_token: auth.user?.access_token,
        refresh_token: auth.user?.refresh_token,
      })
    );
    dispatch(
      setProfile({
        email: auth.user?.profile.email,
      })
    );
    navigate("/manager");
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Pragma Arena</h1>
        <div className="flex flex-row gap-4">
          <div
            onClick={() => {
              auth.signinRedirect({
                redirect_uri: "https://main.d12rdorbfrxk5.amplifyapp.com",
              });
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            login
          </div>
          <div
            onClick={() => {
              dispatch(setTicketType("participant"));
              navigate("/shopping");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            compra boleta participante
          </div>
          <div
            onClick={() => {
              dispatch(setTicketType("viewer"));
              navigate("/shopping");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            compra boleta espectador
          </div>
          <div
            onClick={() => {
              navigate("/event");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            ingresar evento
          </div>
        </div>
      </div>
    </div>
  );
}
