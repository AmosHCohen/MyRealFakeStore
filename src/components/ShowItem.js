import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ShowItem() {
    // const params = useParams()
    const { id } = useParams()

    // משתנה שיחזיר את כל רשימת המוצרים של הקטגוריה
    const [item, setItem] = useState()

    // להביא קטגוריות מהשרת ולשמור ברשימה
    // ajax : XMLHTTPRequest , axios (library) , fetch (built-in js)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
            .then(res => res.json())
            .then(data => { setItem(data) })
    }, [])

    if (!item) return 'Loading...'
    console.log(item);
    // מיפוי - על כל קטגוריה להציג למסך 
    return <div>
        <h1>Item : </h1>

        <div className="cat img" key={item.id}>
            <h5>{item.title}</h5>
            <h4>{item.price}</h4>
            <img src={item.image} alt="" />
        </div>

    </div>
}

