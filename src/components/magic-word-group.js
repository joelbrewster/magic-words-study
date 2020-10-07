import { Link } from "gatsby"
import React from "react"

const Magicwordgroup = () => {
  const colours = [
    "golden",
    "red",
    "blue",
    "green",
    "orange",
    "indigo",
    "violet",
    "pink",
    "purple",
    "aqua",
    "lime",
    "lemon",
    "tricky1",
    "tricky2",
    "tricky3",
    "tricky4",
    "tricky5",
    "tricky6",
  ]
  return (
    <div>
      {colours.map((colour, index) => (
        <div className="col" id={colour} key={index}>
          <Link to={colour}>
            <div className="col-container">
              <p>{colour}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Magicwordgroup
