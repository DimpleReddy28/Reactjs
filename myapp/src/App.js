// function App() {
  //let ele = React.createElement("div" , {className:"APP"}),
    //React.createElement("h1",null,"Header")
  //   //)
  //   let username = "Akshitha";
  // return (
    //<div className="App">
      //<h1>Header</h1>

import React, { useEffect, useState } from "react";

      
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
// import React  from 'react';
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import footer from './components/footer'
// const App = () => {
//     return (
//         <div className='app'>
//             <Navbar/>
//             <Main/>
//             <div className='sidebar'>
//             <sidebar1/>
//             <sidebar2/>
//             </div>
//             <footer/>
//         </div>

//     )

// export default App;

//   );
// }

// export default App;
// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
//        <div>
//         {/* <CBCPropEx */}
//         username="DimpleReddy"
//         age={20}
//         hobbies={["Playing","reading books","sleeping"]}
//         address={{city:"Palnadu",area:"piduguralla"}}
//         sendFun={function(){alert("hi i am DimpleReddy")}}
//         /> *


//           <FBCPropEx
//           username="Abhinay"
//           isMarried={true}
//           hobbies={["chatting","Reading"]}
//           />
//       </div>
//     )
//   }
// }
// //
// import React from 'react'
// import PropChild

// import logo from './logo.svg'
// import './App.css';
// import MyForm from './components/myForm';



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;
// import React, {useEffect, useState} from 'react'

// const UseEffectEx = () => {
//   const [count , setCount] = useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(1000);
//     },5000);
//     //document.title = "MRU";
//     document.title = count;

//   })
//   return (
//     <div>UseEffectEx
//       <h1>{count}</h1>
//     </div>
//   )
// }
// export default UseEffectEx;

const UseEffectEx = () => {
    const [users , setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json().then(data=>{
          //console.log(data);
          setUsers(data);
      }))
      .catch(err=>console.log(err))
    })
    return (
      <div classname='parent'>UseEffectEx
         {/*<h1>{count}</h1>*/}
         {
            users.map((user,index)=>{
                return(
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h2>{user.email}</h2>
                    </React.Fragment>
                )
            })
         }
      </div>
    )
  }
  export default UseEffectEx