import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    let { card, handleUpDownQuantity, handleDeleteCard } = this.props;
    return (
      <tr className="card-item">
        <td>{card.maSP}</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button onClick={handleUpDownQuantity(card, false)}>-</button>
          {card.soLuong}
          <button onClick={handleUpDownQuantity(card, true)}>+</button>
        </td>
        <td>{card.giaBan}</td>
        <td>{card.giaBan * card.soLuong}</td>
        <td>
          <button className="btn btn-danger" onClick={handleDeleteCard(card)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
