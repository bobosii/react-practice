import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.info.title}</h2>
        <ListGroup>
          {this.state.categories.map(
            (
              category // her bir kategori için bir li oluştur demek.
            ) => (
              <ListGroupItem
                active={
                  category.categoryName === this.props.currentCategory
                    ? true
                    : false
                }
                onClick={
                  () => this.props.changeCategory(category)
                  // onclick eventi bir fonksiyon gönderdiği için ()=> şeklinde yazmalısın
                }
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
              // Key vermemizin sebebi her bir elemanı döndürürken onu eşsiz yapan id vermemizi istiyor
              // Çünkü performans odaklı. key vermezsende çalışır fakat konsolda error görürsün.
            )
          )}
        </ListGroup>
      </div>
    );
  }
}
