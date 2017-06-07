import React, { Component } from 'react'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import PageTitle from '../components/PageTitle'


const content = [
  'I\'m Santa Claus! You\'ll have all the Slurm you can drink when you\'re partying with Slurms McKenzie! And remember, don\'t do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don\'t not do it!',
  'You seem malnourished. Are you suffering from intestinal parasites? Okay, I like a challenge. <strong> Dear God, they\'ll be killed on our doorstep!</strong> <em> And there\'s no trash pickup until January 3rd.</em> And until then, I can never die?'
]

const pageTitle = (
  'As an interesting side note, as a head without a body, I envy the dead'
)

const HomeContent = (
  content.map( (c, index) => 
    <div key={index} className="col-sm-6">
      <p dangerouslySetInnerHTML={ { __html: c } }></p>
    </div>
  )
)

class Home extends Component {
  render() {
    return (
        <Layout title={'A Home Page'}>
          <PageTitle title={pageTitle} />
          <Banner img={'home-bg.jpg'} />
          <br />

          {HomeContent}

        </Layout>

    )
  }
}

export default Home