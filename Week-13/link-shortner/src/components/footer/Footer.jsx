import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className="logo" style={{cursor:"pointer"}}>Shortly</h1>
      <div className="features" style={{cursor:"pointer"}}>
        <h3>feature</h3>
        <h5>Link shortning</h5>
        <h5>Branded Links</h5>
        <h5>Analytics</h5>
      </div>
      <div className="resources" style={{cursor:"pointer"}}>
        <h3>Resources</h3>
        <h5>Blog</h5>
        <h5>Developers</h5>
        <h5>Support</h5>
      </div>
      <div className="company" style={{cursor:"pointer"}}>
        <h3>Company</h3>
        <h5>About</h5>
        <h5>Our Team</h5>
        <h5>Career</h5>
        <h5>Contact</h5>
      </div>
      <div className="login">
        <h5>Login</h5>
        <h5>Sign Up</h5>
      </div>
    </footer>
  )
}

export default Footer
