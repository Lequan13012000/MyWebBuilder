import React from "react";
import "./App.css";

// import Component
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
function App() {
  return (
    <React.StrictMode>
      <Header></Header>
      <div class="main-content">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </React.StrictMode>
  );
}

export default App;
