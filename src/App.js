import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Hooks from "./react-hooks/Hooks";

function App() {
  return (
    // <div className="app">
    //   {/* Header */}
    //   <Header />
    //   {/* APP body */}
    //   <div className="app__body">
    //     {/* sidebar */}
    //     <Sidebar />
    //     {/* Feed */}
    //     <Feed />
    //     {/* Widgets */}
    //   </div>
    //</div>

    <div className="app" >
      <Hooks></Hooks>
    </div>

  );
}

export default App;

// yarn add @material-ui/core
