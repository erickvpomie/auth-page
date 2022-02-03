import {useState} from "react";
import {useHistory} from "react-router-dom";

export const Login = () => {
    const history = useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [label, setLabel] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const user = localStorage.getItem(username);

        if(!user) {
            setLabel('Usuario no encontrado')
            return
        }

        const userData = JSON.parse(user);

        if(userData.password !== password) {
            setLabel('Verifica tus credenciales');
            return;
        }

        localStorage.setItem('logged', JSON.stringify(userData))
        history.push('/home');

    }

    const redirectToRegister = () => {
        history.push('/register');
    }

    return (
        <div className="container bg-dark d-flex justify-content-center align-items-center flex-column ">
            <h2 className="text-white mt-5 p-5">Login</h2>
            <h5 className="text-white">{label}</h5>
            <form onSubmit={handleSubmit} className="d-flex flex-column w-50" >
                <input className="form-control bg-dark text-white mt-4" type="text" value={username} name="username" placeholder="Usuario" onChange={({target}) => setUsername(target.value)}/>
                <input className="form-control bg-dark text-white mt-4 mb-4" type="password" value={password} name="password" placeholder="Contraseña" onChange={({target}) => setPassword(target.value)}/>
                <button className="btn btn-primary">Login</button>
            </form>
            <button className="btn btn-secondary w-50 mt-3" onClick={redirectToRegister}>Registro</button>
        </div>
    );
};
