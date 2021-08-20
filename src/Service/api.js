import axios from 'axios';

const API = "https://cursos-spring.herokuapp.com";

class ServiceProva {

    retrieveAllCursos() {
        return axios.get(`${API}/cursos/`)
    }

    saveCurso(values) {
        return axios.post(`${API}/cursos/`, values)
    }

    deleteCurso(id) {
        return axios.delete(`${API}/cursos/${id}`)
    }
}
export default new ServiceProva();