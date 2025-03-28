import { FormProvider, useForm } from "react-hook-form";
import { useEnterEventMutation } from "../app/services";
import { EnterEventBodyRequest } from "../utils/interface";
import Field from "../components/Field";
import { regularExp } from "../utils/regex";
import { useNavigate } from "react-router-dom";

export default function EventForm() {
  const [requestFunction] = useEnterEventMutation();
  const navigate = useNavigate();

  const methods = useForm<EnterEventBodyRequest>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async ({ correo, token }: EnterEventBodyRequest) => {
    console.log({ correo, token });

    await requestFunction({ correo, token })
      .unwrap()
      .then((response) => {
        if (response?.verificado === "si") {
          navigate("/event/success");
        }
        if (response?.verificado === "si") {
          navigate("/event/failed");
        }
      })
      .catch((error) => {
        alert(
          JSON.stringify({
            error,
            message: "Ocurrió un error al ejecutar el servicio",
          })
        );
      });
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Ingresar Evento</h1>
        <div className="flex flex-row gap-4">
          <FormProvider {...methods}>
            <form
              className="grid grid-cols-1 gap-x-4"
              onSubmit={methods.handleSubmit(onSubmit)}>
              <Field
                name="correo"
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
                name="token"
                type="text"
                label="Token de evento"
                placeholder="Token de evento"
                rules={{
                  required: {
                    value: true,
                    message: "Token de evento es requerido",
                  },
                }}
              />
              <div className="flex col-span-1 flex-row justify-end gap-4 w-full pt-7">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="px-4 py-2 border hover:opacity-85 bg-red-400">
                  Cancelar
                </button>
                <button
                  disabled={!methods.formState.isValid}
                  className="disabled:bg-slate-300 px-4 py-2 border hover:opacity-85 bg-green-400">
                  Ingresar
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
