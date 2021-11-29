import React, { Component } from 'react'
import AdminMenu from './AdminMenu'
import {Route, Redirect, Link} from 'react-router-dom'
import AdminPortfolio from './AdminPortfolio'
import {auth} from '../firebaseConfig'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state={
            isAuth: true,
            isLogged: false,
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            this.setState({isAuth: false, isLogged: !! user, user})
        })
    }

    componentWillUnmount(){
        this.setState({
            isAuth: true,
            isLogged: false,
            user: null
        })
    }

    render() {
        if(this.state.isAuth){
            return(
                <div className="container">
                    <p><span className="glyphicon glyphicon-refresh" />Wait...</p>
                </div>
            )
        }
        else if(!this.state.isLogged){
            return <Redirect to="/login" />
        }
        else{
            return (
                <div className="container">
                    <h2>Admins Panel</h2>
                    <Route path={'/'} component={AdminMenu} />
                    <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                    <Link to='#'></Link>
                </div>
            )
        }
    }
}

export default Admin