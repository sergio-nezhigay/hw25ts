import React from 'react';
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>Contacts App</h1>
      </header>
      <main>
        <Contacts />
      </main>
    </div>
  );
}

export default App;
