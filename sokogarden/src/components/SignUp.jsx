import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp=()=>{

    // Initializing our hooks

    const [username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")

    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // Create a function to send our data to the server

    const submit=async(e)=>{

        e.preventDefault()
        setLoading("Please wait as we upload your data")
        
        try {

            const data=new FormData()

            data.append ("username",username)
            data.append ("email",email)
            data.append ("phone",phone)
            data.append ("password",password)

            // Call our API to send data to the database

            const response=await axios.post("https://julie.alwaysdata.net/api/signup",data)

            setLoading("")

            setSuccess(response.data.message)

            // Reset the form after sending data

            setUsername("")
            setEmail("")
            setPhone("")
            setPassword("")

            
        } catch (error) {

            setLoading("")
            setError(error.message)
            
        }

    }

    return(
        <div className="row justify-content-center">

            <div className="col-md-6 card shadow" >

                <h1 className="p-2 m-2">Sign Up</h1>


                <form action="" onSubmit={submit} >

                    <p className="text-warning">{loading}</p>
                    <p className="text-success">{success}</p>
                    <p className="text-danger">{error}</p>

                    <input type="text" placeholder="Enter your username" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    <br />
                    <br />
                    
                    <input type="email" placeholder="Enter email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <br />
                    <br />
                    
                    <input type="tel" placeholder="Enter phone number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                    <br />
                    <br />
                    
                    <input type="text" placeholder="Enter your password" className="form-control"value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <br />

                    <input type="submit" value="Sign Up" className="btn btn-success text-white w-100"/>
                    <br />
                    <br />
                    <p>Already have an account? <Link to={"/signin"}>Sign In</Link></p>



                </form>


            </div>
            


        </div>
    )
}

export default SignUp