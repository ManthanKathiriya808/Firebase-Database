import React, { useEffect, useState } from "react";

const Product = ()=>{

 const [data,setData] = useState([])
 const [cartData,setCartData] =useState([]) || []
//  const [newData,setNewData] = useState([])
    

 async function fetchData(){
  
   const res = await fetch('https://dummyjson.com/products')
   const resp = await res.json()
   setData(resp.products)
   
  }


  const addCart = async ()=>{

    try {

      const res = await fetch('https://add-to-cart-auth-default-rtdb.firebaseio.com/cart.json',{
        method:"PUT",
        body:JSON.stringify(cartData),
        header:{
          'content-Type': 'application/json'
        }
      })
      

      
    } catch (error) {
      console.log(error)
    }
  }


    
    
    
    const handleCart = async (ele)=>{

       setCartData([...cartData,ele])
       // console.log(ele)
       await addCart()
      }
      console.log(cartData)

  useEffect(()=>{
      fetchData()
  },[])


    useEffect(()=>{

      const getData = async ()=>{

        const res = await fetch('https://add-to-cart-auth-default-rtdb.firebaseio.com/cart.json')
        const resp = await res.json()
        
        setCartData(resp || [])



      }

      getData()
    },[])


    return(
          <div>


                <div className="container my-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
         <button className="btn btn-outline-dark btn-sm">🛒-{cartData?.length || 0} </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>


        <div className="container my">
            <div className="row row-cols-4">
                {
                    data?.map((item)=>(
                            <div key={item.id} className="col">
                                <div className="card" >
                                    <img src={item.thumbnail} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.price}</h5>
                                        <p className="card-text">{item.title}</p>
                                        <button onClick={()=> handleCart(item)} className="btn btn-primary btn-sm">Add</button>
                                    </div>
                                    </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
    )

}

export default Product