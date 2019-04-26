import React, { Component } from "react";

class Search extends Component {
  
  render() {
    let { search } = this.props;
    console.log("hey:", this);

    return (
      <div>
        <input
          type="text"
          className="input"
          id="searchInput"
          value={search}
          onChange={this.handleChange}
          placeholder="Looking for a book? "
        />
        <button
          onClick={() => this.props.onSearch(this.inputTxt)}
          className="btn btn-danger btn-sm m-2"
        />
      </div>
    );
  }
}

export default Search;
