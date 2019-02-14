import React from 'react'


const AlertList=(props)=>{
    let counter=0;
    if(props.alerts) {
        return <div>{props.alerts.map((item) => {
            return <Alert key={item.id} id={item.id}  class={item.class} close={props.close}>{item.text}</Alert>
        })}</div>
    }
    else
        return null;
}

const Alert=(props)=>{
    return(<div className={'alert '+props.class} >{props.children}{props.close!=undefined?<div className='float-right' onClick={()=>{props.close(props.id)}}>X</div>:null}</div>)
}

export default AlertList