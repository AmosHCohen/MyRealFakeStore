import React, { createContext } from 'react';
import Categories from "./Categories"
import ItemsList from "./ItemsList"
import ShowItem from "./ShowItem"
import { Routes, Route } from 'react-router-dom'

export const CategoryContext = createContext()


export default function Main() {
    
    return (
        <main className="main">
            <CategoryContext.Provider>
                <Routes>
                    <Route path="/" element={<Categories />} />
                    <Route path="/cat" element={<Categories />} />
                    <Route path="/:cat" element={<ItemsList />} />
                    <Route path="/:item.id" element={<ShowItem />} />
                </Routes>
            </CategoryContext.Provider>
        </main>
    )
}
            // const [list, setList] = useState();
            // const [CategoryValue, setCategoryValue] = useState('')
        
        
            // useEffect(getItems, []);
        
            // function getItems() {
            //     axios.get('https://fakestoreapi.com/products')
            //         .then(result => {
            //             setList(result.data)
            //         })
            // }
            // if (!list) return 'loading'
            // console.log(list);
        
            // const filteredCategory = list.map(c =>
            //     c.category)
            //     .filter((v, i, c) => c.indexOf(v) === i)
        
            // const filteredItems = list.filter(v => v.category === CategoryValue)
            // console.log(filteredItems);