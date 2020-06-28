import React,{Component,useState} from 'react'
import style from './SignIn.css'



const SignIn =() =>{

    const [username,setUserName] = useState('')

    const handleOnSubmit = (e)=> {
        console.log("summitted")
        e.preventDefault();
        setUserName(e.username);
        console.log(e.username);
    }

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleOnSubmit}>
                <input type='text' required placeholder='name' onChange={handleOnSubmit}/><br/>
                <input type='password' required placeholder='name'/><br/>
                <button type='submit'>Submit</button><br/>
                {/* forget password is pending */}

            </form>
        </div>
    )
}
export default SignIn;



