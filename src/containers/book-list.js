import React, {Component} from 'react'
//Forge a connection between the data in Redux to this component we need:
import {connect} from 'react-redux';
//This is the function that will get called onclick
import {selectBook} from '../actions/index'
//This function will make sure that the actions that is generated by the action creator will flow thorugh all the reducers in our application
import {bindActionCreators} from 'redux'

// This component creates a <ul></ul>, whcih calls a function called renderList() that maps over an array of books, which we haven't
//  passed into the component yet. For each book in the array we create an <li></li> that contains the book title.
//  What we have to do now is plug in our application state into this: somehow get it into this.props.books.

// Connecting React and Redux has to be done with a separate libray called React-Redux (already included in this boilerplate)
// To make use of it, we are going to define one of our Component as a CONTAINER: a React Component that has a direct connection
// to the state managed by Redux. (Containers are also called Smart Components). We usually separate them in the Containers folder


class BookList extends Component {
  renderList(){
    //What we have to do is
    return this.props.books.map((book) => {
      //We have to add a KEY because it is a list, we need to use a unique value as Key.
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//COMO HACER DISPONIBLE EL STATE AL CONTAINER
//the mapStateToProps function is especially key: the first argument is a state and returns an object.
// Whatever object is returned will be available for our component as this.props
// This function is the "glue" between React and Redux
function mapStateToProps(state){
  //The purpose of this function is to take our application state as an argument and whatever
  // gets returned from here will show up as props inside the BookList
  return {
    // !------- When our state changes, this container will instantly re-render
    books:state.books
  }
}

//COMO HACER DISPONIBLE LOS ACTIONS AL CONTAINER
// Anything returned form the mapDispatchToProps function will end us as props on the BookList container. We are specifically passing an object
//   with key and value "selectBook". So the same happens as in mapStateToProps: whatever is returned from this function
//   (actually, what we pass in the first argument of bindActionCreators will be available as props in our container.
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to all of our reducers. The bindActionCreators function
  //  makes sure that the result of the selectBook function flows through the "dispatch" function. The dispatch function
  //  recieves them like a funnel and it spits them out on all the different reducers in our application.
  return bindActionCreators({selectBook: selectBook},dispatch)
}

//CONECTO LAS DOS FUNCIONES ANTERIORES A MI CONTAINER
//Connect takes a function and a component and produces a container.
// A container is a component that is aware of the state that is contained in Redux.
// Promote BookList from a component to a container - it need to know about this new dispatch
//  method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);