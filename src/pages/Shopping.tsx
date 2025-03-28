import { useNavigate } from "react-router-dom";
import { useGetAllTicketsQuery } from "../app/services";
import { useEffect } from "react";

export default function Shopping() {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isError,
    refetch,
    //  isSuccess
  } = useGetAllTicketsQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center ">
        <div
          onClick={() => {
            navigate(`/`);
          }}
          className="cursor-pointer flex flex-row gap-2 sticky top-0 py-3 bg-white w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          Volver
        </div>
        <h1 className="text-5xl font-bold">Boletas</h1>

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
        <div className="flex flex-col gap-4">
          {/* {isSuccess &&
            data.data.map((item, index) => ( */}
          {data &&
            (data?.torneos || [])?.length > 0 &&
            data.torneos.map((item, index) => (
              <div
                onClick={() => {
                  navigate(
                    `/shopping/tournament/${item?.id}/${item?.valorEntrada}`
                  );
                }}
                className="cursor-pointer rounded-lg border p-4 gap-4 flex flex-col hover:bg-slate-100"
                key={index}>
                <div className="flex flex-col">
                  <p className=" font-semibold text-xl">{item?.nombre}</p>
                  <p className="">{item?.descripcion}</p>
                </div>
                <div className="flex w-full flex-row gap-2  items-center  justify-end">
                  <p className="">${item?.valorEntrada}</p>
                  <p
                    className={`rounded-xl px-4 py-2 ${
                      item?.estado === 1
                        ? "text-white bg-green-500"
                        : "text-white bg-red-500"
                    }`}>
                    {item?.estado === 1 ? "Activo" : "Inactivo"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

//id de boleta navegar a otra vista que pida (corrreo, num entradas, nombre, telefono, donacion, comprar, cancelar)
