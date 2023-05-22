import { useEffect } from "react"

const titleChange = (title) =>{
    useEffect(() =>{
        document.title = `Edu-Toys | ${title}`;
    },[])
}

export default titleChange