import { useState, useEffect } from "react"
import { observer, inject } from "mobx-react"
import { withRouter } from "react-router"
import axios from 'axios';
import './updateClient.css'


function UpdateClient(props) {

    const [client, setClient] = useState({})
    const [owner, setOwner] = useState("")
    const [emailType, setEmailType] = useState("")
    const [sold, setSold] = useState("")
    const [owners, setOwners] = useState([])
    const [clients, setClients] = useState([])
    
    const updateOwners = ownersData => setOwners([...ownersData])
    const updateClients = clientData => setClients([...clientData])

    const getOwners = () => {
        return axios.get("http://localhost:8090/owners")
    }

    const getClients = () => {
        return axios.get("http://localhost:8090/clients")
    }

    useEffect(() => {

        (async () => {
            const ownersData = await getOwners()
            const clientData = await getClients()
            updateOwners(ownersData.data)
            updateClients(clientData.data)
        })()

    }, [])

    function updateEmail() {
        props.c.updateEmail(client.id, emailType)
        props.history.push("/clients")
    }

    function updateOwner() {
        props.c.updateOwner(client.id, owner)
        props.history.push("/clients")
    }

    function getClient(e) {
        setClient(props.c.clients[e.target.value])
    }

    function updateSold() {

        props.c.updateSold(client.id)
        props.history.push("/clients")
    }

    function handleChange(e) {

        let name = e.target.name
        name === "owner" ? setOwner(e.target.value) : name === "sold" ?
            setSold(e.target.value) : setEmailType(e.target.value)
    }

    return (
        <div className="update">
            <header>UPDATE</header>
            <div>
               <div className="left">Client:</div> 
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <select className="select" onChange={getClient}>
                <option value="clients">Client Name</option>
                    {clients.map((cl, index) => <option key={cl.first} value={index}>{cl.first} {cl.last} </option>)}

                </select>

            </div>

            <div>
            <div className="left"> Tranfer ownership to:</div> 
             &emsp;&emsp;

                <select name="owner" className="select" onChange={handleChange} >
                <option value="clients">Owner Name</option>
                    {owners.map(cl =>
                     <option selected={cl.owner === client.owner ? "selected" : null}
                       key={cl.owner} value={cl.owner}>{cl.owner}</option>)}
                </select>

                &emsp;&emsp;
                <button className="right" onClick={updateOwner}>
                 TRANSFER
                </button>
            </div>

            <div>
            <div className="left">  Send email:</div> 
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                <select name="emailType" className="select" onChange={handleChange}>
                    <option value="emailType">emailType</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>

                </select>

                &emsp;&emsp;
                <button className="right" onClick={updateEmail}>
                    SEND
                </button>
            </div>
            <div>
               <div className="left"> Declare sale!</div>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button className="right" disabled={client.sold === true} onClick={updateSold}>
                    DECLARE
                </button>

            </div>
        </div>
    )
}

export default inject("c")(observer(withRouter(UpdateClient)))
