import React from "react";
import "./App.css";
import { apiKey } from "./token";
import SearchBar from "./components/searchBar";
import BooksList from "./components/booksList";
const url = "https://www.googleapis.com/books/v1/volumes?q=";

export default class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    books: [],
    search: "test"
  };
  componentDidMount() {
    fetch(`${url + this.state.search}&maxResults=20&key=${apiKey}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ isLoaded: true, books: result });
      });
  }

  handleSeach = search => {
    this.setState({ search });
  };

  handleChange(txt) {
    this.setState({ inputTxt: txt });
  }
  render() {
    const { error, isLoaded, books, search } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <SearchBar onSearch={this.handleSeach} search={search} />
          <hr />
          <BooksList books={books.items} />
        </>
      );
    }
  }
}
