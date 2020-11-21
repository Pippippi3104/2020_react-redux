import React, {Componet} from 'react';

function App() {
/*   return (
    <h1>
      Hello World.
    </h1>
  ); */

  /* const greeting = "Hi, Tom !";
  const dom = <h1 classname="foo">{greeting}</h1>
  return dom; */

/*   return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I'm clicking now !")}} />
    </div>
  ); */

  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I'm clicking now !")}} />
    </React.Fragment>
  );
}

export default App;
