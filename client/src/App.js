import React, { useEffect } from 'react';
import Layout from "./layout";
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { store } from './helpers/store'
import Login from './pages/login'
import Admin from './pages/admin'
import { AdminRoute, UserRoute } from './helpers/privateRoute'
import Home from './pages/home'
import Favori from './pages/favoris'
const App = () => {

  useEffect(() => {


  }, [])
  return (<div>


    <Router >
      <Switch>
        <Layout>
          <AdminRoute path="/admin" exact component={Admin} />
          <UserRoute path="/favori" exact component={Favori} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/" />
        </Layout>
      </Switch>
    </Router >

  </div>)
}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default AppWithStore;