import React from "react";
import "./App.css";
import BookHeader from "./components/BookHeader";
import BookSearchForm from "./components/BookSearchForm";
import BookResults from './components/BookResults'

class BookApp extends React.Component {
  constructor(props){
    super(props);

      this.state = {
        q: "",
        filter: 'ebooks',
        orderBy: 'relevance',
        key: 'AIzaSyDGTqXk8Hd-ElsKxKXqhtkth7Ue10-LBMU',
        results: []
      };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}

//runs after component output has been rendered to DOM
componentDidMount() {

    const orderBy = this.state.orderBy;
    let filter = this.state.filter;
    let q = this.state.q;
    let key = "AIzaSyDGTqXk8Hd-ElsKxKXqhtkth7Ue10-LBMU";
    let queryArray = q.replace(/ /g , '+');
    let stringArray = [queryArray, filter, orderBy, key];
    let mappedValuesArray = stringArray.map(function(params){
      return params + "&";
    })
    let keyArray = Object.keys(this.state);
    
    let finalOuput = [];
       mappedValuesArray.forEach(function(items, idx){
       finalOuput.push(`${keyArray[idx]}=${items[idx]}`)
      })

    let stringifiedOutput= finalOuput.join();
    let finalURLstring = stringifiedOutput.replace(/,/g,"")

    let baseURL = "https://www.googleapis.com/books/v1/volumes?";
    let fetchURL = baseURL+finalURLstring;
  

  fetch(fetchURL)
  .then(response => {
    if(!response.ok) {
      throw new Error('Something went wrong, please try again later.')
    }
    return response;
  })
  .then(response => response.json())
  .then(data => { 

  let dataKeys = Object.entries(data)
  console.log(dataKeys)

    this.setState({
        results: dataKeys[2][1]
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });
}


handleChange(value){
  this.setState({q: value})
}

handleSubmit(event){
  event.preventDefault();
  if(this.state.q.length > 1){
  this.componentDidMount();
  }
}

setSelectedBook(selected){
  this.setState({
      filter: selected
  })
}

setSelectedSort(selected){
this.setState({
      orderBy: selected
  })
}

  render() {
    return (
      <div>
        <div className="BookApp">
          <BookHeader/>
          <BookSearchForm
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
              changeHandlerBook = {selected => this.setSelectedBook(selected)}
              changeHandlerSort = {selected => this.setSelectedSort(selected)}
              filter = {this.state.filter}
              orderBy = {this.state.orderBy}
          />
           <BookResults
          results = {this.state.results}
           />
        </div>
      </div>
    );
  }
}

export default BookApp;
