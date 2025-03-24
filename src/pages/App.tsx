import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
// import { Form } from "../utils";
// import { useLoginMutation } from "../app/services";
import { useAppDispatch, useAppSelector } from "../app/hook";
// import { increment, setNumber } from "../app/sliceArena";

export default function App() {
  const navigate = useNavigate();
  // const [login, { isError, isLoading }] = useLoginMutation();
  // const perico = useAppSelector((state) => state.login.perico);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm({
    mode: "all",
    criteriaMode: "all",
  });

  // const onSubmit = async ({ ...data }) => {
  //   const { email, password } = data as Form;
  //   try {
  //     await login({ email, password })
  //       .unwrap()
  //       .then(() => {
  //         navigate("/mundo");
  //       });
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error al iniciar sesión");
  //   }
  //   console.log({ email, password });
  // };

  // if (isLoading) {
  //   return <div>Cargando...</div>;
  // }

  // if (isError) {
  //   return <div>Error al iniciar sesión</div>;
  // }

  return (
    <main>
      <div>
        <h1>hola</h1>
        <p>parrafos</p>
        <br />
        <form id="login" onSubmit={handleSubmit(() => {})}>
          <InputField
            inputId="email"
            label="Correo"
            control={control}
            type="email"
            rules={{
              required: {
                value: true,
                message: "Campo requerido",
              },
            }}
          />
          <br />
          <InputField
            inputId="password"
            label="Contraseña"
            type="password"
            control={control}
            rules={{ required: "Campo requerido" }}
          />
          <br />
          <button form="login"> capturar</button>
        </form>

        <br />

        <Link to={"/mundo"}>navegar</Link>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            navigate("/mundo");
          }}>
          Navegar
        </button>
        <br />
        {/* <p>Valor de perico: {perico}</p> */}

        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // dispatch(increment());
          }}>
          Incrementar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // dispatch(setNumber(50));
          }}>
          Asignar
        </button>
        <br />
      </div>
    </main>
  );
}
