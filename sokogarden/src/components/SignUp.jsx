import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp=()=>{

    // Initializing our hooks

    const [username,setUsername]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const[password,setPassword]=useState()

    return(
        <div className="row justify-content-center">

            <div className="col-md-6 card shadow" >

                <h1>Sign Up</h1>


                <form action="">

                    <input type="text" placeholder="Enter your username" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <br />
                    
                    <input type="email" placeholder="Enter email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    
                    <input type="tel" placeholder="Enter phone number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <br />
                    
                    <input type="text" placeholder="Enter your password" className="form-control"value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <br />

                    <input type="submit" value="Sign Up" className="btn btn-primary text-white w-100"/>
                    <br />
                    <br />
                    <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>



                </form>


            </div>
            


        </div>
    )
}

export default SignUp