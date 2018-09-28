import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <div>
      <p>Looking forword to answering your message.</p>
    </div>
    <div>
      <p>Email: akshayboddhul45@gmail.com</p>
      <p>
        <Link to="#" target="_blank" style={{ paddingRight: '20px' }}>
          Twitter
        </Link>
        <Link to="#" target="_blank" style={{ paddingRight: '20px' }}>
          Gmail
        </Link>
        <Link to="#" target="_blank" style={{ paddingRight: '20px' }}>
          Instagram
        </Link>
        <Link to="#" target="_blank" style={{ paddingRight: '20px' }}>
          Linkedin
        </Link>
        <Link to="#" target="_blank">
          WhatsApp
        </Link>
      </p>
    </div>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Type your email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Type your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          className="form-control-msg"
          placeholder="Type your message..."
        />
      </div>
      <button className="btn btn-submit">Send</button>
    </form>
  </Layout>
)

export default ContactPage
