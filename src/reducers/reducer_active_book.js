//Reducers have two arguments: the current state and an action. Reducers are only ever called
// when an action takes place.
//  HOWEVER: State argument is not application state, only the state this reducer is responsible for.
//  This means that, as we previously saw with our BooksReducer, BookReducer is responsible for creating the
//  books property in the object inside our rootReducer in index.js of our /reducer folder. So the state that
//  get passed as an argument in our reducer (this one) is only the state that was previously generated by the BooksReducer.
//  So in other words, we had the same state that is being produced by these reducers is flowing back into it whenever and action occurs.
//  THIS REDUCER STATE IS ACTUALLY SOMETHING COMPLETELY SEPARATE FROM OUR APPLICATION STATE, IT COULD ACTUALLY BE CALLED SOMETHING DIFFERENT
//  For example: ----> Sigo abajo
export default function(state = null, action){ //Explicación del argumento en *1
  // <------- If we had a piece of state like:
  // state += 1
  // any time an action was triggered, the state would be incremented by one. So if it starts at 0, the first time my actions is
  // triggered we add one, so the state is one, and then 2,3,4. So, the same state is kepps flowing into this reducer over and
  // over again, not the application state.

  //When we do care about the action:
  // - Most Redux reducers are built up with switch clauses, which looks at the type of the actions and if it is one which we care
  //    about, it will return a new state. In this case, if the action.type is "BOOK_SELECTED", we will return the action's payload, which is the selected book
  switch(action.type){
    case "BOOK_SELECTED":
      return action.payload
  }
  //If we don't care about the action:
  return state
}


/* ----------- *1

We need to handle the case in which the user boots up the app and no book is selected as default. In that case,
our app would be returning state (line 24 masomenos) which is undefined. Bur Redux doesn't allow us to return
undefined from a Reducer, it will throw an error. So to handle this case we default the value of the state to
null. This is a piece of ES6 syntax, that means: when this argument comes in, if it is undefined, set it to null.


*/
