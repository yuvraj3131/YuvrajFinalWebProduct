import { useEffect, useState } from 'react'
import ProductTable from './components/ProductTable'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading,setLoading] = useState(true)

useEffect(()=>{
  fetch('/data.json')
  .then((res)=> res.json())
  .then((data)=> {
    setProducts(data)
    setLoading(false)
  });
}, []);


//delete funcction
function handleDelete(id){
  setProducts(products.filter((product)=> product.id !== id))

}

//calculate total price
let grandTotal = 0;
products.forEach((product)=>{
  const subtotal = product.price * product.quantity;
  const discount = product.isDiscounted ? subtotal * 0.10 : 0; // 10% discount if applicable
  const afterDiscount = subtotal - discount;
  const tax = afterDiscount * 0.13; // 13% tax
  const finalTotal = afterDiscount + tax;
  grandTotal += finalTotal;
});
 
if (loading) return <p>Loading...</p>

  return (

    <div style ={{padding :"20px",fontFamily:"monospace"}}>

      <h1 style ={{marginBottom :"40px",fontFamily:"monospace"}}>Product Management</h1>

      <ProductTable products={products} onDelete={handleDelete}/>


      <div style ={{padding:"10px",
      marginBottom :"40px",
      fontFamily:"monospace",
      borderRadius:"8px",
      backgroundColor:"beige"
      }}>

      <h3
      style ={{marginBottom:"10px",fontFamily:"monospace"}}>
        Grand Total :${grandTotal}</h3>
      <p>Note: discounted is green</p>
      <p>Tax 13% applied after discount </p>
      </div>

    </div>
  )
}

export default App
