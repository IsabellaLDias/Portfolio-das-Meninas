function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>

      <div className="language">
         <span>PT</span> | <span>EN</span>
      </div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar