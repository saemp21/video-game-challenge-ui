import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Field from "../components/Field";
import FieldSelect from "../components/FieldSelect";
import { StatisticFormProps } from "../utils/interface";

export default function StatisticEdit() {
  const navigate = useNavigate();
  const { statisticId } = useParams();
  const { state } = useLocation();
  const { title, desc } = state || { title: "", desc: "" };

  console.log(state);

  const methods = useForm<StatisticFormProps>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = ({
    tournamentDate,
    tournamentStatus,
  }: StatisticFormProps) => {
    console.log({
      statisticId,
      tournamentDate,
      tournamentStatus,
    });
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center p-7">
      <div className="flex flex-col justify-center gap-8 items-center">
        <h1 className="text-5xl font-bold">Editar Estadística</h1>
        <div className="flex flex-col">
          <FormProvider {...methods}>
            <form
              className="grid grid-cols-1 gap-x-4 gap-y-2"
              onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="border p-4">
                <p>Nombre: {title}</p>
                <p>Descripción: {desc}</p>
              </div>
              <Field
                name="tournamentDate"
                label="Fecha de torneo"
                type="date"
                placeholder="Fecha de torneo"
                rules={{
                  required: {
                    value: true,
                    message: "Fecha de torneo es requerido",
                  },
                }}
              />
              <FieldSelect
                name="tournamentStatus"
                label="Estado de torneo"
                placeholder="Estado de torneo"
                options={[
                  {
                    value: "active",
                    label: "Activo",
                  },
                  {
                    value: "inactive",
                    label: "Inactivo",
                  },
                ]}
                rules={{
                  required: {
                    value: true,
                    message: "Estado de torneo es requerido",
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
                      navigate("/manager/statistics");
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
