import React from "react";
import axios from 'axios';

class Product extends React.Component{
    constructor(){
        super();
        this.state = {
          products:[],
          isClicked:false,
        }
      }

  /**
    * for settign isClicked true.
    * @name onClickedForProduct
    * @function
  */
  
    onClickedForProduct = ()=>{
        this.setState({
            isClicked:true,
        })
    }

    
   /**
    * for getting data from url.
    * @name getProductDetails
    * @function
    */
  
getProductDetails = async ()=>{
  try{
const response =  await axios.get("http://localhost:9000/allProduct");
this.setState({products:response.data});
console.log(response);
  }catch(error){
    console.log(error.message);
  }  
}
 
componentWillMount(){
  this.getProductDetails()
}
       
  
    render(){
        return <div>
            <hr/>
            <button onClick ={this.onClickedForProduct}>Product</button>
            <hr/>
             {this.state.isClicked && this.state.products.map((product, index) => (
            <p>{product.productname}</p>
    ))}
           
        </div>
            }
}


export default Product;