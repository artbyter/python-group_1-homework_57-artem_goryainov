import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import AlertList from "../Alert/Alert"



const Modal = props => (
    <div>
        <Backdrop show={props.show} cancel={props.cancel}/>
        <div className={"Modal " + (props.show ? ' Modal-show' : '')}>
            <AlertList alerts={props.alerts} close={props.close}/>
            {props.children}
            <ButtonRow buttons={props.buttons}/>

        </div>
    </div>
);

const ButtonRow = props=>{
    let counter=0;
    return <div>{props.buttons.map((item)=>{return <button key={counter++} className={item.type?" m-1 border border-dark btn btn-"+item.type:null} onClick={item.clicked}>{item.label}</button>})}</div>
}

export default Modal;