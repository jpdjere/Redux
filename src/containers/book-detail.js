import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetail extends Component {
  render(){

    //Because when the app loads the state in the reducer_active_book is null by default (that we set with ES6),
    // the {this.props.book.title} compiles to {null.title} and thus throw an error. To correct that we can:
    if(!this.props.book){
      return  <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
    //Here we are specifically refering activeBook, because the ActiveBook reducer (from reducer_active_book.js)
    //  is creating the activeBook piece of state in the combineReducer
  }
}

export default connect(mapStateToProps)(BookDetail);
