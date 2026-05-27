const MapSection = () => {
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden border mt-6">
      <iframe
        src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

export default MapSection;