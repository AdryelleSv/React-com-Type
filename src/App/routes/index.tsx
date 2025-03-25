import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { DashBoard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pagina-inicial" component= {DashBoard} />
        <Route path="*" component= {() => <Redirect to="/pagina-inicial"/>}/> 
      </Switch>
    </BrowserRouter>
  );
};
