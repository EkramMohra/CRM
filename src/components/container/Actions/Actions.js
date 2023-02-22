import NewClient from './NewClient'
import UpdateClient from './UpdateClient'

function Action(props) {
    return (
        <div>
            <UpdateClient />
            <hr></hr>
            <NewClient />
        </div>
    )
}

export default Action;