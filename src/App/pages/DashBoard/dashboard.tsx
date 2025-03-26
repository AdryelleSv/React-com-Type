//{Link} tem a mesma função do <a> no HTML
import {Link} from 'react-router-dom'

export const DashBoard = () => {
  return (
    <div>
      <p>DashBoard</p>
    <Link to="/entrar">Login</Link>
    </div>
  );
};
