
import React from "react";
import { observer, inject } from 'mobx-react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import './popup.css'


const MyModal = props => {

    const [first, setFirst] = useState(props.client.first)
    const [last, setLast] = useState(props.client.last)
    const [country, setcountry] = useState(props.client.country)
    let [countries, setCountries] = useState([])
  
    useEffect( () => {
        (async () => {
      
            const countriesData = await getCountries()
            updateCountries(countriesData.data)
        })()

    },[])

    
    const getCountries = () => {
        return  axios.get("http://localhost:8090/countries")
    }
  
    const updateCountries = countriesData => {
        return setCountries(countriesData)   
    }
  
    const handleUpdate = async () => {
        props.onChange(props.client.id, first, last, country)
        props.onHide()
    }

    function handleChange(e) {
        let name = e.target.name
        name === "name" ? setFirst(e.target.value)
            : name === "surname" ? setLast(e.target.value)
                : setcountry(e.target.value)
    }

    return (
        <Modal  {...props} centered aria-labelledby="contained-modal-title-vcenter">


            <Modal.Body>
                <div> name:<input className="input-class" name="name" defaultValue={first} onChange={handleChange} /></div>
                <div> surname:<input className="input-class" name="surname" defaultValue={last} onChange={handleChange} /></div>
                <select id="dropdown-item-button-client" className="form-control" defaultValue={country} name="country" onChange={handleChange}>
                      
                      {countries.map(country =>  
                        <option key={country.id}  value={country.country} >
                          {country.country} 
                        </option>
                        )}
                  </select>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="warning" onClick={handleUpdate}>Update</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default inject("c")(observer(MyModal))



