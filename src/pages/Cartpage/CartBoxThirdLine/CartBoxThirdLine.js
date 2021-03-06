import React, { Component } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import './CartBoxThirdLine.scss';

let regExp = /[0-9]/g;

class CartBoxThirdLine extends Component {
  checkInput = e => {
    let { priceSum } = this.props;
    let price = e.target.parentNode.lastChild.innerText;
    let price1 = Number(price.match(regExp).join(''));
    priceSum(e.target.checked, price1);
  };

  // checkBoxInput = e => {
  //   let { checkbox } = this.props;
  //   let checked = e.target.parentNode.lastChild.value;
  //   console.log(e.target.parentNode.lastChild.value);
  // };
  render() {
    const { cartList } = this.props;
    const { imgSrc, name, author, price } = cartList;

    return (
      <div className="cartBoxThirdLine">
        <input type="checkbox" className="cb2" onChange={this.checkInput} />
        <div className="cartBookImage">
          <img className="checkBook" alt="checkBook" src={imgSrc} />
        </div>
        <div className="bookBoxContents">
          <ul className="bookTitle">
            <li className="title"> {name} </li>
            <li className="author"> {author} 저 </li>
            <li>
              <DeleteButton title="선택삭제" />
            </li>
          </ul>
        </div>
        <div className="bookPrice">{price}</div>
      </div>
    );
  }
}

export default CartBoxThirdLine;
