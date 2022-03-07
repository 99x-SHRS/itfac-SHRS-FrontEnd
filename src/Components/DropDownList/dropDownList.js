import React, { Component } from 'react'
import '../../Assets/styles/css/Components/dropDownList.css'
class DropDownList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <select class='form-select' aria-label='Default select example'>
          <option selected>Select your preference </option>
          {this.props.roomTypes.map((roomType, index) => {
            return (
              <option key={index} value={roomType.name}>
                {roomType.name}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default DropDownList
