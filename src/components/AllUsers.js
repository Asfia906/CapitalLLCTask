//import { useEffect } from "react";
import react,{useEffect,useState} from 'react';
import axios from 'axios';
import UserList from './UsersList';
import Pagination from './Pagination';

const Users= ()=>{

    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[currentPage,setCurrentPage]=useState(1);
    const[postsPerPage]=useState(3);

    
        useEffect( ()=>{
                async function fetchRandomUserAPI(){
                    setLoading(true);
                    let response=await fetch('https://randomuser.me/api/?page=3&results=10&seed=abc');
                    response=await response.json()
                    setData(()=>response.results);
                    setLoading(false);
                }
           fetchRandomUserAPI()
        },[])
    //    console.log(data)
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=data.slice(indexOfFirstPost,indexOfLastPost);
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);
  
    return (
        <div className='App'>
            <UserList data={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
        </div>
    )

}
export default Users