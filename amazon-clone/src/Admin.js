import React from 'react';
import "./Admin.css";
import { useState } from 'react';
import {database} from '../src/Config/Config';
import {storage} from '../src/Config/Config';
import { snapshotEqual } from 'firebase/firestore/lite';
import { ref } from 'firebase/storage';

export const Admin = () => {
    
    const[itemName, setItemName] = useState('');
    const[itemPrice, setItemPrice] = useState(0);
    const[itemDescription, setItemDescription] = useState('');
    const[itemImage, setItemImage] = useState(null);
    const[error, setError] = useState('');
    const imageTypes = ['image/jpeg', 'image/png']

    const imageHandler = (e) => {
        let file = e.target.files[0];
        if(file && imageTypes.includes(file.type)) {
            setItemImage(file);
            setError('');
        }
        else {
            setItemImage(null);
            setError('Please upload a valid image');
        }
    }

    const addItem = (e) => {
        e.preventDefault();
        
    }

    return (

        <div className="admin-container">
            <br />
            <h2>Welcome Admin!</h2>
            <h2>Please add your product:</h2>
            <hr />
            <form className="product-form" onSubmit={addItem}>
                <label htmlFor="item-name">Item Name: </label>
                <input type="text" className="product-name" required 
                onChange={(e)=>setItemName(e.target.value)} value = {itemName}/>
                
                <br />
                <label htmlFor="item-price">Price: </label>
                <input type="number" className="product-price" required
                    onChange={(e)=>setItemPrice(e.target.value)} value={itemPrice}/>
                <br />
                <label htmlFor="item-image">Product Image: </label>
                <input type="file" id="file"
                    onChange={imageHandler}/>
                <br />
                <label htmlFor="item-description">Description: </label>
                <input type="text" className="product-description"
                    onChange={(e)=>setItemDescription(e.target.value)} 
                    value={itemDescription} />
                <br />
                <button className="add-button">Add Item</button>
            </form>
            {error&& <span>{error}</span>}
        </div>
        
    ); 
}

export default Admin;
