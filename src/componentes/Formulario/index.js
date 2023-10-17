import "./formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

    

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')


    const aoSalvar = (evento) =>{
      evento.preventDefault()
      props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
      })    
      setNome('')
      setCargo('')
      setImagem('') 
      setTime('')
      //limpa formulário
    }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador </h2>
        <CampoTexto obrigatoria={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={valor => setNome(valor)} />
        <CampoTexto obrigatoria={true}label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
        <CampoTexto label="Imagem" placeholder="Digite o sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />
        <ListaSuspensa obrigatoria={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};



export default Formulario;
// ()esse parametro executa esse bloco de condigo =>{
// }
// function Formulario() {

// }
