import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { Button } from "shards-react";

export class Navbar extends Component {
  render() {
    // const Landingpage = {
    //   width: "100%",
    //   marginTop:'-20px',
    //   boxShadow: '#e9e9e9 1px 6px 7px 0px',
    //   backgroundColor: "#5C80E5",
    //   zindex: '100',

    // };
    return (
      <div>
        <nav className="navbar shadow  navbar-expand-lg bg-info navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="200" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center ml-auto text-center ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Service
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/WhatWeDo">
                    What We DO
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Other Services
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  <Button outline thmem="primary" className="primary">
                    Contact Us
                  </Button>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  <i className="fa fa-user"></i>
                </Link>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
// <div>
//     <div>
//         <ul>
//             <li>
//                 <Link to="/" >Home</Link>
//             </li>
//             <li>
//                 <Link to="/About" >About</Link>
//             </li>
//             <li>
//                 <Link to="/Service" >Service</Link>
//             </li>
//             <li>
//                 <Link to="/WhatWeDo" >What we do</Link>
//             </li>
//             <li>
//                 <Link to="/Portfolio" >Portfolio</Link>
//             </li>
//             <li>
//                 <Link to="/Contact" >Contact</Link>
//             </li>
//         </ul>
//     </div>
// </div>
