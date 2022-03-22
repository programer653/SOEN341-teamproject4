import React, {useEffect, useState} from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import './filteringProduct.css';
import { getDatabase, ref, onValue, child, get } from "firebase/database";


function filteringProduct() {



  const db = getDatabase();
  const allProducts = db.collection('Products');

  //initialization of all the variables needed
  const basicQuery ={};
  const userSelectName = {};
  const userFilterPrice = {};
  const userSelectPrice = {};
  const userFilterRating = {};
  const prodName = {}; 
  const prodPrice ={};

  //this is going to be used in the html portion
  //use button for that 

  if (userSelectPrice){
    basicQuery = allProducts.where('itemPrice', '==', prodPrice)
  } 
  else if (userSelectName){
    basicQuery = allProducts.where('itemName', '==', prodName);
  } else if (userFilterPrice){
    basicQuery = allProducts.orderBy("itemPrice", "asc");
    
  } else if (userFilterRating){
    basicQuery = allProducts.orderBy("itemRating", "asc");
  }

  return (

    <div className='filter_container'>
      <div className = 'filter_title'>
          <p>Filter by:</p>
          
          <div className='filter_display'>
            <div className = 'filter_container_box1'>
              {/* this is where there is going to be the filter by component */}

            </div>

            <div className = 'filter_container_box2'>
              {/* this is where we are going to be displaying the content of the database */}
              {/* with all of its information */}
            </div>
          </div>

      </div>
    </div>
    
  )
}

export default filteringProduct;

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



*/
