import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaPlane, FaSuitcaseRolling, FaMapMarkedAlt, FaHotel, FaBus, FaUserFriends } from "react-icons/fa"; // Import relevant icons
import Tour from "/Tour.png";

const ToursAndTravels = () => {
  // Define the data to pass to the template
  const data = {
    title: "Tours & Travels Websites",
    introduction: `A Tours & Travels Website provides a comprehensive platform for travel agencies, tour operators, and vacation planners to showcase their services, itineraries, and travel packages. These websites help customers explore destinations, book tours, and arrange their entire travel experience in one place, creating a seamless journey from browsing to booking.`,
    
    offerItems: [
      "Interactive travel packages showcasing destinations, itineraries, and pricing.",
      "Online booking systems integrated with secure payment gateways for flights, hotels, and tours.",
      "Custom itinerary planners allowing users to build and customize their travel plans.",
      "Destination guides offering detailed information on attractions, weather, and local culture.",
      "Photo galleries and video tours to inspire and excite potential travelers.",
      "Integration with booking platforms like TripAdvisor or Booking.com for seamless reservations.",
      "Travel blogs for tips, guides, and stories from around the world.",
      "User reviews and testimonials to build trust and provide social proof.",
    ],
    industriesItems: [
      { name: "Travel Agencies", icon: FaPlane },
      { name: "Tour Operators", icon: FaSuitcaseRolling }, // Adventure tours, eco-tourism, cultural tours
      { name: "Vacation Rental Services", icon: FaMapMarkedAlt }, // Holiday homes, villas, resorts
      { name: "Cruise Lines", icon: FaHotel },
      { name: "Airlines & Transportation Services", icon: FaBus },
      { name: "Destination Management Companies", icon: FaUserFriends }, // DMCs
    ],
    image: Tour,
    ctaText: "Plan your next adventure with our comprehensive travel solutions!",
    buttonText: "Explore Now",
    tagline: "A well-structured Tours & Travels website offers a user-friendly and visually captivating way for customers to plan and book their dream vacations. Whether it’s a solo adventure, family trip, or a luxury vacation, the website helps to simplify the booking process while delivering a compelling travel experience.",
  };

  return (
    <ServiceTemplate2
      title={data.title}
      introduction={data.introduction}
      offerItems={data.offerItems}
      industriesItems={data.industriesItems}
      ctaText={data.ctaText}
      buttonText={data.buttonText}
      tagline={data.tagline}
      image={data.image}
    />
  );
};

export default ToursAndTravels;
