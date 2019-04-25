import React, { Component } from "react";
import Book from "./book";
class BooksList extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.setState({ books: this.props.books });
  }

  render() {
    return (
      <div>
        {this.state.books.map(b => (
          <Book key={b.id} book={b} />
        ))}
      </div>
    );
  }
}

export default BooksList;
