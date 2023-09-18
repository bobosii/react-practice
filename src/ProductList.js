import React, { Component } from "react";
import { Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.info.title}-{this.props.currentCategory}
        </h2>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quaintity Per Unit</th>
              <th>Units In Stock</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice}$</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
