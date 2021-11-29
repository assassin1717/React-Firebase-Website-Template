import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Prices from './components/Prices'
import Contacts from './components/Contacts'

import Admin from './admin/Admin'
import Login from './admin/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/' exact component={About} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/pricing' component={Prices} />
        <Route path='/contacts' component={Contacts} />

        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
