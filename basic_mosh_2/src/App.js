import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters.jsx";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 1 },
			{ id: 3, value: 2 },
			{ id: 4, value: 4 },
		],
	};

  constructor() {
    super();
    console.log("App - Constructor");
  }

  // This method is called after component is rendered into the DOM, and it is a perfect place to make Ajax
  //  calls to get data from the server.
  componentDidMount() {
    // Ajax Calls
    console.log("App - Mount");
  }


	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value++;
		this.setState({ counters });
	};

	// Single source of truth:
	// Each of our components have their own local state. Our counters component has an array of counters
	//  and each counter component has a value. This value is currently disconnected from the value property
	//  of each counter object that we have in this array.

	// So when we click this Reset button, the local state of this counter component is not updated. So we
	//  need to remove the local state of counter component and have a single source of truth.

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;

			return counter;
		});

		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		// How can we update the counter?
		// We are going to create a new array without a giving counter and the call the setState method
		//  of our component and let react update this state.

		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters: counters });
		// this.setState({ counters});
	};

	render() {

    console.log("App - Rendered");
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
				<main className="container">
					<Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}  
          />
				</main>
			</React.Fragment>
		);
	}
}

export default App;
