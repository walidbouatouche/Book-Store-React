import React, { useEffect } from 'react';
import Layout from "./layout";
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { store } from './helpers/store'
import Login from './pages/login'
import AddBook from './pages/admin/addBook'


const App = () => {

  useEffect(() => {


  }, [])
  return (<div>


    <Router >
      <Switch>
        <Layout>
          <Route path="/login" exact component={Login} />
          <Route path="/addbook" exact component={AddBook} />
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