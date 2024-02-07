import React, { Component } from 'react'

export class ClickcFunction extends Component {
    clickHandler (){
        console.log("Class Click")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click Function</button>
      </div>
    )
  }
}

export default ClickcFunction