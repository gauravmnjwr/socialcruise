import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <NavbarComponent />
      <div className="contact-main">
        <div className="contact-container">
          <div>
            <h2>Contact Us</h2>
            <p>
              We're thrilled that you want to connect with us.At Storecode, your
              thoughts, questions, and feedback are the driving force behind our
              commitment to excellence. We're here to listen, assist, and engage
              with you. Choose your preferred way to reach out:
            </p>
          </div>
          <div>
            <h2>Contact Form</h2>
            <p>
              Got a specific question or request? Fill out the form below, and
              we'll get back to you in no time. Your message is important to us,
              and we're dedicated to providing the answers and solutions you
              need.[Contact Form]
            </p>
          </div>
          <div>
            <h2>Email</h2>
            <p>
              <div>
                <b> Prefer to send us an email?</b> Feel free to reach out to
                our dedicated support team at support@storecode.in. We're always
                ready to assist you, whether it's a technical issue or simply a
                friendly chat.
              </div>{" "}
              <div>
                <b>For Influencers:</b> If you're an influencer looking to join
                our community or have questions related to your account, please
                contact our dedicated Influencer Support Team at
                influencers@storecode.in.
              </div>{" "}
              <div>
                <b>For Brand Collaborations:</b> For business-related inquiries,
                brand collaborations, or partnership opportunities, please
                contact our Collaboration Team at business@storecode.in. We're
                always open to exploring new opportunities and ideas.
              </div>
            </p>
          </div>
          <div>
            <h2>Social Media</h2>
            <p>
              Connect with us on social media to stay updated on the latest
              Storecode news, product highlights, and community stories.
            </p>
          </div>
          <div>
            <h2>Visit Us</h2>
            <div>
              <div>
                If you're in the neighborhood, why not drop by our headquarters?
                We'd love to meet you in person. Here's our address:
              </div>
              <div className="justify-left">
                <div>Storecode Headquarters</div>
                <div>Kharadi</div>
                <div>Pune, India</div>
              </div>
              <div className="justify-left">
                <h5>Working Hours:</h5>
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
              <div>
                <h5>Let's Connect, Collaborate, and Create Magic Together!</h5>
                <p>
                  Thank you for choosing Storecode. We value your trust and look
                  forward to hearing from you. Your feedback fuels our
                  innovation, and your questions drive us to provide the best
                  experiences. Join us on this exciting journey, and let's make
                  every interaction with Storecode exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
