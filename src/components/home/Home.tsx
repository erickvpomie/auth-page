import {useHistory} from "react-router-dom";

export const Home = () => {

    const history = useHistory();
    let userData : any = '';
    const user = localStorage.getItem('logged');
    user != null && (userData = JSON.parse(user));

    const logout = () => {
        localStorage.removeItem('logged');
        history.push('/');
    }

    return (
        <div className="container bg-dark d-flex text-white justify-content-center align-items-center flex-column ">
            <h2 className="mt-5 pt-5">Home</h2>
            <div className="d-flex container flex-column w-50 justify-content-center align-items-center">
                <h5>Bienvenido {userData.name}</h5>
                <p>(Sólo tu puedes ver esta página)</p>
                <div className="card pt-2 w-100 bg-dark">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Nombre: {userData.name}</li>
                        <li className="list-group-item">Apellido: {userData.lastName}</li>
                        <li className="list-group-item">Correo: {userData.email}</li>
                        <li className="list-group-item">Usuario: {userData.username}</li>
                    </ul>
                </div>

                <img src={('/assets/logo.svg')} alt="" />

                <button className="btn btn-primary mt-4" onClick={logout}>Cerrar Sesión</button>
            </div>
        </div>
    );
};
