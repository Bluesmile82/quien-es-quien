import React, { useState } from "react"
import cx from 'classnames';
import guesswho from "../images/guesswho.jpg"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Card = ({ flipped, handleOnClick }) => (
  <div className={cx("card", { flipped })} onClick={handleOnClick} />
)

const IndexPage = () => {
  const [flipped, setFlipped] = useState({});
  return (
    <Layout>
      <SEO title="Home" />
      <div className="board">
        <img className="boardImage" src={guesswho} />
        <div className="cards">
          {[...Array(3).keys()].map(i => (
            <div className="row" key={i}>
              {[...Array(8).keys()].map(n => {
                const key = `${i}${n}`
                const isCardFlipped = flipped[key]
                return (
                  <Card
                    key={key}
                    handleOnClick={() =>
                      setFlipped({
                        ...flipped,
                        [key]: isCardFlipped ? !isCardFlipped : true,
                      })
                    }
                    flipped={isCardFlipped}
                  />
                )
              })}
            </div>
          ))}
        </div>
        <button id="clear" onClick={() => setFlipped({})}>
          Borrar
        </button>
      </div>
    </Layout>
  )
}

export default IndexPage
