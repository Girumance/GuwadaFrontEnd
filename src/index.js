import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import LoginReducer from "./Reducers/LoginReducer"
import Kitchen from './Components/Kitchen';
import MenuModal from './Components/MenuModal';
import DashboardShow from "./Components/DashboardShow"
import Uuid from "uuid/v4"
let state={
    isLoggedIn:false,
    kitechen:{},
    customerId:"none",
    kitchenId:"no",
    mealorder:[],
    orderid:null,
    menuModal:null,
    lscomp:null,
    logincomp:null,
    account:{},
    menus:[],
    searchRes:[],
    searchTitle:"",
    kit:[],
    orders:[],
    currentDisplay:<DashboardShow/>,
    copyKit:[],
    menuCat:[],
    menu:[],
    copyMenu:[],
    catId:"",
    allId:true

    }
 
 const Reducers=combineReducers({LoginReducer})   

const store=createStore(LoginReducer,state);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
