import { useNavigate } from "react-router-dom";

export default function Verified({ verified }: { verified: "si" | "no" }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Verificación</h1>
        <div className="flex flex-row gap-4">
          <div
            onClick={() => {
              navigate("/event");
            }}
            className="border p-4 cursor-pointer hover:bg-slate-100 rounded-lg capitalize font-bold">
            Volver
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {verified === "si" ? (
            <>
              <img
                className="w-80"
                src="3e655000daafe3818aacf2f20124510c.jpg"
              />
              <p>Estas verificado</p>
            </>
          ) : (
            <>
              <img className="w-80" src="3e655000daafe3818aacgw84w43510c.jpg" />
              <p>No estas verificado</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
