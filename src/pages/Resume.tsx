import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";

export default function Resume() {
  const navigate = useNavigate();
  const resume = useAppSelector((state) => state.arena.tournament);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Resumen</h1>
        <div className="flex flex-col gap-4 ">
          {resume && (
            <>
              <p>
                <b>Nombre: </b>
                {resume.name}
              </p>
              <p>
                <b>Numero de boletas: </b>
                {resume.howManyTickets}
              </p>
              <p>
                <b>Correo: </b>
                {resume.email}
              </p>
              <p>
                <b>Teléfono: </b>
                {resume.phoneNumber}
              </p>
              <p>
                <b>Identificación de boleta: </b>
                {resume.token}
              </p>
              <p>
                <b>Donación: </b>
                {resume.donate}
              </p>
              <p>
                <b>Precio: </b>
                {Number(resume.howManyTickets) * Number(resume.priceTournament)}
              </p>
              <p>
                <b>Total: </b>
                {Number(resume.donate) +
                  Number(
                    Number(resume.howManyTickets) *
                      Number(resume.priceTournament)
                  )}
              </p>
              <div className="w-full flex flex-row justify-center items-center">
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
