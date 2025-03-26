import { useHistory } from "react-router-dom";
//segunda forma de navegar entre paginas no react


export const Login = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/pagina-inicial");
  };

  return (
    <div>
      Login
      <button onClick={handleClick} type="submit">
        pagina inicial
      </button>
    </div>
  );
};
