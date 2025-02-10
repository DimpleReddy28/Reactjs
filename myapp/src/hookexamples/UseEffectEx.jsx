import React, {useEffect, useState} from 'react'

// const UseEffectEx = () => {
//   const [count , setCount] = useState(0);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount(1000);
//     },5000);
//     //document.title = "MRU";
//     document.title = count;

//   })

//   useEffect(()=>{
//     fetch("")
//     .then(res=>res.json().then(data=>{
//         console.log(data);
//     }))
//     .catch(err=>console.log(err))
//   })
//   return (
//     <div>UseEffectEx
//        {/*<h1>{count}</h1>*/}
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
  export default UseEffectEx;