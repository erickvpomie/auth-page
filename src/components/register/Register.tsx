import {useState} from "react";
import {createBrowserHistory} from "history";

export const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [label, setLabel] = useState('');

    const history = createBrowserHistory();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        let newUser = {
            name,
            lastName,
            email,
            username,
            password
        }

        if(newUser.name !== '' && newUser.lastName !== '' && newUser.email !== '' && newUser.username !== '' && newUser.password !== ''){
            localStorage.setItem(`${username}`, JSON.stringify(newUser));
            history.goBack();
        }else{
            setLabel('Todos los campos son obligatorios')
        }
    }



    return (
        <div className="container bg-dark d-flex justify-content-center align-items-center flex-column ">
            <h2 className="text-white mt-5 p-5">Registro</h2>
            <h5 className="text-white">{label}</h5>
            <form onSubmit={handleSubmit} className="d-flex flex-column w-50" >
                <input className="form-control bg-dark text-white mt-4" type="text" value={name} name="name" placeholder="Nombre" onChange={({target}) => setName(target.value)}/>
                <input className="form-control bg-dark text-white mt-4" type="text" value={lastName} name="lastName" placeholder="Apellido" onChange={({target}) => setLastName(target.value)}/>
                <input className="form-control bg-dark text-white mt-4" type="email" value={email} name="email" placeholder="Correo electrónico" onChange={({target}) => setEmail(target.value)}/>
                <input className="form-control bg-dark text-white mt-4" type="text" value={username} name="username" placeholder="Usuario" onChange={({target}) => setUsername(target.value)}/>
                <input className="form-control bg-dark text-white mt-4 mb-4" type="password" value={password} name="password" placeholder="Contraseña" onChange={({target}) => setPassword(target.value)}/>
                <button className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};
