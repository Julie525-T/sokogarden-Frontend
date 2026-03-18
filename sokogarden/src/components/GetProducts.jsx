import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const GetProducts=()=>{

    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[products,setProducts]=useState([])



    const navigate=useNavigate()

    // Variable to store image

    const image_url="http://julie.alwaysdata.net/static/images/"

    // Creat a function to get our products from the api


    const fetchProducts=async()=>{

        setLoading("Please wait as we retrieve your products")

        try {

            const response=await axios.get("https://julie.alwaysdata.net/api/getproductdetails")
            setProducts(response.data)

            console.log("The response is",response)
            setLoading("")
        

        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }

    // End of function to call useEffect

    useEffect(()=>{
        fetchProducts()
    },[])

    return(

        <div className="row">

            <h1>Available Products</h1>

            <p className="text-warning">{loading}</p>
            <p className="text-danger">{error}</p>

            {/* Loop through our product */}

            {products.map((product)=>( 

           

            <div className="col-md-3 justify-content-center">

                <div className="card shadow m-4">

                <img src={image_url + product.product_photo} alt="Hair clip" className="product_img" />

                <div className="card-body">

                    <p className="text-success">{product.product_name}</p>
                    <p className="text-secondary">{product.product_description}</p>
                    <p className="text-warning">Ksh {product.product_cost}</p>

                    <input type="button" className=" btn btn-secondary w-100"  value="Purchase now" onClick={()=>navigate("/mpesa",{state:{product}})}/>

                </div>

                </div>


            </div>

             ))}



         
        </div>
    )
}

export default GetProducts