import { useState } from 'react';

const ShoppingCart = () => {

    const [items, setItems] = useState([]);
    const [qty, setQty] = useState(null);
    const [currentItem, setCurrentItem] = useState({
        name: '',
        qty: ''
    });

    const handleForm = (e) => {
        e.preventDefault();

        setItems([...items, { name: currentItem, qty: qty}]);

        e.target.reset();
    }

    const handleDelete = (index) => {
        items.splice(index, 1);

        setItems([...items]);
    }

    const Alert = () => {
        if(items.length <= 0) {
            return (
                <div className="msg alert alert-danger">Jūsų krepšelis yra tuščias</div>
            );
        } else {
            return (
                <div className="msg alert alert-success">Prekės sėkmingai pridėtos į krepšelį</div>
            );
        }
    }

    return (
       <div className="shopping-cart">
        <h2>Prekių krepšelis</h2>
        <Alert />
        <form className="main-section" onSubmit={handleForm}>
            <input 
                type="text" 
                placeholder="Įveskite prekės pavadinimą" 
                className="form-control product" 
                onChange={ (e) => setCurrentItem(e.target.value) }
                value={currentItem.name}>
            </input>
            <input 
                type="number" 
                placeholder="Įveskite kiekį" 
                className="form-control quantity" 
                min="1" 
                onChange={ (e) => setQty(e.target.value) }
                value={currentItem.qty}>
            </input>
            <button type="submit" className="btn btn-primary button">Pridėti</button>
        </form>
        <table className="products-table table">
            <thead>
                <tr>
                    <th>Produktas</th>
                    <th>Kiekis</th>
                    <th>Šalinti</th>
                </tr>
            </thead>
            <tbody>
                {items.map((product, index) => 
                    <tr key={product.name + index}>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>
                            <button className="rounded btn btn-danger" onClick={ () => handleDelete(index) }>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
       </div>
    );
}

export default ShoppingCart;