import React from 'react'


const AlertList=(props)=>{
    let counter=0;
    if(props.alerts) {
        return <div>{props.alerts.map((item) => {
            return <Alert key={item.id} id={item.id} text={item.text} class={item.class} close={props.close}/>
        })}</div>
    }
    else
        return null;
}

const Alert=(props)=>{
    return(<div className={'alert '+props.class} >{props.text}<div className='float-right' onClick={()=>{props.close(props.id)}}>X</div></div>)
}

export default AlertList