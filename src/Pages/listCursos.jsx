import axios from 'axios';
import { useState, useEffect } from 'react';
import ServiceProva from '../Service/api';
import './listCursos.css';

export default function ListCursos () {

    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = "https://cursos-spring.herokuapp.com/cursos";

    useEffect (() => {
        async function loadCursos() {
            await ServiceProva.retrieveAllCursos()
            .then(
                response => {
                    setCursos(response.data);
                    setLoading(false);
                }
            )
        }
        loadCursos()
    },[])

    if(loading){
        return(
            <div className="container">
               <h2 className="loading">Carregando os cursos, aguarde...</h2>
            </div>
        )
    }

    
    async function handleDelete(id) {
        
        await axios.delete(`${url}/${id}`)
        .then(
            alert("Curso deletado com sucesso!")
        )
    };

    return(
        <div className="container">


            {cursos.map((curso) => {
                return(
                    <div className="container-article">
                        <article key={curso.id}>
                            <h1>Curso: {curso.nome}</h1>
                            <h4>Modalidade: {curso.modalidade}</h4>
                            <button className="delete" type="button" onClick={() => handleDelete(curso.id)}>Apagar</button>
                        </article>
                    </div>
                )
            })}
        </div>
    )

}