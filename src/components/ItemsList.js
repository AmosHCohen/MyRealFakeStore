import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import React from "react"


export default function ItemsList() {

    const { cat } = useParams()
    // משתנה שיחזיר את כל רשימת המוצרים של הקטגוריה
    const [items, setItems] = useState()

    // להביא קטגוריות מהשרת ולשמור ברשימה
    // ajax : XMLHTTPRequest , axios (library) , fetch (built-in js)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/' + cat)
            .then(res => res.json())
            .then(data => { setItems(data) })
    }, [])
    if (!items) return 'Loading...'
    console.log(items)

    // מיפוי - על כל קטגוריה להציג למסך 
    return <div className="catList">
        <h1>Items : </h1>
        {
            items.length ?
                items.map(item => {
                    return (
                    <Link to={'/'+item.id}>
                        <div className="cat img" key={item.id}>
                        <img src={item.image} alt="" />
                        <h5>{item.title}</h5>
                        <h4>{item.price}$</h4>
                    </div>
                    </Link>)
                }) : <h4>Not found</h4>}
    </div>
}

                        // import React from 'react';
                        
                        // // const {category, description, } = props
                        
                        
                        // export default function ItemsList(props) {
                        //     const itemsList = props.state.itemsList
                        //     console.log(itemsList);
                        //     return (
                        //         <div className='ItemsList'>
                        //             {props.state.itemsList.map((v, i) => <Item key={i} value={v} />)}
                        //         </div>
                        //     )
                        // }
                        
                        // function Item(props) {
                        //     console.log("hellp");
                        //     return (
                        //         <div className='item'>
                        //             {props.value.title}
                        //         </div>
                        //     )
                        // }