//Higher Order Component - a component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


const Info =(props)=>(
    <div>
    <h1>Info</h1>
    <p> Theinfo is {props.info} </p>
    </div>
);

const withAdminWarning =(WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>This is private info pls dont share</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo =withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="here are the details" />, document.getElementById('app'));