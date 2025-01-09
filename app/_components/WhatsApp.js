"use client";
import { FaSquareWhatsapp } from "react-icons/fa6";

function WhatsApp() {
  const phoneNumber = "447734040917";
  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  return (
    <FaSquareWhatsapp className="text-6xl" onClick={handleWhatsAppRedirect} />
  );
}

export default WhatsApp;
