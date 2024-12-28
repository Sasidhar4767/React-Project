import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";





const HomePage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Toggle the login form visibility
    const toggleLoginForm = () => {
        setShowLoginForm((prevState) => !prevState);
    };







    const products = [
        {
            images: "/images/Heading-01.png",
            // src: "../../public/images/Product-details-02.png",   Heading-01.png
            alt: "boAt Airdopes",
            name: "boAt Airdopes",
            heading: "Featherweight For Comfort All-Day.",
            price: "₹1,099",
            oldPrice: "₹2,990",
        },
        {

            // src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9C4kcDDaO_wFL7_5PP-EyOyxf3VATO7LAw&se",
            images: "/images/TopProducts-7.png",
            alt: "JBL Live 660NC",
            name: "JBL Live 660NC",
            heading: "Keep The Noise Out, Or In. You Choose.",
            price: "₹9,999",
            oldPrice: "₹14,999",
        },
        {

            // src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9C4kcDDaO_wFL7_5PP-EyOyxf3VATO7LAw&se",
            images: "/images/RelatedProducts-1.png",
            alt: "Sony WH-XB910N",
            name: "Sony WH-XB910N",
            heading: "Give Your Favourite Music A Boost.",
            price: "₹13,489",
            oldPrice: "₹19,990",
        },

    ];

    const productes = [
        {
            image: "/images/RelatedProducts-1.png",
            name: "JBL Live 660NC",
            description: "Wireless Over-Ear NC Headphones",
            price: "₹9,999",
            originalPrice: "₹14,999",
            stars: 5,
        },
        {
            image: "/images/TopProducts-02.png",
            name: "boAt Rockerz 518",
            description: "On-Ear Wireless Headphones",
            price: "₹1,299",
            originalPrice: "₹3,990",
            stars: 5,
        },
        {
            image: "/images/TopProducts-3.png",
            name: "boAt Airdopes 131",
            description: "Wireless in-Ear Earbuds",
            price: "₹1,099",
            originalPrice: "₹2,990",
            stars: 5,
        },
        {
            image: "/images/TopProducts-4.png",
            name: "BoAt BassHeads 110",
            description: "In-Ear Wired Earphones",
            price: "₹499",
            originalPrice: "₹999",
            stars: 4,
        },
        {
            image: "/images/TopProducts-5.png",
            name: "boAt Rockerz 410",
            description: "Bluetooth & Wired On-Ear Headphones",
            price: "₹1,599",
            originalPrice: "₹2,990",
            stars: 5,
        },
        {
            image: "/images/TopProducts-6.png",
            name: "JBL Live 200BT",
            description: "In-Ear Wireless Neckbands",
            price: "₹3,699",
            originalPrice: "₹5,299",
            stars: 4,
        },
        {
            image: "/images/TopProducts-7.png",
            name: "Sony WH-XB910N",
            description: "Wireless Over-Ear Headphones",
            price: "₹13,489",
            originalPrice: "₹19,990",
            stars: 4,
        },
        {
            image: "/images/TopProducts-8.png",
            name: "JBS Tune 760NC",
            description: "Wireless Over-Ear NC Headphones",
            price: "₹5,999",
            originalPrice: "₹7,999",
            stars: 4,
        },
        {
            image: "/images/TopProducts-9.png",
            name: "boAt Rockerz 255",
            description: "In-Ear Wireless Neckbands",
            price: "₹899",
            originalPrice: "₹2,999",
            stars: 5,
        },
        {
            image: "/images/TopProducts-10.png",
            name: "JBL Wave 100",
            description: "In-Ear Truly Wireless Earbuds",
            price: "₹2,999",
            originalPrice: "₹6,999",
            stars: 4,
        },
        {
            image: "/images/TopProducts-11.png",
            name: "Sony WF-1000XM4",
            description: "Wireless in-Ear NC Headphones",
            price: "₹19,990",
            originalPrice: "₹24,990",
            stars: 3,
        }
    ];


    const categories = ["All", "Headphones", "Earbuds", "Earphones", "Neckbands"];

  const filterProducts = (category) => {
    if (category === "All") {
      return productes;
    }
    return productes.filter((product) =>
      product.description.toLowerCase().includes(category.toLowerCase())
    );
  };

  const filteredProducts = filterProducts(selectedCategory);






    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextButton = document.querySelector(".carousel-control-next");
            nextButton.click();
        }, 500000); // Move every 1 second

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);





















    return (
        <div style={styles.homepageBg} className="text text-white">
            <nav className="navbar navbar-expand-lg navbar-light color-light">
                <div className="container-fluid">
                    {/* Navbar Brand */}
                    <a className="navbar-brand text-white" href="#">
                        Tech Shop
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarIcons"
                        aria-controls="navbarIcons"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarIcons">
                        {/* Icons */}
                        <div className="d-flex ms-auto">
                            <i
                                className="fa-solid fa-magnifying-glass me-3 p-2"
                                title="Search"
                            ></i>
                            <i
                                className="fa-solid fa-cart-shopping me-3 p-2"
                                title="Cart"
                            ></i>
                            {/* User Icon */}
                            <i
                                className="fa-solid fa-user p-2"
                                title="User"
                                style={{ cursor: "pointer" }}
                                onClick={toggleLoginForm} // Toggle the form on click
                            ></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Form - Visible based on `showLoginForm` */}
            {showLoginForm && (
                <div className="Loginform text bg-dark text-white" style={styles.loginForm}>
                    <h3>Hello!</h3>
                    <p>Access account and manage orders</p>
                    <a href="./Form.html" className="form-btn">
                        <button className="loginSignup" style={styles.button}>
                            <Link to="/login">
                                <span style={{ color: "white" }}>Login/Signup</span>
                            </Link>
                        </button>
                    </a>
                    <br />
                    <hr />
                    <p>Please login</p>
                </div>
            )}







            <div
                id="carouselExampleIndicators"
                className="carousel slide bg-black"
                data-bs-ride="carousel"
                data-bs-interval="1000" // Set interval to 1 second (1000 milliseconds)
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : ""}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Carousel Inner carousel-indicators slide */}
                <div className="carousel-inner" >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="Productdetails-02 d-flex align-items-center justify-content-center">
                                {/* Product Details Section */}
                                <section className="Productdetails-01">
                                    <div className="Productsdetails-3">
                                        <h6>{product.name}</h6>
                                        <h2 className="w-100">{product.heading}</h2>
                                        <h5>{product.price} <del>{product.oldPrice}</del></h5>
                                        <button className="ShopNow">Shop Now</button>
                                    </div>
                                </section>

                                {/* Product Image Section */}
                                <section className="Productdetails-01">
                                    <div className="Productdetails-4">
                                        <img className="details" style={{ width: "300px", height: "300px" }} src={product.images} alt={product.alt} />
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    style={{ width: "10px", height: "10x" }}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next "

                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




    <section>
      <h2 className="TopProducts">Top Products</h2>
      <div id="Producttitle">
        {categories.map((category) => (
          <section
            key={category}
            className={`Producttitle ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            style={{ cursor: "pointer" }}
          >
            {category}
          </section>
        ))}
      </div>
      <div id="TP">
        {filteredProducts.map((product, index) => (
          <section className="star" key={index}>
            <div className="Productborder">
              <img
                className="Productimage"
                src={product.image}
                alt={product.name}
              />
              <h4 className="Starsymble">
                {[...Array(product.stars)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </h4>
              <h3 className="Productborder-12">{product.name}</h3>
              <p className="Productborder-12">{product.description}</p>
              <hr />
              <h5 className="Productborder-12">
                {product.price} <del>{product.originalPrice}</del>
              </h5>
              <button className="addtocard">Add to Card</button>
            </div>
          </section>
        ))}
        <section className="star">
          <div className="Productborder-123">
            <h3>Browse All </h3>
            <h3>
              Products <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </h3>
          </div>
        </section>
      </div>
    </section>













            <footer>
                <div className="footer-shap">
                    <h2>Tech-Shop</h2>
                    <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
                    <input type="email" placeholder="Email Address*" /> <br /><br />
                    <button>Subscribe</button>
                </div>
                <div className="footer-shap-1">
                    <h3 id="footer-shap">Help</h3>
                    <ul>
                        <li>FAQs</li>
                        <li>Track Order</li>
                        <li>Cancel Order</li>
                        <li>Return Order</li>
                        <li>Warranty Info</li>
                    </ul>
                </div>
                <div className="footer-shap-2">
                    <h3 id="footer-shap">Policies</h3>
                    <ul>
                        <li>Return Policy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer-shap-3">
                    <h3 id="footer-shap">Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Service Center</li>
                        <li>Careers</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
            </footer>
            <section className="fo">
                <div className="footerbottom">
                    <div className="foortbottom-1">
                        <p>2024 | All Rights Reserved. Built by |</p>
                        <p>RANGAPPA GARI SASIDHAR</p>
                    </div>
                    <div className="foortbottom-2">
                        <i className="fa-brands fa-facebook-f iconfooter"></i>
                        <i className="fa-brands fa-twitter iconfooter" ></i>
                        <i className="fa-brands fa-instagram iconfooter"></i>
                        <i className="fa-brands fa-linkedin-in iconfooter"></i>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Inline styles for simplicity (can be replaced with CSS)
const styles = {
    homepageBg: {
        backgroundColor: "black", // Black background for the entire page
        color: " #b0c4de",
        minHeight: "100vh", // Ensures the black background covers the entire viewport
        margin: 0,
        padding: 0,
    },
    loginForm: {
        position: "absolute",
        top: "60px",
        right: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
    },
    button: {
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default HomePage;
