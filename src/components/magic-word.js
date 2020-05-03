import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Magicword = () =>  {
  const colours = ['yellow', 'red', 'blue', 'green', 'orange', 'indigo', 'violet', 'pink', 'purple', 'aqua', 'lime', 'lemon'];
  return (
    <>
    {colours.map(colour =>
      /* lemon isn't a css background colour so set in layout.css */
      <div className="col" id={colour} style={{backgroundColor: `${colour}`,}}>
          <Link to={colour}>
	      <div className="col-container">
		  <h2>
		      {colour}
		  </h2>
	      </div>
          </Link>
      </div>
    )}
    </>
  )
}
export default Magicword
