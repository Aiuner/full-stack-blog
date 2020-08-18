import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div className='post-card'>
      <Link className='post' to={`/posts/${props._id}`}>
        <h2>{props.title}</h2>
        <img className='post-image' src={props.imgURL} alt={props.title}></img>
        <div className='content'>
          <p>{props.content}</p>
        </div>
      </Link>
    </div>
    // <h1>Another heading </h1>
  )
}

export default Post 


// {
//   title: "Home Loan Account",
//   imgURL: "http://lorempixel.com/640/480/animals",
//   content:
//     "Wolf raw denim mustache, forage bespoke sriracha adipisicing marfa portland dolore food truck. Taxidermy hashtag ullamco ut single-origin coffee, magna tbh selvage id PBR&B excepteur tempor. Drinking vinegar gochujang labore mixtape put a bird on it man bun semiotics. Squid eiusmod commodo elit man bun cillum in before they sold out tousled. Tote bag selvage pop-up hot chicken cornhole kale chips farm-to-table four dollar toast la croix dolore bespoke. Echo park semiotics umami, whatever kombucha anim tousled brunch crucifix man braid.",
//   author: "Diamond Bergnaum",
// }