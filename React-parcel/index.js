import React from "react";
import ReactDOM from "react-dom/client"

const a=React.createElement("h1",null,"Welcome");
const b=ReactDOM.createRoot(document.getElementById("root"));
b.render(a);