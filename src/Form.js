import React, { useState } from 'react';
import List from './List'
const Form=()=>{
    const [inputData,setInputData] = useState("");
    const [listData,setListdata]=useState([]);
    const formData=(e)=>{
        setInputData(e.target.value);
        
    }
    const submitHandle=(e)=>{
        e.preventDefault();
       
        if(inputData!=''){
            setListdata((preValues)=>{
                return [...preValues,inputData];
                
            });
        }
        setInputData("");
      }
      const deleteItem =(id)=>{
        setListdata((preValues)=>{
            return preValues.filter((ele,index)=>{
                return index!=id;
            });
            
        });
      }
    return(
        <>
        <form onSubmit={submitHandle}>
            <input type='text' onChange={formData} value={inputData}></input>
            <button>+</button>
        </form>
        {
            listData.map((ele,index)=>{
                return <List text={ele} id={index} onSelect={deleteItem} />
            })
        }
        </>
    )
}
export default Form;