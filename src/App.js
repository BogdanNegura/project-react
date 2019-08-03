import React from 'react';
import Tweet from './Tweet';

function App() {
  return (
    <div className="app">
      <Tweet name="Bogdan" message= "This is a random tweet"/>
      <Tweet name="john Snow" message= "I am the true King"/>
      <Tweet name="winter is coming" message= "700k my dudes"/>
      <Tweet name="mosh" message= "My new course"/>
    </div>
  );
}

export default App;