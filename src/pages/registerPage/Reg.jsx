import React, { useState } from 'react'





const Reg = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
    
    <form>

        <input type='text'   value={username} onChange={(e)=>setUsername(e.target.value)}  />
        <input type='email '   value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type='password'   value={password} onChange={(e)=>setPassword(e.target.value)}  />

    </form>
    
    </div>
  )
}

export default Reg