import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-24">
      <div className="max-contain flex items-start justify-between">
        <div>Image</div>
        <div>
          <h6 className="font-bold text-md">Hakkımızda</h6>
        </div>
        <div>
          <h6 className="font-bold text-md">Faaliyet Alanlarımız</h6>
        </div>
        <div>
          <h6 className="font-bold text-md">İletişim</h6>
        </div>
      </div>
      <div className="flex justify-start text-white text-xs max-contain">
        Lorem ipsum dolor sit amet.
      </div>
    </footer>
  );
};
