import React from 'react';
import { useState } from 'react/cjs/react.development';

const Pagination = ({ totalPosts,postsPerPage,currentPage,setCurrentPage,handlePagination }) => {
    let paginate = []
    for(let i = 1 ; i<= Math.ceil(totalPosts/postsPerPage) ; i++){
        paginate.push(i)
    }

    const handleNav = (e) => {
        console.log(e.target.className)
        if(e.target.className==="fas fa-angle-double-left" && currentPage!==1){
            setCurrentPage(currentPage - 1)
        }
        if (e.target.className==="fas fa-angle-double-right" && currentPage!==3)
        {
            setCurrentPage(currentPage + 1)
        }
       
    }

    return (
        <div>
            <ul className='pagination-list'>
                <li ><button className='back-btn' onClick={(e)=>handleNav(e)} ><i class="fas fa-angle-double-left"></i></button></li>
                <li><button onClick={()=>handlePagination(1)} >1</button></li>
                <li><button onClick={()=>handlePagination(2)} >2</button></li>
                <li><button onClick={()=>handlePagination(3)}>3</button></li>
                <li ><button className='next-btn' onClick={(e)=>handleNav(e)}><i class="fas fa-angle-double-right"></i></button></li>
            </ul>
        </div>
    );
}
 
export default Pagination;