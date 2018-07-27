import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios'
import Product from './components/Product'
import Forms from './components/Forms'
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [{
      InputImage: '',
      InputName: '',
      InputPrice: ''
    }]
    }
  }



addItem = () => {
 const { inputName, InputPrice, inputImage } = this.state
 const newProduct = { inputName, InputPrice, inputImage }
 axios.post("http://localhost:4000/api/shelfie", newProduct).then(response => {
   this.updateItem(response.data)
 })
}

updateItem = (list) => {
  this.setState({ list })

}

componentDidMount = () => {
  axios.get("http://localhost:4000/api/shelfie").then(response => {
    this.setState({
      list: response.data
      
    })
  })
}

handleImageChange = (e) => {
  this.setState({
    inputImage: e.target.value
  })
}


handleNameChange = (e) => {
this.setState({
  inputName: e.target.value
})
}

handlePriceChange = (e) => {
  this.setState({
    InputPrice: e.target.value
  })
}



  render() {
    return (
      
<div className="header">
      <div className="inputForm">

<img src="https://www.medxjordan.com/wp-content/uploads/2017/08/Not-Available-20.png" />

<p>Image URL:</p>
  <input type="text" 
  value={this.state.InputImage}
  onChange={this.handleImageChange} />

<p>Product Name:</p> 
  <input type="text" 
  value={this.state.InputName}
  onChange={this.handleNameChange} />

<p>Price:</p>
 <input type="number" 
  value={this.state.InputPrice}
  onChange={this.handlePriceChange} />


      <div className= "buttonBox">
          <button>Cancel</button>
          <button onClick={ () => {this.addItem()}}>Add Inventory</button>
            </div>


          </div>
      
        </div>
    )
  }
}



export default App;
