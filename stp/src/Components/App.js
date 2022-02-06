import React from "react";
import './App.css';
import Header from "./Header";
import Addcontacts from "./Addcontacts";
import Contactlist from "./Contactlist";

function App() {
  return (
    <div>
      <Header></Header>
      <Addcontacts/>
      <Contactlist/>
    </div>
  );
} 

export default App;
