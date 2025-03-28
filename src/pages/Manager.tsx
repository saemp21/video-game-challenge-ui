import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { useGetAllTournamentsMutation } from "../app/services";
import { useEffect } from "react";
// import { useAuth } from "react-oidc-context";

export default function Manager() {
  const email = useAppSelector((state) => state.arena.profile?.email || "");
  const navigate = useNavigate();
  const stores = useAppSelector((state) => state.arena);

  const [requestFunction, { data, isLoading, isError }] =
    useGetAllTournamentsMutation();

  const runRequest = async () => {
    await requestFunction({
      correo: email,
    }).unwrap();
  };

  useEffect(() => {
    runRequest();
  }, []);

  const signOutRedirect = () => {
    const clientId = "7mqoe47nd4eht0hjo882qs4hqq";
    const logoutUri = "https://main.d12rdorbfrxk5.amplifyapp.com";
    const cognitoDomain =
      "https://videogamecogpcc.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };
  console.log(stores);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Administrador de torneos</h1>
        <div className="flex flex-row gap-4">
          <div
            onClick={() => {
              navigate("/manager/create-tournament");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            Crear torneo
          </div>
          <div
            onClick={() => {
              navigate("/manager/statistics");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            Estadísticas
          </div>
          <div
            onClick={() => {
              // auth.removeUser();
              signOutRedirect();
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            Salir
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {isError && (
            <p>Se ha presentado un error al consultar la lista de boletas</p>
          )}
          {isLoading && (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </>
          )}
          {data &&
            data.torneos.map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/shopping/tournament/${item.id}/${item.id}`);
                }}
                className="cursor-pointer rounded-lg border p-4 gap-4 flex flex-col hover:bg-slate-100"
                key={index}>
                <div className="flex flex-col">
                  <p className=" font-semibold text-xl">{item.nombre}</p>
                  <p className="">{item.descripcion}</p>
                </div>
                <div className="flex w-full flex-row gap-2  items-center  justify-end">
                  <p className="">${item.valorEntrada}</p>
                  <p
                    className={`rounded-xl px-4 py-2 ${
                      item.estado === 1
                        ? "text-white bg-green-500"
                        : "text-white bg-red-500"
                    }`}>
                    {item.estado === 1 ? "Activo" : "Inactivo"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
