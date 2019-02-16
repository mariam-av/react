import React from "react";
import ReactDom from "react-dom";
import Footer from "./Footer";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return;
    <div>{this.props}</div>;
  }
  myMethod() {
    return (
      <div>
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
