import React from 'react';

class GroceryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      quantity: ''
    }

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  handleItemChange(event) {
    this.setState({ item: event.target.value })
  }

  handleQuantityChange(event) {
    this.setState({ quantity: event.target.value })
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  addGrocery(event) {
    event.preventDefault();
    this.props.addGrocery(this.state);
  }

  render() {
    return (
      <form onSubmit={this.addGrocery}>
        <label> Item
          <input
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
        </label>
        <label> Qunatity
          <input
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

export default GroceryForm;