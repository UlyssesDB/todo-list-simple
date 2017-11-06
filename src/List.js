import React, { Component } from 'react';
import './App.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [1, 2, 3],
      inputField: '',
      visible: true
    }
  }

  onHandleChange(event) {
    this.setState({
      inputField: event.target.value
    })
  }

  displayItem(arg) {
    return (<li>{arg}</li>)
  }

  addItem() {
    this.setState({
      items: this.state.items.concat(this.state.inputField),
      inputField: ''
    });
  }

  clearList() {
    this.setState({
      items: []
    })
  }

  reverseList() {
    let reversedArray = this.state.items.reverse();
    this.setState({
      items: reversedArray
    })
  }

  removeItem() {
    let minusArray = this.state.items.slice(1, this.state.items.length)
    this.setState({
      items: minusArray
    })
  }

  showHide() {
    if (this.state.visible === true) {
      this.setState({
        visible: false
      })
    } else if (this.state.visible === false) {
      this.setState({
        visible: true
      })
    }
  }

  render() {

    return (
      <div className="List">
        <button onClick={() => this.showHide()}>Show/Hide</button>
        {this.state.visible 
          ? (
            <div>
            <input value={this.state.inputField} onChange={(event) => this.onHandleChange(event)}></input>
            <br/>
            <button onClick={() => this.addItem()}>add</button>
            <button onClick={() => this.removeItem()}>delete item</button>
            <br/>
            <button onClick={() => this.clearList()}>clear</button>
            <button onClick={() => this.reverseList()}>reverse</button>
            
            <ul>
              {this.state.items.map(this.displayItem)}
            </ul>
            </div>
          ) 
          : (<p>list collapsed</p>)}
      </div>
    );
  }
}

export default List;
