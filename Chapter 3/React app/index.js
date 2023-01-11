import React from "react";
import ReactDOM from "react-dom/client";
//Using nested React.createElement

// const container = React.createElement("div", {}, [
//   React.createElement("h1", {}, "Namaste React"),
//   React.createElement("h2", {}, "Chapter 3"),
//   React.createElement("h3", {}, "Coding assignment"),
// ]);

// -----------------------------------------------------------------

//Using JSX

// const container = (
//   <div className="title">
//     <h1>Namaste React</h1>
//     <h2>Chapter 3</h2>
//     <h3>Coding assignment</h3>
//   </div>
// );

//Using Functional Component

// const Container = () => {
//   return (
//     <div className="title">
//       <h1>Namaste React</h1>
//       <h2>Chapter 3</h2>
//       <h3>Coding assignment</h3>
//     </div>
//   );
// };

//using components inside component

// const Title = () => {
//   return <h1>Namaste React</h1>;
// };

// const Container = () => {
//   return (
//     <div>
//       <Title />
//       <h2>Chapter 3</h2>
//       <h3>Coding assignment</h3>
//     </div>
//   );
// };

//Creating Header Component
const Logo = () => {
  return (
    <img
      className="img"
      src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
    />
  );
};
const Icon = () => {
  return (
    <img
      className="img"
      src="https://i.pinimg.com/736x/55/6c/38/556c381559c59fd2231498de3014e7c2.jpg"
    />
  );
};

const Searchbar = () => {
  return (
    <div>
      <input className="searchbar" type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      {<Logo />}
      {<Searchbar />}
      {<Icon />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Container />); //For rendering functional components
//root.render(container); //For rendering JSX elements.
root.render(<HeaderComponent />);
