// import { useNavigate } from "react-router-dom";
// import { ShoppingItemsProps } from "../utils/interface";

import { useEffect } from "react";
import { useGetStatiscsMutation } from "../app/services";
import { useAppSelector } from "../app/hook";

export default function Statistics() {
  const email = useAppSelector((state) => state.arena.profile?.email || "");

  const [requestFunction, { data, isLoading, isError }] =
    useGetStatiscsMutation();

  const runRequest = async () => {
    await requestFunction({
      correo: email,
    });
  };

  useEffect(() => {
    runRequest();
  }, []);
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Estadísticas</h1>

        <div className="flex flex-col gap-4">
          {isError && (
            <p>
              Se ha presentado un error al consultar la lista de estadística
            </p>
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
          {/* {isSuccess &&
            data.data.map((item, index) => ( */}
          {data &&
            data.torneos.map((item, index) => (
              <div
                className="cursor-pointer rounded-lg border p-4 gap-4 flex flex-col hover:bg-slate-50"
                key={index}>
                <div className="flex flex-col">
                  <p className=" font-semibold text-xl">{item.nombre}</p>
                  <p className="">{item.ganancias}</p>
                  <p className="">{item.donaciones}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
