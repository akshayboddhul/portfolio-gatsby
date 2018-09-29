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
          Linkedin
        </Link>
        <Link to="#" target="_blank">
          WhatsApp
        </Link>
      </p>
    </div>
  </Layout>
)

export default ContactPage
