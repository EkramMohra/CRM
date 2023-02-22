import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clients from './Clients/ClientsComp';
import Action from './Actions/Actions';
import Analytics from './analyrics-components/Analytics ';
import Home from "./Home"

function Container() {
    return (
        <Router>
            <div>
                <Route path="/" exact render={() => <Home />} />

                <Route exact path="/clients" render={() => <Clients />} />

                <Route exact path="/actions" render={() =><Action />} />

                <Route path="/analytics" exact render={() =><Analytics />
                } />
            </div>
        </Router>
    )
}


export default Container;
