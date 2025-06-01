import React from 'react'
import useLocalStorage from './custom-hook/uselocalstorage';

export default function App() {
 
  const [name,setName] = useLocalStorage('name','')
  return (
    <>
      <input 
      type = "text"
      value = {name} 
      onChange = {e=>setName(e.target.value)}>
      </input>
    </>
  );
}


