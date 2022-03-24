import React, {useEffect, useState, Fragment} from 'react';
import Product from "./Product";
import { motion } from "framer-motion";
import "./filteringProduct.css";
import { getDatabase, ref, query, orderByValue , get, child} from "firebase/database";
import { v4 as uuidv4 } from "uuid";


function FilteringProduct() {

  return (
    <Fragment>
    <div className="filtering">

      {/* this is the title  */}
      <div id = "pageTitle">
        <p>Filtering Product</p>

        <div className='filter-sort'>
            Filter by Description
            <select>
              <option>Price [Low to High]</option>
              <option>Price [High to Low]</option>
              <option>Rating</option>
              <option>Alphabetical Order</option>
            </select>
        </div>

        <div className='filter-size'>
           Filter by sizing 
            <select>
            <option value="">All</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            </select>
        </div>

      </div>

      {/* below the title there is going to be 2 sections */}
      <div className = "filtering_two">
      </div>
   


    </div>
    </Fragment>

 
    
  )
}

export default FilteringProduct;

// notes 

/*
  //first 10 events 
  //ProductRef.orderByKey().limitToFirst(10);
  
  //order by key is string based query 
  //orderByKey()

  //orer by child 
  //this is a where class, query based on values, name, 
  //orderByChild ('itemName');

  //order by value, its for child 
  //orderByValue()

  //order by priority
  //orderByPriority



  // const db = firebase.database();
//const eventRef = db.child('events'); 
//eventsRef.orderFunction().queryFunction()


  // ProductRef.on('itemName', snap {
  //   //render data into html
  // } ) ;



*/





/*
  // //getting the content of the database
  // //const db = firebase.database();

  // const db = getDatabase();
  // //const productsDatabase = db.collection('Products');
  
  // //make a reference to the parent key 
  // const ProductRef = db.child('Products');

  // //find a product based on an input 
  // const findProduct = ProductRef.orderByChild('itemRating').equalTo('user-input');


  // //this is going to be ordering the item names 
  // const query = ProductRef
  //               .orderByChild('itemName')




  // //filtering productas ascending 
  // db.collection("Products")
  //  .orderBy("itemPrice", "asc")

  //  //filtering by descending order
  //  db.collection("Products")
  //  .orderBy("itemPrice", "dsc")

    // //initialization of all the variables needed
  // var basicQuery;
  // var userSelectName;
  // var userFilterPrice;
  // var userSelectPrice;
  // var userFilterRating;
  // var prodName; 
  // var prodPrice;

  // //this is going to be used in the html portion
  // //use button for that 

  // if (userSelectPrice){
  //   //basicQuery = allProducts.where('itemPrice', '==', prodPrice)
  // } 
  // else if (userSelectName){
  //   //basicQuery = allProducts.where('itemName', '==', prodName);
  // } else if (userFilterPrice){
  //   basicQuery = allProducts.orderBy("itemPrice", "asc");
    
  // } else if (userFilterRating){
  //   basicQuery = allProducts.orderBy("itemRating", "asc");
  // }






*/
