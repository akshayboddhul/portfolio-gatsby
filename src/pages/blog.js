import React from 'react'

import Layout from '../components/layout'
import { Link } from 'gatsby'

const BlogPage = () => (
  <Layout>
    <h1>My Blog's</h1>
    <div>
      <p>
        <h2>WebAssembly: A Foundation for a Higher Performance Web</h2>
        <h4>Check out this episode of Software Engineering Daily: </h4>
        <Link to="/https://softwareengineeringdaily.com/2018/10/01/webassembly-a-foundation-for-a-higher-performance-web/">
          Click here to read more
        </Link>
      </p>
      <small>Created by AB 10/04/2018 16:10</small>
      <hr />
      <p>
        <h2>Best Entrepreneur Books 2018</h2>
        <ol>
          <li>Bad Blood by John Carreyrou</li>
          <li>Start with Why by Simon Sinek</li>
          <li>The E-Myth Revisited by Michael E. Gerber</li>
          <li>The Lean Startup by Eric Ries</li>
          <li>
            The Four – The Hidden DNA of Amazon, Apple, Facebook and Google by
            Scott Galloway
          </li>
          <li>The $100 Startup by Chris Guillebeau</li>
          <li>Rework by Jason Fried, David Heinemeier Hansson</li>
        </ol>
      </p>
      <small>Created by AB 10/04/2018 16:12</small>
      <hr />
      <br />
    </div>
  </Layout>
)

export default BlogPage
