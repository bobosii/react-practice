import React, { Component } from "react";
import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Routes, Switch } from "react-router-dom";
import Notfound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantitiy += 1;
    } else {
      newCart.push({ product: product, quantitiy: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added to cart");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id); // gönderdiğim id dışındakileri filtrelemiş ol demek.
    this.setState({ cart: newCart });
    alertify.error(product.productName + " Removed from cart");
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      addToCart={this.addToCart}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                ></Route>
                <Route path="*" element={<Notfound></Notfound>}></Route>
                <Route path="/cart" element={<CartList></CartList>}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
