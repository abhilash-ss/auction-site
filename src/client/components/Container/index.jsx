import React from "react"
import Sidebar from "../Sidebar"
import Card from "../Card"
import "./container.scss"

const Container = () => {
  const cardItems = [
    { id: "1", buttons: [{ label: "View Auction", uiType: "secondary" },
    { label: "Watch", uiType: "light" }] },
    { id: "2", buttons: [{ label: "View Auction", uiType: "secondary" },
    { label: "Watch", uiType: "light" }] },
    { id: "3", buttons: [{ label: "Sold", uiType: "tertiary" }] },
  ]
  return (
    <div className="container">
      <div className="container__side-bar">
        <Sidebar />
      </div>
      <div className="container__main">
        <div className="container__panel">
          <div className="container__panel-item">
            <div className="container__tag-active">Everything</div>
            <div className="container__tag">Live Auction</div>
            <div className="container__tag">Eligible for auction</div>
            <div className="container__tag">Buy now only</div>
          </div>
          <div className="container__panel-item">
            <label className="container__label">Sort By: </label>
            <select className="container__select">
              <option>Lowest price</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="container__card-wrapper">
          {cardItems.map(card => (
            <Card
            buttons = {card.buttons}
            />
          ))}
        </div>
        <button type="button" className="container__button" onClick={() => {}}>
          Load more
        </button>
      </div>
    </div>
  )
}

export default Container
