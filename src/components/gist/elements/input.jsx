import React from 'react'

const Input=({setValue,value,placeholder,type})=>{
    
    return(
        <div>
            <label style={{marginRight:20}}>{placeholder}</label>
            <input style={{padding:5,borderRadius:3,border:'1px solid #ccc'}} type={type} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
    )
}

export default Input