//ACTIONS ALWAYS RETURN AN object WITH A type AND OPTIONALLY A payload
//This is the function that we will call when a user clicks on a book.
//However, we can't just import it on the BookList component and simply call it on click:
//  this is just a plain function and we need to make sure that the action that gets returned
//  from it ends up running though all of our reducers (is wired up to Redux)
export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
