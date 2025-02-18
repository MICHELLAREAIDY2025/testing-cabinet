//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import danceImg from "../assets/images/6.Dance your soul away.png";
import libaninsp from "../assets/images/1.Liban Inspire.png"
import smile from "../assets/images/2.Smile & Smile.png"
import coffee from "../assets/images/3.Coffee, poetry and hope for peace.png"
import glory from "../assets/images/4.Glory from the Past.png"
import mindful from "../assets/images/5.Mindful.png"
import "./HomePage.css";

const Home = () => {
  const [filter, setFilter] = useState("past");
  //for backend 
  const [events, setEvents] = useState([]);

  const pastEvents = [
    {
      image: libaninsp,
      title: "Liban Inspire - Exhibition",
      startingDate: "22nd March 2023",
      endingDate: "30th July 2024",
      featuredArtists: "Joséphine Bichareil & Yara El Habre",
      place: "Espace de santé 15, 75015 Paris",
    },
    {
      image: smile,
      title: "Smile & Smile - Exhibition",
      startingDate: "28th May 2024",
      endingDate: "29th September 2024",
      featuredArtists: "Aya Nehme",
      place: "Fares Dental Clinic, Beirut",
    },
    {
      image:coffee,
      title: "Coffee, Poetry and Hope for Peace - Poetry Nights",
      startingDate: "25th October 2024",
      endingDate: "27th October 2024",
      featuredArtists: "Collective",
      place: "Nation Station Medical Center, Beirut",
    },
    
  ];

  const currentEvents = [
    {
      image:glory,
      title: "Glory from the Past - Exhibition",
      startingDate: "6th January 2025",
      endingDate: "25th April 2025",
      featuredArtists: "Giulia Serena",
      place: "14 rue de la Paix, 75012 Paris"
    },
  ];
  const upcomingEvents = [
    {
      image:mindful, 
      title: "Mindful - Painted Concert",
      startingDate: "7th March 2025",
      endingDate: "4th July 2025",
      featuredArtists: "Léa Dubois",
      place: "Hôpital Necker, 75007 Paris"
    },
    
    {
      image: danceImg, 
      title: "Dance your Soul Away - Workshop",
      startingDate: "9th May 2025",
      endingDate: "9th May 2025",
      featuredArtists: "Yousra Feghali",
      place: "American University of Beirut Medical Center, Beirut"
    },
  
  ];
    // Fetch data from the backend
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/homepage");
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
  const handleBookNowClick = () => {
    // Redirect to the Contact Us page
    window.location.href = "/contact"; // Change this URL to where your Contact Us page is located
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="image">
              <img src={glory} alt="Glory from the Past" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image">
              <img src={danceImg} alt="Dance Your Soul Away" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Events Section */}
      <div className="title">
        <p>Our Events</p>
      </div>

      <div className="filter-tabs">
  <div
    onClick={() => setFilter("past")}
    className={filter === "past" ? "active" : ""}
  >
    Past Events
  </div>
  <div
    onClick={() => setFilter("current")}
    className={filter === "current" ? "active" : ""}
  >
    Current Events
  </div>
  <div
    onClick={() => setFilter("upcoming")}
    className={filter === "upcoming" ? "active" : ""}
  >
    Upcoming Events
  </div>
</div>

      {/* Display Events Based on Selected Filter */}
      <div className="events-list">
        {filter === "past" &&
          pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h2>{event.title}</h2>
                <p>
                  {event.startingDate} - {event.endingDate}
                </p>
                <p>Featured Artists: {event.featuredArtists}</p>
                <p>Place: {event.place}</p>
              </div>
              <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          ))}

        {filter === "current" &&
          currentEvents.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h2>{event.title}</h2>
                <p>
                  {event.startingDate} - {event.endingDate}
                </p>
                <p>Featured Artists: {event.featuredArtists}</p>
                <p>Place: {event.place}</p>
              </div>
              <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          ))}

        {filter === "upcoming" &&
          upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
               <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h2>{event.title}</h2>
                <p>
                  {event.startingDate} - {event.endingDate}
                </p>
                <p>Featured Artists: {event.featuredArtists}</p>
                <p>Place: {event.place}</p>
              </div>
              <button className="book-now-button" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

