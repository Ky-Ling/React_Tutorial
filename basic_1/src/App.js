import './App.css';

// 1: Components: We can create different components and then import them into our larger components.
//  Component is a piece of code that returns or renders some JSX. Our component returns what we would 
//  like to render to the DOM.


// 2: Props: it is argument that allows us to pass dynamic data through react components
const Person = (props) => {
  return (
    <>
      <h1>Name: { props.name }</h1>
      <h2>Last Name: { props.lastName }</h2>
      <h2>Age: { props.age }</h2>
    </>
  )
}


const App = () => {
  const name = "John";
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello { isNameShowing ? name : "someone" }</h1>
      
      <h1>{2 + 2}</h1>

      <h1>{ name ? (
        <>
          <h1>Hello { name }</h1>
        </>
      ) : (
        <>
          <h1>Test</h1>
          <h2>There is no name!</h2>
        </>
      )}</h1>

      <h2>
        <Person name={"Brian"} lastName={"Yu"} age={23}/>
        <Person name={"John"} lastName={"Fish"} age={24}/>
        <Person/>
      </h2>
    </div>
  );
}



export default App;
