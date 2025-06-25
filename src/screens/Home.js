import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/foodData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      setFoodItems(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ height: "100vh", marginTop: "0" }}>
        <div className="carousel-inner" id="carousel" style={{ height: "100%" }}>
          <div className="carousel-caption" style={{ zIndex: "9", top: "50%", bottom: "auto", transform: "translateY(-50%)" }}>
            <div className="d-flex justify-content-center">
              <input 
                className="form-control me-2 w-75 bg-white text-dark" 
                type="search"
                placeholder="Search in here..."
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn text-white bg-success" onClick={() => setSearch('')}>X</button>
            </div>
          </div>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&h=1080&fit=crop" className="d-block w-100 h-100" style={{ filter: "brightness(30%)", objectFit: "cover" }} alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img src="https://images.unsplash.com/photo-1509365390695-33aee754301f?w=1920&h=1080&fit=crop" className="d-block w-100 h-100" style={{ filter: "brightness(30%)", objectFit: "cover" }} alt="..." />
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop" className="d-block w-100 h-100" style={{ filter: "brightness(30%)", objectFit: "cover" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{ width: "10%" }}>
          <div style={{ backgroundColor: "#cf872b", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto" }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{ width: "10%" }}>
          <div style={{ backgroundColor: "#cf872b", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto" }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </div>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        {foodCat.length > 0 ? foodCat.map((data) => (
          <div key={data._id || data.id} className="row mb-3">
            <div className="fs-3 m-3">{data.CategoryName}</div>
            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
            {foodItems.length > 0 ? foodItems
              .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
              .map((filterItems) => (
                <div key={filterItems._id || filterItems.id} className="col-12 col-md-6 col-lg-3">
                  <Card 
                    foodName={filterItems.name} 
                    item={filterItems} 
                    options={filterItems.options[0]} 
                    ImgSrc={filterItems.img || `https://source.unsplash.com/random/300x300/?${filterItems.name}`} 
                  />
                </div>
              )) : <div>No Such Data</div>}
          </div>
        )) : <div>No Categories Found</div>}
      </div>
      <Footer />
    </div>
  );
}