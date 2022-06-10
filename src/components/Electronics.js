import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function Electronics() {

    const [ElecList, setElecList] = useState([]);

    useEffect(getElecList, []);

    function getElecList() {
        axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then(result => {
                setElecList(result.data)
            })
    }

    if (!ElecList.length) return 'loading'
    console.log(ElecList);

    return (
        <div className='electronics'>
            {ElecList.map(v => <div>{v.title}</div>)}
        </div>
    )
}

// function Item(props) {
//     return (
//         <div className='item'>{props.value.title}</div>
//     )
// }


