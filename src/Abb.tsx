import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "./app/hook";

export default function Abb() {
  const perico = useAppSelector((state) => state.login.perico);

  const navigate = useNavigate();
  return (
    <main>
      <div>
        <h1>mundo</h1>
        <Link to={"/mundo"}>navegar</Link>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            navigate(-1);
          }}>
          Navegar
        </button>
        <br />
        <p>Perico tiene un valor de {perico}</p>
      </div>
    </main>
  );
}
