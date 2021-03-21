import React from 'react';
const List=(props)=>{
    return(
        <>
        <ul>
            <li>{props.text} <span className='fa fa-trash' onClick={()=>{props.onSelect(props.id)}}></span></li>
        </ul>
        </>
    )                
}
export default List;