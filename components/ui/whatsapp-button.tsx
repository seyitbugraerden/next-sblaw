import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappButton = () => {
  return (
    <Link
      href="http://wa.me/+905531408302"
      target="_blank"
      aria-label="Whatsapp İletişim"
      className="fixed right-6 bottom-6 z-[9999999]  hover:brightness-90 transition duration-200"
    >
      {/* <FaPhoneAlt  size={24} /> */}
      <Image src="/wp.webp" alt="Whatsapp Icon" width={60} height={60} />
    </Link>
  );
};

export default WhatsappButton;
