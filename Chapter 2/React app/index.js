import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", {}, "Hello World!");
const tagline = React.createElement(
  "h3",
  { id: "tagline", color: "blue" },
  "Namaste React Assignment Day 1"
);
console.log(tagline);
const container = React.createElement("div", { id: "container" }, [
  h1,
  tagline,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
