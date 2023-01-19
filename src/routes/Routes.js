import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import Addtodo from '../pages/add-todo';
import ViewPages from '../pages/view';
import Login from '../pages/login/login';
import NotFound from '../pages/notFound/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/add" exact >
                    <Addtodo />
                </Route>
                <Route path="/view/:id" component={ViewPages} exact />
                <Route path='/login' component={Login} >
                </Route>
                <Route path="*" >
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;