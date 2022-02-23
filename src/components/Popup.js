import React,{useState} from 'react';
import './Popup.css';
function Popup(props) {
    const data=[{name:'mum'},{name:'shah'},{name:'taj'}];
    const itemArray=[props.itemData];
    console.log(itemArray);
   console.log('itemdata',props.itemData);
     
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
            {itemArray.map((val)=>{
                    return <ul className='item-display'>
                        <li>
                            {val.name.first} {val.name.last}
                        </li>
                        <li>
                         {val.login.username}
                         </li>
                        <li>
                            {val.email}
                         </li>
                         <li >{val.dob.date.slice(0,10)}</li>
                        <li>{val.phone.replace('-','')}</li>
                    </ul>
            })
            }
        </div>
    </div>
  ):"";
}

export default Popup