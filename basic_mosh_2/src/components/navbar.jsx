import React, { Component } from 'react';


// Stateless Functional Components

// Destructuring Arguments
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar {" "}
                    <span className='badge badge-pill badge-secondary'>
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    )
}

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav class="navbar navbar-light bg-light">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">
//                         Navbar {" "}
//                         <span className='badge badge-pill badge-secondary'>
//                             {this.props.totalCounters}
//                         </span>
//                     </a>

//                 </div>
//             </nav>
//         );
//     }
// }
 
export default NavBar;