import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Info() {
  return (
    <div className="card">
      <img className="card-img" src="images/me.jpg" alt="John" />

      <div className="info-content">
        <h1>Stefan Andrei</h1>
        <p className="title">Frontend Developer</p>
        <a className="card-git" href="https://github.com/stefanpython">
          stefanpython.github
        </a>

        <button className="email-btn">
          <img src="images/email.png" alt="Email" />
          Email
        </button>
      </div>
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
