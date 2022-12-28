import React from 'react';

const Login =()=>{

    return (
        <>
        <form action=''>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" autoComplete='off'/>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type ="text" name="password" id="password"/>
            </div>
            <button type="submit" >Login</button>
        </form>
        
        </>

    )

}
export default Login;