import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <Link
      href="#"
      target="_blank"
      aria-label="Whatsapp İletişim"
      className="fixed right-6 bottom-6 bg-red-900 rounded-xl p-3 z-[9999999] text-white hover:!text-white shadow-md shadow-black/30 hover:brightness-90 transition duration-200"
    >
      <FaPhoneAlt  size={24} />
    </Link>
  );
};

export default WhatsappButton;
