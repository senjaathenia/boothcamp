import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import Header from "./header";
import Comment from "./Comments";
import UserForm from "./userform";
import Unsplash from "./unsplash";
// const element = <h1 className="content">This is React</h1>;

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(<Navbar />, document.getElementById("navbar"));

ReactDOM.render(<Header />, document.getElementById("header"));

ReactDOM.render(<Comment />, document.getElementById("comments"));

ReactDOM.render(<UserForm />, document.getElementById("userform"));

ReactDOM.render(<Unsplash />, document.getElementById("unsplash"));