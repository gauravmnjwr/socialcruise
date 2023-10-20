import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section class="footer_section">
      <div className="container">
        <div>
          © <span id="displayYear">2023</span> All Rights Reserved By &nbsp;
          <a href="https://storecode.in/">StoreCode</a>
        </div>
        <div>
          <a class="nav-link" href="policy.php">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
