import { useNavigate } from "react-router-dom";
import { ShoppingItemsProps } from "../utils/interface";

export default function Statistics() {
  const navigate = useNavigate();

  const shoppingItems: ShoppingItemsProps = [
    {
      id: "1a2f6b88-1e5c-4c2f-b6a3-fc4b13c77b9d",
      title: "Concierto RockFest",
      desc: "Entrada general - Bogotá",
      price: 120000,
      paid: true,
    },
    {
      id: "4c92d8ce-497b-4c01-a80f-b69e80fc799a",
      title: "Cine Estreno",
      desc: "Película en 3D - Sábado noche",
      price: 25000,
      paid: true,
    },
    {
      id: "8e1d3b7b-12dc-4645-ae57-8b1828b74662",
      title: "Obra de teatro",
      desc: "Butaca preferencial - Medellín",
      price: 0,
      paid: false,
    },
    {
      id: "0e74e624-13c1-41fd-bb20-97f345a7ed4a",
      title: "Festival de Jazz",
      desc: "Acceso 1 día - Cartagena",
      price: 0,
      paid: false,
    },
    {
      id: "15d404f3-5a2e-409e-b7a9-1185b15716b6",
      title: "Partido de fútbol",
      desc: "Tribuna norte - Nacional vs Millos",
      price: 85000,
      paid: true,
    },
    {
      id: "c8e5db0e-c24e-4f3d-a52d-7e24ac7971e4",
      title: "Conferencia Tech",
      desc: "Pase full day - Cali",
      price: 0,
      paid: false,
    },
    {
      id: "7c0a8ed6-8591-4e2e-95c3-fdc82ab5c0ab",
      title: "Evento de cosplay",
      desc: "Acceso general - Domingo",
      price: 0,
      paid: false,
    },
    {
      id: "ca37cd8a-13c4-4e09-9d11-ffdc1dd98ad2",
      title: "Feria del libro",
      desc: "Acceso + libro promocional",
      price: 40000,
      paid: true,
    },
    {
      id: "2b417429-6a0d-44cb-8854-e7eced612828",
      title: "Stand up comedy",
      desc: "Mesa VIP - Show nocturno",
      price: 60000,
      paid: true,
    },
    {
      id: "bdb5ce7e-8e0e-4871-b207-7c9a962cc61e",
      title: "Festival de comida",
      desc: "Entrada + degustación",
      price: 35000,
      paid: true,
    },
    {
      id: "9b0b3a2b-bd3c-4b28-8a69-8e3851ab8d0f",
      title: "Concierto de salsa",
      desc: "Entrada pista de baile",
      price: 80000,
      paid: true,
    },
    {
      id: "1a3967ac-089e-4be8-8c3e-59b529c65e3e",
      title: "Carrera 10K",
      desc: "Inscripción + kit deportivo",
      price: 45000,
      paid: true,
    },
    {
      id: "aa409302-1858-4aa0-91aa-4aab0c80e3f5",
      title: "Exposición de arte",
      desc: "Entrada general - Museo Nacional",
      price: 0,
      paid: false,
    },
    {
      id: "7e2582e5-b688-49f5-b306-0022d5f759e1",
      title: "Circo internacional",
      desc: "Entrada numerada",
      price: 0,
      paid: false,
    },
    {
      id: "c99cfde6-4032-4c02-97c3-754a23e0c137",
      title: "Torneo de eSports",
      desc: "Entrada espectador - Final nacional",
      price: 40000,
      paid: true,
    },
  ];

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Estadísticas</h1>

        <div className="flex flex-col gap-4">
          {/* {isSuccess &&
            data.data.map((item, index) => ( */}
          {shoppingItems.map((item, index) => (
            <div
              className="cursor-pointer rounded-lg border p-4 gap-4 flex flex-col hover:bg-slate-50"
              key={index}>
              <div className="flex flex-col">
                <p className=" font-semibold text-xl">{item.title}</p>
                <p className="">{item.desc}</p>
              </div>
              <div className="flex w-full flex-row gap-2  items-center  justify-end">
                <div
                  className="border rounded-lg px-4 py-2 hover:bg-slate-200"
                  onClick={() => {
                    navigate(`/manager/Statistics/${item.id}`);
                  }}>
                  Editar
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
