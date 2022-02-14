import React, { Component } from 'react'
import '../../Assets/styles/css/components/dropDownList.css'
class DropDownList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div class='select-box'>
          <div class='select-box__current' tabindex='1'>
            {this.props.roomTypes.map((type, index) => {
              return (
                <div class='select-box__value'>
                  <input
                    class='select-box__input'
                    type='radio'
                    id={index}
                    value={type.name}
                    name={type.name}
                    checked={index == 0 ? 'checked' : ''}
                  />
                  <p class='select-box__input-text' id='room-type'>
                    {type.name}
                  </p>
                </div>
              )
            })}
            <img
              class='select-box__icon'
              src='http://cdn.onlinewebfonts.com/svg/img_295694.svg'
              alt='Arrow Icon'
              aria-hidden='true'
            />
          </div>
          <ul class='select-box__list'>
            {this.props.roomTypes.map((type, index) => {
              return (
                <li>
                  <label
                    class='select-box__option'
                    for={index}
                    aria-hidden='aria-hidden'
                  >
                    {type.name}
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default DropDownList
