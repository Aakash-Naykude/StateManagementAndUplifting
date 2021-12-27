import { useState } from "react"

export const GroceryInput = ({getData})=>{
    const [text, setText] = useState("")
    const handleOninput = (e)=>{
        setText(e.target.value)
        // console.log(e.target.value)
    }
    const handleInput = ()=>{
        getData(text)
    }
    return <>
        <input type="text" placeholder="Enter Grocery Product" onChange={handleOninput} />
        <button onClick={handleInput}>Add Grocery to bag</button>
    </>
}