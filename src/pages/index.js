import React from 'react'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Hi People,</h1>
      <div style={{ lineHeight: '32pt', fontSize: '22px' }}>
        <p>
          I am self-taught <b>MERN Stack</b> developer able to build a Web
          presence application as well as build a backend for mobile application
          from the ground up - from concept, methodology and programming.
        </p>

        <p>
          Skilled at writing well-designed frontend with most popular JavaScript
          library <strong>React </strong>
          efficient code using current best practices in Web development.
        </p>
        <p>
          Fast learner, hard worker, self-motivated and team player who is
          proficient in MongoDB, Express, React and NodeJS.
        </p>
      </div>

      <button className="btn-download">Download CV</button>
    </div>
  </Layout>
)

export default IndexPage
