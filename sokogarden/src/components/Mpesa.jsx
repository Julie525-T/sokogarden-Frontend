import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Mpesa=()=>{

    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const[phone,setPhone]=useState("")


    const submit=async(e)=>{

        setLoading("please wait...")

        e.preventDefault()

        try {

            const data=new FormData()

            data.append("amount",product.product_cost)
            data.append("phone",phone)

            const response=await axios.post("https://julie.alwaysdata.net/api/mpesa_payment",data)

            console.log("The response is",response);

            setSuccess(response)

            setLoading("")
            
        } catch (error) {

            setLoading("")
            setError(error.message)
            
        }
    }

    // Receive the parsed data from get products

    const {product}=useLocation().state || {}

   





    return(
        <div className="row justify-content-center">
            <h1>Make payments-Lipa na m-pesa</h1>

            <p className="text-warning">{loading}</p>
            <p className="text-success">{success}</p>
            <p className="text-danger">{error}</p>
            

            <p className="text-success">{product.product_name}</p>
            <p className="text-warning">{product.product_cost}</p>

            <div className=" col-md-6">

                <form action="" onSubmit={submit}>
                    <input type="tel" placeholder="Enter your phone number starting with 254" className="form-control"  value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                <br />
                <br />
                <button className="btn btn-success w-100">Make payments</button>
                </form>

                

                
            </div>
        </div>
    )
}

export default Mpesa