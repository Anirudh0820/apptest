import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
       {/* <p>INR</p>
       <p>List Your Property</p> */}
          <button className="navButton">Register</button>
          <button className="navButton">Signin</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar