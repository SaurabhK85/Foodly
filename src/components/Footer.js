import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid bg-ligh-black text-white mt-5 border-top border-secondary">
      <footer className="py-3">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-6 col-md-3 mb-3">
              <h5 className="fw-bold">
                <span className="text-success">Food</span>
                <span className="text-warning">ly</span>
              </h5>
              <p className="text-white small mb-1">Food Made Friendly</p>
              <small className="text-muted">© 2025 Foodly, Inc</small>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-2 mb-3">
              <h6 className="mb-2 text-white">Quick Links</h6>
              <ul className="nav flex-column small">
                <li className="nav-item mb-1">
                  <a href="/" className="nav-link p-0 text-white-50 hover-text-success">Home</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50 hover-text-success">About</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50 hover-text-success">Menu</a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="col-6 col-md-2 mb-3">
              <h6 className="mb-2 text-white">Categories</h6>
              <ul className="nav flex-column small">
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">Pizza</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">Burger</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">Biryani</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-6 col-md-2 mb-3">
              <h6 className="mb-2 text-white">Support</h6>
              <ul className="nav flex-column small">
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">FAQs</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">Help</a>
                </li>
                <li className="nav-item mb-1">
                  <a href="#" className="nav-link p-0 text-white-50">Privacy</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-12 col-md-3 mb-3">
              <h6 className="mb-2 text-white">Contact Us</h6>
              <ul className="nav flex-column small">
                <li className="nav-item mb-1">
                  <span className="text-white-50">📧 info@foodly.com</span>
                </li>
                <li className="nav-item mb-1">
                  <span className="text-white-50">📱 +1 234 567 8900</span>
                </li>
                <li className="nav-item mb-1">
                  <span className="text-white-50">🕒 24/7 Support</span>
                </li>
              </ul>
            </div>
          </div>
        
          <div className="pt-3 mt-3 ">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 small text-muted">
                Made with <span className="text-white">❤️</span> by Saurabh Kumar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}