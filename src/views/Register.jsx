
import logo from '../assets/logo.svg';
import logo1 from '../assets/car_logo.svg';
import '../styles/Register.css';
import '../styles/estilos.css';
import Formu from '../views/Formu.js';

const Register = ()=> {
    return (
        <div className="App">
            <header className="App-header">
            <h1>REACTPARKING<br/>SYSTEM</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={logo1} className="App-logo1" alt="logo" />
                <div className="container">
                    <Formu />
                </div>
            </header>
        </div>
    );
}

export default Register;
