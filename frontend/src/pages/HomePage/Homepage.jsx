import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Homepage.css";
import ScrollComponent from "../../components/ScrollComponent/ScrollComponent";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavbarComponent />
      <div className="head-main">
        <div className="shop-coupon">
          <div>
            <h1>Shop with Storecode</h1>
          </div>
          <input type="text" placeholder="Enter Product Code" />
          <button>SEARCH</button>
        </div>
      </div>
      <div className="image-div">
        <ScrollComponent />
        <div className="hp-section2 hp-section-two">
          <div>
            <div>
              <h1>Storecode for Influencers</h1>
            </div>
            <div>
              💰 Earn from every purchase made through your unique codes
            </div>
            <div>
              🛍 A personal store on our platform powered by your influence
            </div>
            <div>
              🤫 Keep your recommended sites a secret under your unique code
            </div>
          </div>
        </div>
        <div className="hp-section3 hp-section2">
          <div>
            <div>
              <h1>🤝 Exclusive Partnership Program 🌟</h1>
            </div>
            <div>
              Storecode is gearing up to collaborate with major shopping brands.
              As an Influencer on our platform, you gain a fantastic advantage –
              your very own personal store on our website. This store is powered
              by your influence and recommendations. 🛒💃🕺
            </div>
            <div>
              Here's the twist: We encourage you not to reveal the exact
              websites from which you purchase the products you promote in your
              new videos henceforth. Instead, keep it a secret 🤫🤭 under the
              code you share. Why? Because disclosing sites directly can create
              unnecessary competition and, in many cases, lead to users buying
              directly from those mentioned sites, bypassing all your hard work.
              🙈💼
            </div>
            <div>
              By sharing your unique code, your followers are directed to the
              product on your recommended site. As we embark on our
              collaboration with major brands, your influencer status will
              transform into a powerful partnership program, offering you the
              opportunity to earn from every purchase made through your unique
              codes. Your influence becomes your earning potential. 💰💡
            </div>
            <div>
              This approach ensures that your hard work as an influencer is
              rewarded, and it aligns perfectly with our mission to create a
              win-win ecosystem for influencers and their followers. Get ready
              to make the most of this exclusive partnership program with
              Storecode! ✨
            </div>
          </div>
        </div>
        <div className="hp-section2 hp-section4">
          <div>
            <div>
              <img src="./assets/join_us.jpg" alt="" className="abs-div" />
              <h1>Join us?</h1>
            </div>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
