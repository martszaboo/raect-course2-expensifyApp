import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';



const store= configureStore();


store.dispatch(addExpense({description:'water bill',note:'note',amount:460}))
store.dispatch(addExpense({description:'phone bill',note:'note',amount:680, createAt:1000}))
store.dispatch(addExpense({description:'matrasse sale',note:'',amount:200, createAt:1230}))





const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx,document.getElementById('app'));

