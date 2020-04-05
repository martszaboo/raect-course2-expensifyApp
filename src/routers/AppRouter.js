import React from 'react';

import {BrowserRouter, Route,Link,NavLink, Switch} from 'react-router-dom';
import ExpenseDashboardPage from './ExpenseDashboardPage';
import addExpensePage from './addExpense';
import editExpensePage from './editExpensePage';
import helpExpensePage from './helpExpensePage';
import notFound from './notFound';
import Header from './Header';



const AppRouter =()=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={addExpensePage}/>
            <Route path="/edit/:id" component={editExpensePage}/>
            <Route path="/help" component={helpExpensePage}/>
            <Route component={notFound} />
        </Switch>

    </div>
    </BrowserRouter>

);

export default AppRouter;