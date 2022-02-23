import React from "react";

const Pagination=({postsPerPage,totalPosts,paginate})=>{
const pageNumbers=[];
for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i)
}
return( 
  
<nav>
<pagination>
<ul>
   
    {
        pageNumbers.map((number)=>(
            
            <li key={number}>
                <a onClick={()=>paginate(number)} href="!#" className="pages">
                    {number}
                </a>
            </li>
           
        ))
    }
</ul>
</pagination>
</nav>)

}
export default Pagination