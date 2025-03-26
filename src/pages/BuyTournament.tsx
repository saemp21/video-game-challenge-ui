import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Field from "../components/Field";
import { FormTicketProps } from "../utils/interface";
import { regularExp } from "../utils/regex";
// import { useBuyTicketMutation } from "../app/services";
import { useAppDispatch } from "../app/hook";
import { setResumeDataTournament } from "../app/sliceArena";

//Compras navega a lista de torneos (desc, titulo, precio)

export default function BuyTournament() {
  const { tournamentId, priceTournament } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const [
  // requestFunction,
  // {
  // data,
  // isLoading,
  // isError,
  //  reset,
  //  isSuccess
  // },
  // ] = useBuyTicketMutation();

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
  }: Partial<FormTicketProps>) => {
    console.log({
      tournamentId,
      name,
      howManyTickets,
      email,
      phoneNumber,
      donate,
      priceTournament,
    });

    dispatch(
      setResumeDataTournament({
        tournamentId,
        name,
        howManyTickets,
        email,
        phoneNumber,
        donate,
        priceTournament,
        token: "perikos",
      })
    );

    // await requestFunction({
    //   tournamentId,
    //   name,
    //   howManyTickets,
    //   email,
    //   phoneNumber,
    //   donate,
    //   priceTournament
    // })
    //   .unwrap()
    //   .then((response) => {
    // dispatch(
    //   setResumeDataTournament({
    //     tournamentId,
    //     name,
    //     howManyTickets,
    //     email,
    //     phoneNumber,
    //     donate,
    //     priceTournament,
    //     token: response.data.token,
    //   })
    // );
    //     navigate("/shopping/tournament/resume");
    //   });

    navigate("/shopping/tournament/resume");
  };

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
                {/* {isLoading ? (
                  <div className="flex text-center justify-center flex-row gap-2 px-4 py-2">
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
                    Registrando boleta
                  </div>
                ) : ( */}
                <>
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
                </>
                {/*  )} */}
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
