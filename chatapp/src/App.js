import logo from './logo.svg';
import './App.css';
import React ,{useState} from "react"
import {signInWithPopup,  GoogleAuthProvider } from "firebase/auth";
import {db} from './firebase';

import { setDoc,doc, onSnapshot } from 'firebase/firestore';

function App() {

const provider = new GoogleAuthProvider();

  const [login,setlogin] = useState(false)
  const [datas,setdata] = useState("hi");
  const [users,setuser] = useState("1");
  const [resData,setresData] = useState("hello")


  useState(()=>{
    const unsub = onSnapshot(doc(db, "group", "paavaifirst"), (doc) => {
      console.log("Current data: ", doc.data().data);
      setresData(doc.data())
  });
  },[])




  // const Submit = async()=>{


  //   await signInWithPopup(auth,provider).then((data)=>{
  // console.log(data)
  // setlogin(true)
  //   }).catch(()=>{
  //     setlogin(false)
  //   })
  
  // }

  const Submit = async()=>{

    // Add a new document in collection "cities"
await setDoc(doc(db, "group", "paavaifirst"), {
  name: users,
data: datas
}).then(()=>{
  alert("messeg Sent")
})

  }

  return (
 <>
<h1>username</h1>
 <input onChange={(event)=>{
setuser(event.target.value)
 }}></input>

 <br/>

<h1>messages</h1>
 <input onChange={(event)=>{
setdata(event.target.value)
 }}></input>

 <br/>
 <button onClick={()=>{
  Submit()
 }}>CLICK BOTTON</button>

{<h1>{resData.name}</h1>}
 {<h1>{resData.data}</h1>}
 </>
  );
}

export default App;
