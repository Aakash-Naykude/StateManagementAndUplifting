import { useState } from "react"

export const GroceryInput = ({getData})=>{
    const [text, setText] = useState("")
    const handleOninput = (e)=>{
        setText(e.target.value)
        // console.log(e.target.value)
    }
    const handleInput = ()=>{
        getData(text, "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg")
    }
    return <>
        <input type="text" placeholder="Enter Grocery Product" onChange={handleOninput} />
        <button onClick={handleInput}>Add Grocery to bag</button>
    </>
}