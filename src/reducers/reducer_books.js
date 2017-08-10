//A REDUCER is a function that returns a piece of the application state


//To make use of this reducir in onther parts of the project, we will export it.
//When importing it in another file, it will directly have acces to the reducer
export default function(){
  return [
    {title: 'Harry Potter', pages:100},
    {title: 'Javascript: The Good Parts',pages:86},
    {title: 'The Dark Tower',pages:345},
    {title: 'The Little Prince',pages:23},
    {title: 'Beloved',pages:553},
  ]
}

//We added this to our reducers/index.js
