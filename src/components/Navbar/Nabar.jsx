import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">    Farkhunda</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>

      <button className="talk-btn">Let's Talk</button>
    </nav>
  );
}