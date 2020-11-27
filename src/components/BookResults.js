import React, { Component } from "react";

export default class BookResults extends Component {
  render() {

    return (
      <div>
        {this.props.results.map((book) => (
          <div>
            <h4> title: {book.volumeInfo.title} </h4>
            <h4> author:{book.volumeInfo.authors[0]} </h4>
            <h4> description:{book.volumeInfo.description} </h4>
            <h4> pubdate:{book.volumeInfo.publishedDate} </h4>
            <h4> pageCount:{book.volumeInfo.pageCount} </h4>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="thumbnail" width="auto" height="auto" />
            <h4> infoLink:{book.volumeInfo.infoLink} </h4>
          </div>
        ))}
      </div>
    );
  }
}
