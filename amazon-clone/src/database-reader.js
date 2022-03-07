
// var database = firebase.database();
// var userRef = database.ref('');


// userRef.once('value', function(snapshot){
//   console.log(snapshot.val());
// }
























// //this is going to be reading the data in the database
// document.addEventListener("DOMContentLoaded", event => {
//     const app = firebase.app();
//     const db = firebase.firestore();
//     const myPants = db.collection('pants').doc('Levis');

//     myPants.onSnapshot(doc => {
//         const data = doc.data();
//         document.querySelector('#title').innerHTML = data.title;
//     } )
    

// });



// // --------------------------------------------------

// // this is to filter the products
// const db = firebase.firestore();

// // Reference the document
// const myPost = db.collection('pants').doc('Levis');

// // Listen to realtime changes 
// myPost.onSnapshot(doc => {

//   const data = doc.data();

// })

// const productsRef = db.collection('pants');

// const query  = productsRef.where('price', '>=', 300)

// query.onSnapshot(products => {

//   products.forEach(doc => {
//       const data = doc.data();
//   })

// });






// // this is going to be updating the database
// //writing in them
// //need to make a form
// //FUNCTION NOT DONE
// function updatePost (e) {
//     const db = firebase.firestore();
//     const myPants = db.collection('pants').doc('firstpost');
//     myPants.update({title: e.target.value})
// }