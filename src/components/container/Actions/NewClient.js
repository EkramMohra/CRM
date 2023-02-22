import { observer, inject } from "mobx-react"
import { withRouter } from "react-router"
import { useState } from "react";
import './newClient.css'

function NewClient(props) {

    
    const [inputName, setInputName] = useState("")
    const [inputsurName, setInputsurName] = useState("")
    const [inputCountry, setInputCountry] = useState("")
    const [inputOwner, setInputOwner] = useState("")

    function addClient() {

        props.c.addClient(inputName, inputsurName, `${inputName+inputsurName}@gmail.com`, inputOwner, inputCountry)
        props.history.push("/clients")

    }

    function handleChange(e) {
        let name = e.target.name
            name === "name" ? setInputName(e.target.value)
            : name==="surname"?setInputsurName(e.target.value)
            :name==="owner"?setInputOwner(e.target.value):setInputCountry(e.target.value)
    }
    return (
        <div className="add">
           <p> ADD CLIENT</p>

            <div>
                First name:
                &emsp;
                <input className="input" name="name"  defaultValue={inputName} onChange={handleChange} />
            </div>
            <div>
                Surname:
                &emsp;&ensp;
                <input className="input" name="surname" defaultValue={inputsurName} onChange={handleChange} />
            </div>
            <div>
                Country:
                &emsp;&emsp;
                <input className="input" name="country" defaultValue={inputCountry} onChange={handleChange} />
            </div>
            <div>
                Owner:
                &emsp;&emsp;&ensp;
                <input className="input" name="owner" defaultValue={inputOwner} onChange={handleChange} />
            </div>
            <button onClick={addClient}>Add New Client</button>
        </div>
    )
}

export default inject("c")(observer(withRouter(NewClient)))


