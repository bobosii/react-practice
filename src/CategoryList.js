import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ],
    currentCategory: "",
  };
  changeCategory = (category)=>{
    this.setState({ currentCategory: category.categoryName })
  }

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
                onClick={() => this.changeCategory(category)
                  // onclick eventi bir fonksiyon gönderdiği için ()=> şeklinde yazmalısın
                }
                key={category.categoryId}
              >
                {category.categoryName}
              </ListGroupItem>
              // Key vermemizin sebebi her bir elemanı döndürürken onu eşsiz yapan id vermemizi istiyor
              // Çünkü performans odaklı. key vermezsende çalışır fakat konsolda error görürsün.
            )
          )}
        </ListGroup>
        <h3>{this.state.currentCategory}</h3>
      </div>
    );
  }
}
