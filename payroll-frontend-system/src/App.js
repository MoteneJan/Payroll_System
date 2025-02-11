import React from 'react';
import MainComponent from './MainComponent'; // Import the MainComponent
import './App.css'; // Import the updated CSS

function App() {
  return (
    <div className="App">
      {/* Remove the default header and replace it with MainComponent */}
      <MainComponent />
    </div>
  );
}

export default App;