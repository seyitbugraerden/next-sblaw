import React from "react";

export const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d191.2672026196787!2d32.77292843480997!3d39.91285625172595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1747515522531!5m2!1str!2str"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px]"
      ></iframe>
    </div>
  );
};
