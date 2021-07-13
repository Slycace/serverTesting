import React from 'react';
import GroceryHeader from './GroceryHeader'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'
import axios from 'axios'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: []
    }
    this.addGrocery = this.addGrocery.bind(this)

    // axios.post('/groceries',{item: 'pizzaasss', quantity: '2'})
    //    .then((response) => {console.log(response, 'test the reponse')})
    //    .catch((err) => {console.err(err)})



  }

  // componentDidUpDate(){

  // }

  componentDidMount(){
    console.log('tryig to get axios info')
    const res =  axios.get('/groceries')
    console.log('what is res', res);
      res
      .then((groceries) => {
        this.setState({groceries: groceries.data})
      })
      .catch((err) =>{err.log(err)})
  }

  addGrocery(item) {

      console.log(this.state,' what is groceries')
    this.setState({
      groceries: [...this.state.groceries, item]
    })
  }

  render() {
    return (
      <div>
        {console.log('test over here')}
        <GroceryHeader />
        <GroceryForm addGrocery={this.addGrocery} />
        <GroceryList groceries={this.state.groceries} />
      </div>
    )
  }
}

export default App;