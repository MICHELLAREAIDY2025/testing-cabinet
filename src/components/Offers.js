// src/components/OfferPage.js
import React, { useState } from "react";
//import Navbar from "./Navbar";
import "./Offers.css";
import offerImage from "../assets/images/6.Dance your soul away.png";

const OfferPage = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      title: "Discovery",
      price: "3000 € VAT INCLUDED",
      description: `1 exhibition of an artist suggested by our cultural mediator (3 choices) for a period of 5 months.
      1 vernissage exhibition in the presence of the artist, your guests, and the Cabinet d'Artiste network.
      1 mediation: 1 guided tour by the artist and/or our cultural mediator.
      + 1 tailor-made workshop (painting, projection, writing, dance, discussion) based on the theme of the exhibition.
      Signage: design and printing of exhibition signage (posters, explanatory labels, presentation leaflet).
      Promotion: design of communication media (posts, stories, videos) and promotion of the exhibition on our social networks (@cabinetdartiste).`,
      colorClass: "discovery",
    },
    {
      title: "Harmony",
      price: "4700 € VAT INCLUDED",
      description: `2 exhibitions of an artist suggested by our cultural mediator (3 choices), each lasting 4 months.
      2 vernissages exhibitions in the presence of the artist, your guests, and the Cabinet d'Artiste network.
      1 mediation: 1 guided tour by the artist and/or our cultural mediator for one of the two exhibitions.
      + 1 tailor-made workshop (painting, projection, writing, dance, discussion) based on the theme of the chosen exhibition.
      Signage: design and printing of signage for both exhibitions (posters, explanatory labels, presentation leaflet).
      Promotion: design of communication media (posts, stories, videos) and promotion of one of the exhibitions on our social networks (@cabinetdartiste).
      Attractive price for a work: 5% discount if you purchase one of the works in the exhibitions.`,
      colorClass: "harmony",
    },
    {
      title: "Creation",
      price: "5500 € VAT INCLUDED",
      description: `2 exhibitions of an artist suggested by our cultural mediator (3 choices), each lasting 4 months.
      2 vernissages: exhibitions in the presence of the artist, your guests, and the Cabinet d'Artiste network.
      2 mediations: 1 guided tour by the artist and/or our cultural mediator for each exhibition.
      + 1 tailor-made workshop (painting, projection, writing, dance, discussion) based on the theme of each exhibition.
      Signage: design and printing of signage for all exhibitions (posters, explanatory labels, presentation leaflet).
      Promotion: design of communication media (posts, stories, videos) and promotion on our social networks (@cabinetdartiste) for the two exhibitions.
      Attractive price for one work: 8% discount if you buy one of the works in the exhibitions.`,
      colorClass: "creation",
    },
  ];

  return (
    <div>
      <div className="offer-hero">
        <img src={offerImage} alt="Dance Your Soul Away" className="offer-image" />
        <div className="offer-text">
        </div>
      </div>

      <div className="offer-container">
        {offers.map((offer, index) => (
          <div key={index} className={`offer-box ${offer.colorClass}`}>
            <h2>{offer.title}</h2>
            <p>{offer.price}</p>
            <button className="details-btn" onClick={() => setSelectedOffer(offer)}>
              More Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedOffer && (
        <div className="modal-overlay" onClick={() => setSelectedOffer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedOffer.title}</h2>
            <p>{selectedOffer.price}</p>
            <p>{selectedOffer.description}</p>
            <button className="close-btn" onClick={() => setSelectedOffer(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferPage;
