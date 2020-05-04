import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Magicwordgroup = () =>  {
  const colours = ['golden', 'red', 'blue', 'green', 'orange', 'indigo', 'violet', 'pink', 'purple', 'aqua', 'lime', 'lemon'];
  return (
    <>
    {colours.map(colour =>
      /* lemon isn't a css background colour so set in layout.css */
      <div className="col" id={colour}>
          <Link to={colour}>
	      <div className="col-container">
		  <p>
		      {colour}
		  </p>
	      </div>
          </Link>
      </div>
    )}
    </>
  )
}
export default Magicwordgroup
