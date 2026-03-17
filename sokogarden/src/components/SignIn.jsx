import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




const SignIn=()=>{

    // Initializing hooks

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const navigate = useNavigate();

    // Creating a function to send our data to the database

    const submit=async(e)=>{

        e.preventDefault()
        setLoading("Please wait as we check your data")

        try {

            const data=new FormData()

            data.append("email",email)
            data.append("password",password)

            const response=await axios.post("https://julie.alwaysdata.net/api/signin",data)

            setLoading("")  // After successful posting,clear the loading message 

            // Check if the response has user item,

            if (response.data.user) {
                // If user is found, store user details in localstorage

                localStorage.setItem ("user", JSON.stringify(response.data.user));
                setSuccess(response.data.message);

                // Redirect to /get products component

                setTimeout(()=>{
                    navigate("/");
                },2000)
            }
            
            else{
                // user not found, show error message

                setError(response.data.message)
            }


            
        } catch (error) {
            
        }

    }


   

    
    return(
        <div className="row justify-content-center">

            <div className="col-md-6 card shadow">

                <h1 className="p-2 m-2">Sign In</h1>

                <form action="" onSubmit={submit}>

                    <p className="text-warning">{loading}</p>
                    <p className="text-success">{success}</p>
                    <p className="text-danger">{error}</p>

                    <input type="text" placeholder="Enter your email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                    <br />
                    <br />
                    <input type="text" placeholder="Enter your password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <br />
                    <br />
                    <input type="submit" value="Sign In" className="btn btn-success text-white w-100"/>

                    <p>Don't have an account? <Link to="/signup" >Sign Up</Link></p> 
                    <br />
                    <br />
                </form>
                <br />


            </div>
            
        </div>
    
    )
}

export default SignIn