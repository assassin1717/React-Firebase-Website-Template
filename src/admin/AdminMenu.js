import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebaseConfig'

class AdminMenu extends Component {
    constructor(props){
        super(props)
    }


    userLogout() {
        auth.signOut()
            .then(user => {
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div className="container">
                <div className="list-group">
                    <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
                        Select one option
                </Link>
                    <Link to="/admin/portfolio" className="list-group-item list-group-item-action">Portfolio</Link>
                    <Link to="/admin/logout" className="list-group-item list-group-item-action" onClick={this.userLogout}>Logout</Link>
                </div>
            </div>
        )
    }
}

export default AdminMenu