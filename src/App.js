import React from'react'

//examples related to jsx

function App() {
  let element=<h1>Welcome to React JS</h1>   
  return (
        //example related to jsx in lower case
    //   {/* <H1>hello how are you</H1> */}

    //example related to jsx must have single
    // <section>
    // <div> 
    //   <h1>This my first react code</h1>
    //   {/* {element}
    //   30+90
    //   {30+90} */}

    //   <p>Hello how are you welcome react class</p>
    // </div>
    // <div>
    //   <h1>welcome</h1>
    // </div>
    // </section>
    
//example related to react fragment
    <React.Fragment>
       <h1>welcome</h1>
       <p>Hello how are you welcome react class</p>
    </React.Fragment>
  );
}

export default App;
