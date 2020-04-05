import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = ()=>(
    <div>
        <header>
        <h1>Expensify</h1>

        <NavLink  className='linkButton' to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink className='linkButton' to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink className='linkButton' to="/help" activeClassName="is-active">Help</NavLink>

        </header>
    </div>
    
    );
export default Header;