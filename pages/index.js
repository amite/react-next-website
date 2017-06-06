import React, { Component } from 'react'
import Link from 'next/link'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Bubbler+One" rel="stylesheet" />
          <nav className="navbar navbar-default navbar-custom">
            <div className="container-fluid">

              <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="/">React Next</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <Link className="about-link" href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <a href="post.html">Sample Post</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>

            </div>

          </nav>

          <h1>As an interesting side note, as a head without a body, I envy the dead.</h1>
          <img src="./static/img/home-bg.jpg" className="img-responsive" />
          <br />

          <div className="col-sm-6">
            <p>I'm Santa Claus! You'll have all the Slurm you can drink when you're partying with Slurms McKenzie! And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!</p>
          </div>

          <div className="col-sm-6">
            <p>You seem malnourished. Are you suffering from intestinal parasites? Okay, I like a challenge. <strong> Dear God, they'll be killed on our doorstep!</strong> <em> And there's no trash pickup until January 3rd.</em> And until then, I can never die?</p>
          </div>

          <footer>
            <h2>I'm a thing.</h2>
            <p>Negative, bossy meat creature! Hello Morbo, how's the family? Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? Ah, the 'Breakfast Club' soundtrack! I can't wait til I'm old enough to feel ways about stuff!</p>
            <ol>
              <li>Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo!</li><li>In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.</li><li>I'm sure those windmills will keep them cool.</li>
            </ol>
          </footer>

        </div>
        <style>{`
          h1 { 
            font-family: 'Bubbler One', sans-serif;
            color: #666;
          }
        `}</style>
      </div>

    )
  }
}

export default Home