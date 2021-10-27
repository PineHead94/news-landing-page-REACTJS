import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { ThemeContext } from '../context/ThemeContext';


const News = ({ isLoading,data }) => {
    const { isVerticalTheme,verticalTheme,horizontalTheme } = useContext(ThemeContext)
    let theme = isVerticalTheme ? verticalTheme : horizontalTheme
    const [ newData,setNewData ] = useState(data)
    useEffect(()=>{
        setNewData(data)
    },[data])
    const date = new Date()
    const handleDelete = (e) => {
        const id = e.target.id
        console.log(id)
        if(newData.length<6){
            let dataList = newData.filter(item => item.id!== Number(id) )
            setNewData(dataList)
         } else {
          let dataList = data.filter(item => item.id!== Number(id) )
          setNewData(dataList)
         }
    
      }
    if(isLoading){
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className='allPosts'>
            <ul className='news-list' style={theme.newsList}>
                {newData.map(post => {
                    const maxTitle = post.title.slice(0,65)
                    const maxbody = post.body.slice(0,65)
                    return (
                        <li className='list-item' style={theme.listItem} key={post.id} >
                            <div className="item-content" style={theme.itemContent}>
                                <img style={theme.itemContentImg} src="https://images.unsplash.com/photo-1632826082760-8d7f3c0bc0f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80" alt="" />
                                <div className="item-detail">
                                    <h2 style={theme.itemDetailH2}>{maxTitle+'...'}</h2>
                                    <p style={theme.itemDetailP}>{maxbody+'...'}</p>
                                    <p  style={theme.itemDetailP}className='date'>{date.toUTCString()}</p>
                                </div>
                            </div>
                            <div className="btn" style={theme.btn} >
                                <button style={theme.btn_button} id={post.id} onClick={(e)=>handleDelete(e)} className='delete-btn' style={theme.deleteBtn} ><i class="fas fa-times"></i></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}
 
export default News;