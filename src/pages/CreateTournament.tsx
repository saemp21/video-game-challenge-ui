import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../components/Field";
import FieldTextArea from "../components/FieldTextArea";
import { FormTournamentProps } from "../utils/interface";
import { regularExp } from "../utils/regex";
import { useBuyTicketMutation } from "../app/services";
// import { useAppDispatch } from "../app/hook";
// import moment from "moment";
import "moment-timezone";
import FieldSelect from "../components/FieldSelect";
import { useEffect } from "react";
import { useAppSelector } from "../app/hook";
import moment from "moment";
import "moment-timezone";
//Compras navega a lista de torneos (desc, titulo, precio)

export default function CreateTournament() {
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.arena.profile?.email);
  // const dispatch = useAppDispatch();

  const [
    requestFunction,
    //  { data, isLoading, isError, reset, isSuccess }
  ] = useBuyTicketMutation();

  const methods = useForm<FormTournamentProps>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    methods.reset({
      valorEntradaVista: 0,
    });
  }, []);

  const onSubmit = async ({
    nombre,
    descripcion,
    fechaInicio,
    estado,
    fechaFin,
    valorEntrada,
    videoJuegoId,
    categoriaId,
    valorPremio,
    platStreamingId,
    tipoStreaming,
    subAdministrador1,
    subAdministrador2,
    porcentajePreventa,
    preventaFin,
    valorEntradaVista,
  }: FormTournamentProps) => {
    console.log({
      organizador: email || "",
      nombre,
      descripcion,
      fechaInicio: moment(fechaInicio).format("DD/MM/YYYY"),
      estado,
      fechaFin: moment(fechaFin).format("DD/MM/YYYY"),
      valorEntrada,
      videoJuegoId,
      categoriaId,
      valorPremio,
      platStreamingId,
      tipoStreaming: tipoStreaming === "true" ? true : false,
      subAdministrador1,
      subAdministrador2,
      porcentajePreventa,
      preventaFin: moment(preventaFin).format("DD/MM/YYYY"),
      valorEntradaVista,
    });
    // .format('MM/DD/YYYY');
    await requestFunction({
      nombre,
      descripcion,
      fechaInicio: moment(fechaInicio).format("DD/MM/YYYY"),
      estado,
      fechaFin: moment(fechaFin).format("DD/MM/YYYY"),
      valorEntrada,
      videoJuegoId,
      categoriaId,
      valorPremio,
      platStreamingId,
      tipoStreaming: tipoStreaming === "true" ? true : false,
      subAdministrador1,
      subAdministrador2,
      porcentajePreventa,
      plataformaId: platStreamingId,
      preventaFin: moment(preventaFin).format("DD/MM/YYYY"),
      valorEntradaVista,
      organizador: email || "",
    })
      .unwrap()
      .then(() => {
        navigate("/shopping/tournament/resume");
      })
      .catch((error) => {
        alert({
          message: error,
        });
      });
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
                name="nombre"
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
                name="descripcion"
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
                name="fechaInicio"
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
                name="estado"
                label="Estado"
                placeholder="Estado"
                options={[
                  {
                    value: 1,
                    label: "uno",
                  },
                  {
                    value: 2,
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
                name="fechaFin"
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
                name="valorEntrada"
                type="number"
                label="Valor de entrada participante"
                placeholder="Valor de entrada participante"
                rules={{
                  required: {
                    value: true,
                    message: "Valor de entrada participante es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveNumber,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <FieldSelect
                name="videoJuegoId"
                label="Juego"
                placeholder="Juego"
                options={[
                  {
                    value: "1",
                    label: "uno",
                  },
                  {
                    value: "2",
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
              {/* <FieldSelect
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
              /> */}
              <FieldSelect
                name="categoriaId"
                label="Categoría"
                placeholder="Categoría"
                options={[
                  {
                    value: "1",
                    label: "16",
                  },
                  {
                    value: "2",
                    label: "32",
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
                name="platStreamingId"
                label="Plataforma Stream"
                placeholder="Plataforma Stream"
                options={[
                  {
                    value: "1",
                    label: "Twitch",
                  },
                  {
                    value: "2",
                    label: "YouTube",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Plataforma Stream es requerido",
                  },
                }}
              />
              <FieldSelect
                name="tipoStreaming"
                label="Tipo de Stream"
                placeholder="Tipo de Stream"
                options={[
                  {
                    value: "false",
                    label: "Gratuito",
                  },
                  {
                    value: "true",
                    label: "Pago",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Tipo de Stream es requerido",
                  },
                }}
              />
              <Field
                name="subAdministrador1"
                type="email"
                label="Sub-Administrador 1"
                placeholder="Sub-Administrador 1"
                rules={{
                  pattern: {
                    value: regularExp.email,
                    message: "Formato de correo invalido",
                  },
                }}
              />
              <Field
                name="subAdministrador2"
                type="email"
                label="Sub-Administrador 2"
                placeholder="Sub-Administrador 2"
                rules={{
                  pattern: {
                    value: regularExp.email,
                    message: "Formato de correo invalido",
                  },
                }}
              />
              <Field
                name="porcentajePreventa"
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
                name="preventaFin"
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
                name="valorEntradaVista"
                type="number"
                label="Valor entrada espectador"
                placeholder="Valor entrada espectador"
                rules={{
                  required: {
                    value: true,
                    message: "Valor entrada espectador es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveDecimalNumbers,
                    message: "Formato numérico invalido",
                  },
                }}
              />
              <Field
                name="valorPremio"
                type="number"
                label="Valor del premio participante"
                placeholder="Valor del premio participante"
                rules={{
                  required: {
                    value: true,
                    message: "Valor del premio participante es requerido",
                  },
                  pattern: {
                    value: regularExp.positiveNumber,
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
                    Crear
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
