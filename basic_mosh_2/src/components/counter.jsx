import React, { Component } from 'react';

class Counter extends Component {
    
    // We are initializing the value property of our state object based on what we get from our props, this
    //  piece of code is executed only once when an instance of counter component is created.

    // Controlled component does not have its own local state, it receives all the data via props and raises
    //  events whenever data need to be changed, so this component is entirely controlled by its parent.

    // To refactor this code, I recreate a new file called counters1.jsx
    state = {
        value: this.props.counter.value
        // tags: ["tag1", "tag2", "tag3", "tag4"]
    };
 
    // constructor() {
    //     // Because Counter class is inherited from Component class, in this constructor function, we need to 
    //     //      call super() function.
    //     super();
        
    //     // This time, we will get counter object.
    //     // console.log("Constructor: ", this);

    //     // This "bind" method will return a new instance of handleIncrement function and in this handleIncrement
    //     //      function, "this" is always referencing the current object.
    //     this.handleIncrement = this.handleIncrement.bind(this);

    //     // Another good way is to use arrow function on handleIncrement function rather than constructor
    // }



    handleIncrement = () => {
        // console.log(product);

        // console.log("Increase button");

        // In this event handler, we can not access "this".

        // Depending on how a function is called:
        // (1): obj.method --> this function is called as part of a method in an object, this in that function
        //      we always return a reference to that object.
        // (2): function() --> If that function is called as a stand-alone function without an object reference,
        //      "this" by default returns a reference to the window object, but if "strict" mode is enabled, 
        //      "this" will return "undefined".

        // So how can we solve this problem: using bind() method. 
        // console.log(this);

        this.setState({ value: this.state.value + 1 });
        
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increase</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='button btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    };
    
}
 

export default Counter ;


// 1: Props: Include the data that we give to a component. --> read-only
// 2: State: Include data that is local or private to that component, so other components can not access that 
//  state, it is completely internal to that component 

// 3: The component that owns a piece of the state, should be the one modifying it.
// In this case, we wanna delete counter, the counter component will raise this event(onDelete) and our counters
//  component will handle this event -> handelDelete()