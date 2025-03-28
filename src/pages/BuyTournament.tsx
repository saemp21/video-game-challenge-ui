import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Field from "../components/Field";
import { FormTicketProps } from "../utils/interface";
import { regularExp } from "../utils/regex";
import { useSellTicketMutation } from "../app/services";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setResumeDataTournament } from "../app/sliceArena";
import { useEffect } from "react";

//Compras navega a lista de torneos (desc, titulo, precio)

export default function BuyTournament() {
  const { tournamentId, priceTournament } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tournamentType = useAppSelector((state) => state.arena.ticketType);

  const [requestFunction, { isError }] = useSellTicketMutation();

  const methods = useForm<FormTicketProps>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async ({
    name,
    howManyTickets,
    email,
    phoneNumber,
    donate,
  }: FormTicketProps) => {
    const torneo_id: string = tournamentId as string;

    console.log({
      torneo_id,
      correo: email,
      numero_telefono: phoneNumber,
      donacion: Number(donate || 0),
      esEspectador: tournamentType === "viewer",
      numero_entradas: howManyTickets,
      costo_boleta: Number(priceTournament),
      nombre: name,
    });

    // dispatch(
    //   setResumeDataTournament({
    //     tournamentId,
    //     name,
    //     howManyTickets,
    //     email,
    //     phoneNumber,
    //     donate,
    //     priceTournament,
    //     token: "perikos",
    //   })
    // );

    await requestFunction({
      torneo_id,
      correo: email,
      numero_telefono: phoneNumber,
      donacion: Number(donate || 0),
      esEspectador: tournamentType === "viewer",
      numero_entradas: howManyTickets,
      costo_boleta: Number(priceTournament),
      nombre: name,
    })
      .unwrap()
      .then((response) => {
        dispatch(
          setResumeDataTournament({
            tournamentId: response.data.tiquete_id,
            transaccion_id: response.data.tiquete_id,
            token_id: response.data.tiquete_id,
            name: response.data.nombre,
            howManyTickets,
            email: response.data.correo,
            phoneNumber,
            donate: response.data.precio.toString(),
            priceTournament: response.data.precio.toString(),
          })
        );
        navigate("/shopping/tournament/resume");
      });

    // navigate("/shopping/tournament/resume");
  };

  useEffect(() => {
    if (isError) {
      alert("Ocurrio un error al comprar la boleta");
    }
  }, [isError]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Compra boleta</h1>
        <div className="flex flex-col ">
          <FormProvider {...methods}>
            <form
              className="grid grid-cols-2 gap-x-4"
              onSubmit={methods.handleSubmit(onSubmit)}>
              <Field
                name="name"
                label="Nombre"
                placeholder="Nombre"
                rules={{
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                  pattern: {
                    value: regularExp.onlyLetters,
                    message: "Solo se admiten letras",
                  },
                }}
              />
              <Field
                name="howManyTickets"
                type="number"
                label="Numero de entradas"
                placeholder="Numero de entradas"
                rules={{
                  required: {
                    value: true,
                    message: "Cantidad de boletas es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveNumber,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <Field
                name="email"
                type="email"
                label="Correo Electrónico"
                placeholder="Correo Electrónico"
                rules={{
                  required: {
                    value: true,
                    message: "Correo electrónico es requerido",
                  },
                  pattern: {
                    value: regularExp.email,
                    message: "Formato invalido del correo",
                  },
                }}
              />
              <Field
                name="phoneNumber"
                type="tel"
                label="Numero de teléfono"
                placeholder="Numero de teléfono"
                rules={{
                  required: {
                    value: true,
                    message: "Numero de teléfono es requerido",
                  },
                }}
              />
              <Field
                name="donate"
                label="Donación $"
                placeholder="Donación $"
              />
              <div className="flex col-span-2 flex-row justify-end gap-4 w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    navigate("/shopping");
                  }}
                  className="px-4 py-2 border hover:opacity-85 bg-red-400">
                  Cancelar
                </button>
                <button
                  disabled={!methods.formState.isValid}
                  className="disabled:bg-slate-300 px-4 py-2 border hover:opacity-85 bg-green-400">
                  Comprar
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

//id de boleta navegar a otra vista que pida (corrreo, num entradas, nombre, telefono, donacion, comprar, cancelar)

// al terminar el formulario muestre el resumen con el metodo de pago (transactionid)
