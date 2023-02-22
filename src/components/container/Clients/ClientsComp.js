import { observer, inject } from 'mobx-react'
import Table from 'react-bootstrap/Table'
import ClientComp from './clientcomp'
import './clients.css'

function Client(props) {

    return (
        <Table striped bordered hover size="sm" className="table-style m-5">
            <thead>
                <tr className="col">
                    <th>Name</th>
                    <th>Surename</th>
                    <th>E-mail</th>
                    <th>Country</th>
                    <th>First Contact</th>
                    <th>E-mail Type</th>
                    <th>Sold</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                {props.c.clients.map((client, index) => <ClientComp key={index} client={client} />)}
            </tbody>
        </Table>

    )
}

export default inject("c")(observer(Client))
