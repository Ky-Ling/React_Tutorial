import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevPros", prevProps);
        console.log("prevState", prevState);

        if(prevProps.counter.value !== this.props.counter.value) {
            // AJAX call and get the new data from the server
        }
    };

    componentWillUnmount() {
        console.log("Counter - unmount");
    }


    // For controlled component, whenever the data need to be modified, this component need to raise 
    //  an event and have its parent take care of modifying the data.

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increase</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='button btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        )
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
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


// 4: Life Cycle:
// (1): Mount: When an instance of a component is created and inserted into the DOM, And we have lifecycle
//      hooks: constructor, render, componentDidMount. React will call these methods in order.

// (2): Update: this phase is happen when the state or the props of a component get changed.
//      Lifecycle hooks: render, componentDidUpdate. Whenever we change the state of a component or give it
//      new props, these two methods are called in order.

// (3): Unmount: When a component is removed from the DOM(such as we delete a counter).
//      Lifecycle hooks: componentWillUnmount. 

