import React ,{useState} from 'react'

function SignupPage() {
      const [username,SetUsername]= useState('username');
      const [email,SetEmail]= useState('abc@gmail.com');
      const [password,setPassword] = useState('123@123');
;    const handleOnSubmit = (e) =>{        
        console.log(username);
        SetUsername('');
        console.log(password);
        setPassword('');
        console.log(email);
        SetEmail('');
        e.preventDefault();
    }
    return (
        <div>
           <form onSubmit={handleOnSubmit}>
                <input type='text' required placeholder={username} onChange={(e)=>SetUsername(e.target.value)}/><br/>
                <input type='text' required placeholder={email} onChange={(e)=>SetEmail(e.target.value)}/><br/>              
                <input type='password' required placeholder={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <input type='password' required placeholder='confirm password'/><br/>                
                <button>Register</button><br/>
                {/* forget password is pending */}

            </form>
        </div>
    )
}

export default SignupPage
