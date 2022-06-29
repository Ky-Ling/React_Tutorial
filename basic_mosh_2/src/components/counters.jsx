import React, { Component } from 'react';
import Counter1 from "./counter1";

class Counters extends Component {
    
    render() { 
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (
            <div>   
                <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>

                {counters.map(counter => 
                    <Counter1 
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                )}
            </div>

            // <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}/>
            // Here why the value of id and key are same? because this "key" attribute is used internally by 
            //  react, so we are not able to access it in our counter component, so we have to pass id as a
            //  prop and then read it via "this.props.id". 

            // The another issue is we pass value and id as separate props, both of them are properties of
            //  counter object. And if we have to add new properties in the future, we need to come here
            //  to add, gradually this is going to get messy, so the whole point of using object is to 
            //  encapsulate related values. So we can simply pass "counter={counter}", the counter object is 
            //  carrying all the data about a counter. And back to counters component, we need to change the 
            //  expression, we have to prefix it will "counter". like this.prop.is -> this.props.counter.id
        );
    }
}
 
export default Counters;
