import { observable, makeObservable } from 'mobx'

 class Client {

    constructor(id, name,surname, email, owner, country,firstContact,email_type) {
       
        this.id = id
        this.first = name
        this.last=surname
        this.email = email
        this.owner = owner
        this.country = country
        this.sold = false
        this.email_type = email_type ?? null
        this.firstContact = firstContact ?? null
        
        makeObservable(this, {
            first:observable,
            email: observable,
            last:observable,
            email_type: observable,
            sold: observable,
            owner: observable,
            country: observable,
            firstContact:observable
    
        })
    }

}
export default Client;