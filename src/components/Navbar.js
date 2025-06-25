import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar(props) {
    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userEmail')
        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0"
                style={{ 
                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)", 
                    zIndex: "1000", 
                    width: "100%",
                    backdropFilter: "blur(10px)"
                }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex flex-column align-items-start" to="/">
                        <div className="fs-2 fw-bold lh-1">
                            <span className="text-success">Food</span>
                            <span className="text-warning">ly</span>
                        </div>
                        <small className="text-white-50" style={{ fontSize: "0.7rem", marginTop: "-5px" }}>Food Made Friendly</small>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {/* Empty - no nav items */}
                        </ul>
                        
                        {(!localStorage.getItem("token")) ?
                            <div className="d-flex">
                                <Link className="btn btn-outline-success me-2" to="/login">
                                    <i className="fas fa-sign-in-alt me-1"></i> Login
                                </Link>
                                <Link className="btn btn-success" to="/signup">
                                    <i className="fas fa-user-plus me-1"></i> Sign Up
                                </Link>
                            </div> :
                            <div className="d-flex align-items-center">
                                <Link className="btn btn-outline-success btn-sm me-2" to="/myorder">
                                    <i className="fas fa-receipt me-1"></i> My Orders
                                </Link>
                                <button className="btn btn-success position-relative me-2" onClick={loadCart}>
                                    <ShoppingCartIcon />
                                    {items.length > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {items.length}
                                            <span className="visually-hidden">items in cart</span>
                                        </span>
                                    )}
                                    <span className="ms-1 d-none d-md-inline">Cart</span>
                                </button>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
                                <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                                    <i className="fas fa-sign-out-alt me-1"></i> Logout
                                </button>
                            </div>}
                    </div>
                </div>
            </nav>
            {/* Add spacing for fixed navbar */}
            <div style={{ marginTop: "85px" }}></div>
        </div>
    )
}