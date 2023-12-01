import React, { useEffect, useState } from 'react'

import Card from './Card';

const App = () => {
  const [user, setUser] = useState(null);
    
    useEffect(() => {
      const fetchData = async () =>{
        try{
            const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abcd');
        const data = await response.json();
        setUser(data.results[0]);
        }catch(e){
            alert('An Error has occured! For details check Console');
            console.error('Error is: '+e);
        }
      } ; 
        fetchData();
      
    }, []);
    
 
    return (
    <>
        <div>
            {user && <Card user={user}/>}
        </div>
    </>
  )
}

export default App