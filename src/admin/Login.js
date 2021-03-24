import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebaseConfig'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: false,
            isLogged: false,
            error: false
        }

        this.email = null
        this.password = null

        this.authUser = this.authUser.bind(this)
    }

    componentDidMount(){
        auth.onAuthStateChanged(user =>{
            this.setState({isAuth: false, isLogged: !! user, user})
        })
    }

    componentWillUnmount(){
        this.setState({
            isAuth: false,
            isLogged: false,
            error: false
        })
    }

    authUser() {
        this.setState({ isAuth: true, error: false })
        auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(user => {
                this.setState({ isLogged: true })
            })
            .catch(err => {
                this.setState({ error: true, isAuth: false, isLogged: false })
            })
    }

    render() {
        if (this.state.isLogged) {
            return <Redirect to='/admin' />
        }
        else{
            return (
                <div className="container">
                    <h1>Login</h1>
    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="email" />
    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" ref={ref => this.password = ref} className="form-control" id="password" aria-describedby="passwordHelp" />
                        {this.state.error && <div id="passwordHelp" className="form-text">Inválid email or password.</div>}
                    </div>
                    <br />
                    <button type="button" disabled={this.state.isAuth} className="btn btn-primary" onClick={this.authUser}>Login</button>
    
                </div>
            )
        }
    }
}

export default Login