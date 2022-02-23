import React,{useState} from 'react';
import ImgBox from './ImgBox';
import Popup from './Popup';
// import ImgLightBox from './ImgLightbox';
const display={

}
const UsersList=({data,loading})=>{
    const[searchTerm,setSearchTerm]=useState("");
    const[buttonPopup,setButtonPopup]=useState(false);
    const[itemData,setItemData]=useState([]);
    const[imgClick,setImgClick]=useState(false);
    const[imgPath,setImgPath]=useState('');
   
    if(loading)
    {
        return <h1>Loading...</h1>
    }
    const userDetailsInfo=(item)=>{
        setButtonPopup(true);
        setItemData(item);
        console.log(itemData);
        console.log('buttonpopup',buttonPopup);
       
    }
    const handleImageClick=(picture)=>{
        setImgClick(true);
        setImgPath(picture);
        console.log(imgPath);
    }
    return (<div>
        <input type="search"  placeholder='Search by name...' onChange={(event)=>{setSearchTerm(event.target.value)}}/>
        <div>
        {
            data.filter((item)=> { 
                if (searchTerm == "") {return item } 
            else if(item.name.first.toLowerCase().includes(searchTerm.toLowerCase())){
                return item
            }
        }).map((item,key)=>{
                return <ul key={key} className='display'>
                   <li onClick={()=> {userDetailsInfo(item)}}
                    >
                     <span><b>User Name</b> </span> :  {item.name.first} {item.name.last}
                     
                    </li>
                <li>
                     <b>Gender </b> : {item.gender}
                </li>
                <li ><b>DOB : </b>{item.dob.date.slice(0,10)}</li>
                <li>
                   <b>Login Name : </b> {item.login.username}
                </li>
                <li>
                   <b>User Photo</b><img src={item.picture.thumbnail} alt={"img"} onClick={()=>handleImageClick(item.picture.large)}/>
                </li>
            </ul>
        })
        
}
</div>
{buttonPopup?(<Popup trigger={buttonPopup} setTrigger={setButtonPopup} itemData={itemData}/>):''}
{imgClick?<ImgBox imgClick={imgClick} setImgClick={setImgClick} imgPath={imgPath}/>:''}
    </div>)
    
}
export default UsersList;