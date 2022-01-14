import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Colaboradores from "./pages/Colaboradores";
import Noticias from "./pages/Noticias";
import Socios from "./pages/Socios";
import NoticiaDet from "./pages/NoticiaDet";
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <Router>
            <Route>
                <ScrollToTop></ScrollToTop>
            </Route>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/colaboradores" exact>
                    <Colaboradores />
                </Route>
                <Route path="/noticias" exact>
                    <Noticias />
                </Route>
                <Route path="/noticia/:id">
                    <NoticiaDet />
                </Route>
                <Route path="/nosotros">
                    <Nosotros />
                </Route>
                <Route path="/socios">
                    <Socios />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
