import { observable, action, makeObservable } from 'mobx'
import Client from './client'
import axios from 'axios';

class Clients {
    constructor() {
        this.clients = []
        this.clientsN = axios.get(`http://localhost:8090/clients`)
        this.length = 0
        this.clientCount = 0;
        this.countries = axios.get("http://localhost:8090/countries");
        this.owners = axios.get("http://localhost:8090/owners");

        makeObservable(this, {
            clients: observable,
            countries :observable,
            owners:observable,
            length: observable,
            clientCount: observable,
            addClient: action,
            updateClient: action,
            updateSold: action,
            updateOwner: action,
            getClient: action,
            storeClient: action,
            updateEmail: action,
            changeCount:action
        })
    }

    changeCount = () => {
        this.clientCount = this.clientCount + 1;
    };

    getClient() {
        return axios.get(`http://localhost:8090/clients`)
    }

    storeClient = async () => {
        let clients = await this.getClient()
        this.clients = [...clients.data]
    }

    addClient = async (name, surname, email, owner, country) => {
        let client = {
            first: name,
            last: surname,
            email: email,
            owner: owner || "Emily Durham",
            country: country || "Albania",
            date: null,
            emailType: null,
            sold: false
        }
        axios.post(`http://localhost:8090/clients`, client)

        this.clients.push(new Client(null, name, surname, email, owner, country, "", ""))


    }

    updateClient = async (id, name, surname, country) => {
        let data = { name: name, surname: surname, country: country }
        await axios.put(`http://localhost:8090/clients/${id}`, data)

        let client = this.clients.find(client => client.id === id)

        if (client) {
            let index = this.clients.indexOf(client)
            client.first = name
            client.last = surname
            client.country = country
            this.clients[index] = client
        }
    }

    updateSold = async (id) => {
        await axios.put(`http://localhost:8090/sold/${id}`)
        let find = this.clients.find(c => c.id === id)

        if (find) {
            find.sold = true

        }
    }

    updateOwner = async (id, ownerVal) => {
        let data = { ownerVal: ownerVal }
        await axios.put(`http://localhost:8090/owners/${id}`, data)

        let find = this.clients.find(c => c.id === id)
        if (find) {

            find.owner = ownerVal
        }
    }

    updateEmail = async (id, email_type) => {
        let data = { email_type }
        await axios.put(`http://localhost:8090/email/${id}`, data)
        let find = this.clients.find(c => c.id === id)
        if (find) {
            find.email_type = email_type
        }
    }

}
export default Clients;