function ProductRow({product,onDelete}){
    const subtotal = product.price*product.quantity;
    const discount = product.isDiscounted ? subtotal * 0.10 :0;
    const afterDiscount = subtotal - discount;
     const tax = afterDiscount * 0.13; // 13% tax
    const finalTotal = afterDiscount + tax;


    return (
        <tr style = {{backgroundColor: product.isDiscounted ? "green" : "white"}}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>${subtotal.toFixed(2)}</td>
            <td>
            <button onClick ={()=>onDelete(product.id)}>Delete
            </button>
            </td>
        </tr>
    );
}
export default ProductRow;