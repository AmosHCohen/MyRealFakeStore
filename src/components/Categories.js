import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
// import { CategoryContext } from './Main'
// import axios from 'axios'

export default function Categories() {
  // משתנה שיחזיר את כל רשימת הקטגוריות
  const [list, setList] = useState()

  // להביא קטגוריות מהשרת ולשמור ברשימה
  // ajax : XMLHTTPRequest , axios (library) , fetch (built-in js)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res =>  res.json())
      .then(data => {setList(data)})
  }, [])

  if(!list) return 'Loading...'
  //TODO 
  //loader

  // מיפוי - על כל קטגוריה להציג למסך
  return <div className='catList' >
    <h1> Category : </h1>

    {
    list.length ?
    list.map(v =>  <h3><Link to={'/'+v}><div className="cat">{v}</div></Link></h3> ):
      <h4>Not found</h4>
  }
  </div>
}


// export default function Categories() {
    
    //     const [list, setList] = useState([]);
    
    //     useEffect(getCategories, []);

//     function getCategories() {
//         axios.get('https://fakestoreapi.com/products/categories')
//             .then(result => {
//                 setList(result.data)
//             })
//     }
//     if (!list.length) return 'loading'
//     console.log(list);

//     // const categoryList = props.state.categoryList
//     // console.log(categoryList);
//     return (
//         // <Electronics />
//         <div className='Categories'>
//             {list.map((v, i) => <Category key={i} value={v} />)}
//         </div>
//     )
// }



// function Category(props) {
//     const c = useContext(CategoryContext)
//     return (
//         <div className='Category' >
//             <Link to="/ItemsList"><div onClick={() => (props.value)}>{props.value}</div></Link>
//         </div>
//     )

// }

