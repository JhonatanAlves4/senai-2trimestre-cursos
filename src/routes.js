import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/navbar';
import ListCursos from './Pages/listCursos';
import AddCursos from './Pages/addCursos';

const Routes = () => {
    return(
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={ListCursos}/>
                <Route exact path="/adicionar-cursos" component={AddCursos}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;