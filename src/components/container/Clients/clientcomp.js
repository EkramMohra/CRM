import React from 'react';
import { useState ,useEffect} from 'react';
import MyModal from './popup';
import { observer, inject } from 'mobx-react'
import {FcCheckmark} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import './client.css'

function ClientComp(props) {

    const [modalShow, setModalShow] = useState(false);
    const [first, setFirst] = useState(props.client.first);
    const [last, setLast] = useState(props.client.last);
    const [country, setCountry] = useState(props.client.country);

    useEffect(() => {
        setFirst(props.client.first)
        setLast(props.client.last)
        setCountry(props.client.country)
    },[props.client.country,props.client.first,props.client.last])

    const updateClientValues = (id, first, last, country) => {
        if(id && first && last && country)
            props.c.updateClient(id, first, last, country)
    }

    return (
        <>
            <MyModal show={modalShow}
                client={props.client}
                onHide={() => setModalShow(false)}
                onChange={updateClientValues}
            />

            <tr onClick={() => setModalShow(true)} >
  

                <td>{first}</td>
                <td>{last}</td>
                <td>{props.client.email}</td>
                <td>{country}</td>
                <td className='center'>{props.client.date}</td>
                <td className='center'>{!props.client.email_type?"--":props.client.email_type}</td>
                <td className='center'>{!props.client.sold ? <FcCheckmark/> : <AiOutlineClose/>}</td>
                <td >{props.client.owner}</td>
            </tr>
        </>
    )
}


export default inject("c")(observer(ClientComp))