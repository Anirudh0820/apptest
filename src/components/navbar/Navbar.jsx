import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
         
    <span>INR </span>
    {/* <button className="btn">Photo</button>
    <button className="btn">?</button> */}
    <span>List Your Property </span>
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar