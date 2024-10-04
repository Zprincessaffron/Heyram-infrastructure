import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaHotel, FaSpa, FaCalendarAlt, FaUtensils, FaChalkboardTeacher, FaBuilding } from "react-icons/fa"; // Import relevant icons

const BookingWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "Booking & Reservation Websites",
    introduction: `A Booking & Reservation Website simplifies the customer journey by allowing users to schedule appointments or reserve services online. These websites are ideal for businesses that depend on client bookings, such as hotels, spas, or healthcare providers.`,
    
    offerItems: [
      "Real-time booking systems that show available time slots or services.",
      "Automated email and SMS reminders for upcoming appointments.",
      "Payment integration for deposits or full-service payments at the time of booking.",
      "Calendar synchronization to ensure no overlap or overbooking.",
      "User accounts where clients can manage, reschedule, or cancel bookings.",
      "Multi-location support for businesses with branches or franchises.",
    ],
    industriesItems: [
      { name: "Travel & Hospitality", icon: FaHotel }, // Hotels, vacation rentals, tours
      { name: "Health & Wellness", icon: FaSpa }, // Spas, clinics, fitness centers
      { name: "Event Venues", icon: FaCalendarAlt }, // Wedding venues, conference centers
      { name: "Restaurants", icon: FaUtensils }, // Dining reservations, private events
      { name: "Educational Services", icon: FaChalkboardTeacher }, // Tutoring, workshops, training sessions
      { name: "Real Estate", icon: FaBuilding }, // Property viewing appointments, open house registrations
    ],

    ctaText: "Let us help streamline your booking process today!",
    buttonText: "Get Started with Booking",
    tagline: "A booking website is a must for businesses that want to streamline operations and offer customers a seamless way to schedule services.",
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
    />
  );
};

export default BookingWebsite;
