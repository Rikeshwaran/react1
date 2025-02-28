import { Button } from 'bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Component1 from './Components/Component1';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div className="App">
      <div id="headerimage">
        <img src="logo192.png" alt="Company Logo" />
      </div>
      <div>
        <Component1 ></Component1>
      </div>
      <div className="hero " >
        <div>        
          <header>
          <nav className="navbar navbar-expand-lg">
            <div id="headersection" className="container-fluid">
              <ul className="navbar-nav ms-3 me-3 pb-2" id="list">
                <li className="nav-item">
                  <a className="nav-link text-white glow-btn ps-3 pe-3" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white glow-btn ps-3 pe-3" href="#">Digital Marketing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white glow-btn ps-3 pe-3" href="#">Website & App Development</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white glow-btn ps-3 pe-3" href="#">Courses & Internship</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white glow-btn ps-3 pe-3" href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
       </div>
      </div>
      <div><p id="Welcomemsg">Welcome</p></div>
     <br /><br /><br /><br /><br /><br /><br /><br /><br />








      <div>
        <section id="contact" className="m-5 text-white">
          <h2 className="d-flex justify-content-center "><br /> Contact Us</h2>
          <p className="d-flex justify-content-center">
            <br />Feel free to reach out to us for any inquiries. Our team will get back to you as soon as possible.
          </p>

          <br />
          <div className="contact-info ms-3 text-white">
            <p><strong>Email:</strong> example@gmail.com</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Address:</strong> 1234 St., City, Country</p>
          </div>

          <div className="social-media ">
            <h3 className="d-flex justify-content-center">Follow us on social media:</h3>
            <ul id="contactlist" className="d-flex justify-content-center mt-5 p-5">
              <li><a className="nav-link text-white glow-btn ps-5 pe-5" href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a className="nav-link text-white glow-btn ps-5 pe-5" href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a className="nav-link text-white glow-btn ps-5 pe-5" href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </section>
        </div>
      </div>
    
  );
}

export default App;
