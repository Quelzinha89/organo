import { useState } from 'react'
import'./campoTexto.css'
const CampoTexto = (props) => {


    const aoDigitado =(evento)=>{
     props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatoria} placeholder={props.placeholder}/>
          
        </div>
    ) 
}
 
export default CampoTexto
// props-propriedades-label-rotulo
//hook-um gancho
//seter-uma forma de definir o valor