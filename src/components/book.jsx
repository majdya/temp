import React, { Component } from "react";
import "./book.css";
class Book extends Component {
  state = {
    isLoaded: false,
    book: {},
    authors: []
  };

  componentDidMount() {
    this.setState({
      isLoaded: true,
      book: this.props.book,
      authors: this.props.book.volumeInfo.authors
    });
    // console.log(this.props.book);
  }
  render() {
    // console.log(this.state.book);
    const { isLoaded, book, authors } = this.state;
    let authorsStr;
    if (authors) {
      authorsStr = authors.join(", ");
    }

    if (!isLoaded) return <p>Loading...</p>;

    return (
      <div className="book">
        <h1>Title: {book.volumeInfo.title}</h1>
        <h1>Authors: {authorsStr}</h1>
        <h1>Publish Date: {book.volumeInfo.publishedDate}</h1>
      </div>
    );
  }
}

export default Book;
