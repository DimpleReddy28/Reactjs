// function App() {
  //let ele = React.createElement("div" , {className:"APP"}),
    //React.createElement("h1",null,"Header")
  //   //)
  //   let username = "Akshitha";
  // return (
    //<div className="App">
      //<h1>Header</h1>
      
    //</div>
    // <section>
    //   <h1> ONE JSx element</h1>
    //   <p>lorm3</p>
    // </section>
    // <div>
      // <h1>{username}</h1>

    // </div>
    // import React from 'react'

    // const 
import React  from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import footer from './components/footer'
const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Main/>
            <div className='sidebar'>
            <sidebar1/>
            <sidebar2/>
            </div>
            <footer/>
        </div>
    )
}

export default App;

//   );
// }

// export default App;