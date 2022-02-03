import {Redirect, Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Login} from "../components/login/Login";
import {Register} from "../components/register/Register";
import {Home} from "../components/home/Home";

const history = createBrowserHistory();

const AuthHome = ()=> {
    const currentUser = localStorage.getItem('logged')
    return (currentUser == null || currentUser === '') ? <Redirect to="/" /> : <Home />
}

export const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route path="/home" component={AuthHome}/>
            </Switch>
        </Router>
    );
};
