import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null)

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/myOrderData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('userEmail')
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Order data received:", data);
                setOrderData(data.orderData);
            } else {
                console.error("Failed to fetch orders");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    {orderData && orderData.order_data && orderData.order_data.length > 0 ? (
                        orderData.order_data.slice(0).reverse().map((orderGroup, index) => {
                            // First element is date object, rest are food items
                            const orderDate = orderGroup[0]?.Order_date;
                            const foodItems = orderGroup.slice(1);
                            
                            return (
                                <div key={index} className='w-100'>
                                    {/* Date Header */}
                                    {orderDate && (
                                        <div className='m-auto mt-5'>
                                            <h5>{orderDate}</h5>
                                            <hr />
                                        </div>
                                    )}
                                    
                                    {/* Order Items */}
                                    <div className='row'>
                                        {foodItems.map((item, itemIndex) => (
                                            <div key={itemIndex} className='col-12 col-md-6 col-lg-3'>
                                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                    <img 
                                                        src={item.img || "https://via.placeholder.com/300"} 
                                                        className="card-img-top" 
                                                        alt={item.name} 
                                                        style={{ height: "120px", objectFit: "cover" }} 
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <div className='container w-100 p-0'>
                                                            <span className='m-1'>Qty: {item.qty}</span>
                                                            <span className='m-1'>Size: {item.size}</span>
                                                            <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                ₹{item.price}/-
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className='m-5 w-100 text-center fs-3'>
                            {orderData === null ? "Loading..." : "No Orders Found"}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}