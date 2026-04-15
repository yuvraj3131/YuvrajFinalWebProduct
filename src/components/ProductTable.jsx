import ProductRow from "./ProductRow";

function ProductTable ({products,onDelete}){
    return(
        <div>
            <h2>
                Product List
            </h2>
            <table border="1" style={{borderCollapse:"collapse",width :"100%" }}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>(
                            <ProductRow key = {product.id}
                            product={product}
                            onDelete={onDelete}/>

                        ))}
                    </tbody>
            </table>
        </div>
    );
}
export default ProductTable;