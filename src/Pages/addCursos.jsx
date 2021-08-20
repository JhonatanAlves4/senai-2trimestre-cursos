import { useState } from 'react';
import axios from 'axios';
import './addCursos.css';

export default function AddCursos() {

    const url = "https://cursos-spring.herokuapp.com/cursos/";

    const [data, setData] = useState({
        nome: '',
        modalidade: ''
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            nome: data.nome,
            modalidade: data.modalidade
        })
        .then(res => {
            console.log(res.data)
            alert("Curso cadastrado com sucesso!")
        })
    }

    function handle(ev) {
    
        const {name, value} = ev.target;

        setData({...data, [name]: value});

    }


    return(
        <div className="container-form">

            {/* <form onSubmit={(e) => submit(e)}>
                <div class="title">Bem vindo</div>
                <div class="subtitle">Adicione um curso!</div>
                
                <label>Nome do Curso:</label><br/>
                <input onChange={(ev) => handle(ev)} type="text" name="nome" value={data.nome || ''} placeholder="Ex: Marketing Digital" /><br/>
                
                
                <label>Qual modalidade:</label><br/>
                <input onChange={(ev) => handle(ev)} type="text" name="modalidade" value={data.modalidade || ''} placeholder="Ex: EAD" /><br/>
                
                <button type="submit">Registrar</button>
            </form> */}

    <form  onSubmit={(e) => submit(e)}>
      <div className="title">Bem vindo</div>
      <div className="subtitle">Adicione um curso!</div>
      <div className="input-container ic1">
        <input onChange={(ev) => handle(ev)} name="nome" value={data.nome || ''} id="firstname" className="input" type="text" placeholder="Nome do curso" />
        
        
      </div>
      <div className="input-container ic2">
        <input onChange={(ev) => handle(ev)} name="modalidade" value={data.modalidade || ''} id="lastname" className="input" type="text" placeholder="Modalidade" />
      </div>
      
      <button type="submit" className="submit">Registrar</button>
    </form>
        </div>
    )
}