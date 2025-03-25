import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../components/Field";
import FieldTextArea from "../components/FieldTextArea";
import { FormTicketProps, FormTournamentProps } from "../utils/interface";
import { regularExp } from "../utils/regex";
import { useBuyTicketMutation } from "../app/services";
import { useAppDispatch } from "../app/hook";
import moment from "moment";
import "moment-timezone";
import FieldSelect from "../components/FieldSelect";
//Compras navega a lista de torneos (desc, titulo, precio)

export default function CreateTournament() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [
    // requestFunction,
    {
      // data,
      // isLoading,
      // isError,
      //  reset,
      //  isSuccess
    },
  ] = useBuyTicketMutation();

  const methods = useForm<FormTournamentProps>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async ({
    name,
    desc,
    startDate,
    endDate,
    cost,
    videGameId,
    topic,
    category,
    platformStreaming,
    costPreSale,
    finalPreSale,
    costEntrance,
  }: FormTournamentProps) => {
    console.log({
      name,
      desc,
      startDate,
      endDate,
      cost,
      videGameId,
      topic,
      category,
      platformStreaming,
      costPreSale,
      finalPreSale,
      costEntrance,
    });

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
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Crear Torneo</h1>
        <div className="flex flex-col ">
          <FormProvider {...methods}>
            <form
              className="grid grid-cols-1 gap-x-4 gap-y-2"
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
              <FieldTextArea
                name="desc"
                label="Descripción"
                placeholder="Descripción"
                rules={{
                  required: {
                    value: true,
                    message: "Descripción es requerido",
                  },
                }}
              />
              <Field
                name="startDate"
                label="Fecha de inicio"
                type="date"
                placeholder="Fecha de inicio"
                rules={{
                  required: {
                    value: true,
                    message: "Fecha de inicio es requerido",
                  },
                }}
              />
              <FieldSelect
                name="startDate"
                label="Estado"
                placeholder="Estado"
                options={[
                  {
                    value: "uno",
                    label: "uno",
                  },
                  {
                    value: "dos",
                    label: "dos",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Estado es requerido",
                  },
                }}
              />
              <Field
                name="endDate"
                label="Fecha de final"
                type="date"
                placeholder="Fecha de final"
                rules={{
                  required: {
                    value: true,
                    message: "Fecha de final es requerido",
                  },
                }}
              />
              <Field
                name="cost"
                type="number"
                label="Valor de entrada"
                placeholder="Valor de entrada"
                rules={{
                  required: {
                    value: true,
                    message: "Valor de entrada es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveNumber,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <FieldSelect
                name="videGameId"
                label="Juego"
                placeholder="Juego"
                options={[
                  {
                    value: "uno",
                    label: "uno",
                  },
                  {
                    value: "dos",
                    label: "dos",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Estado es requerido",
                  },
                }}
              />
              <FieldSelect
                name="topic"
                label="Tema"
                placeholder="Tema"
                options={[
                  {
                    value: "uno",
                    label: "uno",
                  },
                  {
                    value: "dos",
                    label: "dos",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Tema es requerido",
                  },
                }}
              />
              <FieldSelect
                name="category"
                label="Categoría"
                placeholder="Categoría"
                options={[
                  {
                    value: "uno",
                    label: "uno",
                  },
                  {
                    value: "dos",
                    label: "dos",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Tema es requerido",
                  },
                }}
              />
              <FieldSelect
                name="platformStreaming"
                label="Plataforma Stream"
                placeholder="Plataforma Stream"
                options={[
                  {
                    value: "uno",
                    label: "uno",
                  },
                  {
                    value: "dos",
                    label: "dos",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Plataforma Stream es requerido",
                  },
                }}
              />
              <Field
                name="costPreSale"
                type="number"
                label="Porcentaje de pre-venta"
                placeholder="Porcentaje de pre-venta"
                rules={{
                  required: {
                    value: true,
                    message: "Porcentaje de pre-venta es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveDecimalNumbers,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <Field
                name="finalPreSale"
                type="date"
                label="Finalización de pre venta"
                placeholder="Finalización de pre venta"
                rules={{
                  required: {
                    value: true,
                    message: "Finalización de pre venta es requerido",
                  },
                }}
              />
              <Field
                name="costEntrance"
                type="number"
                label="Porcentaje de pre-venta"
                placeholder="Porcentaje de pre-venta"
                rules={{
                  required: {
                    value: true,
                    message: "Porcentaje de pre-venta es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveDecimalNumbers,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <div className="flex col-span-1 flex-row justify-end gap-4 w-full">
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
                      navigate("/manager");
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
