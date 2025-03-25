import { useNavigate } from "react-router-dom";

export default function Manager() {
  const navigate = useNavigate();

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
        </div>
      </div>
    </div>
  );
}
