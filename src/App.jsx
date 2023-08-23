import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import Product from "./product";
import Add from "./add";
import Footer from "./footer";
// import Test from "./test";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Add />
      </div>
      <div>
        <Footer />
      </div>
      {/* <div>
        <Test />
      </div> */}
    </>
  );
}

export default App;
