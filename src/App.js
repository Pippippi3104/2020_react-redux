import React, {Componet} from "react";

/* class App extends Componet {
  render() { */
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

    //babel repl -> JSXをJSに変換後のコードが見れる

/*     return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I'm clicking now !")}} />
      </React.Fragment>
    );
  }
} */

const App = () => {
  return (
  <div>
    Hi!
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  ) 
}

const Cat = () => {
  return (
    <div>
      Meow!
    </div>
  )
}

export default App;
