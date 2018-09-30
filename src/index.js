import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';


function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}


function Appp(){
    return(
    <div><Welcome name="Sakhawat"></Welcome>
    <Welcome name="Mishu"></Welcome></div>
    );
}

ReactDOM.render(<Appp></Appp>, document.getElementById('root'));
registerServiceWorker();
