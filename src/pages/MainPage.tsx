import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { setTicketType } from "../app/sliceArena";

export default function MainPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Pragma Arena</h1>
        <div className="flex flex-row gap-4">
          <div
            onClick={() => {}}
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
            onClick={() => {}}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            ingresar evento
          </div>
        </div>
      </div>
    </div>
  );
}
