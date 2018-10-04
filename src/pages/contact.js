import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <div>
      <p>Looking forword to answering your message.</p>
      <p>Email: akshayboddhul45@gmail.com</p>
    </div>
    <form action="post" netlify>
      <p>
        <input
          style={{ width: '50%' }}
          type="text"
          name="name"
          id="name"
          placeholder="type ur name"
          required
        />
      </p>
      <p>
        <input
          style={{ width: '50%' }}
          type="email"
          name="email"
          id="email"
          placeholder="type ur email"
          required
        />
      </p>
      <p>
        <textarea
          style={{ width: '50%' }}
          name="message"
          id="message"
          cols="24"
          rows="5"
          placeholder="type ur message"
          required
        />
      </p>
      <p>
        <div data-netlify-recaptcha />
      </p>
      <button type="submit">Send</button>
    </form>
    <div>
      <p>
        <a
          href="https://twitter.com/akshay_boddhul"
          style={{ paddingRight: 10 }}
        >
          Twitter
        </a>

        <a
          href="https://www.instagram.com/a_boddhul/"
          style={{ paddingRight: 10 }}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/akshayboddhul"
          style={{ paddingRight: 10 }}
        >
          Facebook
        </a>
        <a href="https://in.linkedin.com/" style={{ paddingRight: 10 }}>
          Linkdin
        </a>
        <a
          href="https://www.youtube.com/channel/UCgOjhhOFKxY7Wxf7hGwdD2w"
          style={{ paddingRight: 10 }}
        >
          YouTube
        </a>
        <a href="https://github.com/akshayboddhul" style={{ paddingRight: 10 }}>
          GitHub
        </a>
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </Layout>
)

export default ContactPage
