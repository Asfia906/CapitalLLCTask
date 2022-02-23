import React,{useState} from 'react';
import './imgstyle.css';
function ImgBox(props) { 
    console.log(props.picture);
  return (props.imgClick)?(
    <div className='image'>
        <div className='image-inner'>
            <button className='close-btn' onClick={()=>props.setImgClick(false)}>close</button>
            <img src={props.imgPath} />
        </div>
    </div>
  ):"";
}

export default ImgBox