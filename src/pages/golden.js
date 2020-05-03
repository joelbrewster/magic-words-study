import React from "react"
import Layout from "../components/layout"

const IndexPage = () =>  {
  const words = [
    'a',
    'and',
    'be',
    'I',
    'in',
    'is',
    'it',
    'of',
    'that',
    'the',
    'to',
    'was'
  ];
  return (
    <>
	{words.map(word =>
	  <div className="slide" id={word}>
	      <div className="col">
		  <div className="col-container">
		      <h2>
			  {word}
		      </h2>
		  </div>
		  
	      </div>
	  </div>
	)}
    </>
  )
}

export default IndexPage
