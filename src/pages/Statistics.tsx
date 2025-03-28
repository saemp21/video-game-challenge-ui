// import { useNavigate } from "react-router-dom";
// import { ShoppingItemsProps } from "../utils/interface";

import { useEffect } from "react";
import { useGetStatiscsMutation } from "../app/services";
import { useAppSelector } from "../app/hook";

export default function Statistics() {
  const email = useAppSelector((state) => state.arena.profile?.email || "");

  const [requestFunction, { data }] = useGetStatiscsMutation();

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
