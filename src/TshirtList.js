import React, {useState,useEffect} from 'react'
import database from './data.json'
import Tshirt from './Tshirt';

function TshirtList() {
    const [data,setData]=useState([]);
    function  getText() {
        fetch('./data.json').then(function(response){
          return response.json();  
          }).then(function(data){
          console.log(data);
        }).catch(function(error){
          console.error('its error');
          console.error();
    
        });
      }
      useEffect(() => { 
		getText(); 
	}, []); 
 
    // const database = [
    //     {
    //         name: "red rose", price: 10.99, id: 1,
    //         image: "https://k2imagesblob.blob.core.windows.net/optimized/Product/10031/7503/5186SP_mainimg-Medium.png"
    //     },
    //     {
    //         name: "blue rose", price: 20.99, id: 2,
    //         image: "https://k2imagesblob.blob.core.windows.net/optimized/Product/10031/7503/5186SP_mainimg-Medium.png"
    //     },
    //     {
    //         name: "black rose", price: 40.99, id: 3,
    //         image: "https://k2imagesblob.blob.core.windows.net/optimized/Product/10031/7503/5186SP_mainimg-Medium.png"
    //     },
    // ]
    return (
        <div>
         {
             database.map(item => (
                 <Tshirt name={item.name} price={item.price} image={item.image}
                 key={item.id}/>
             ))
         }
        </div>
    )
}

export default TshirtList
