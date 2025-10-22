const cities = {
  Paris: {
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    hotels: "Average hotel price: €150/night",
    spots: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Seine River Cruise"
  },
  Lyon: {
    img: "https://source.unsplash.com/1000x600/?lyon,france",
    hotels: "Average hotel price: €110/night",
    spots: "Old Town (Vieux Lyon), Basilica of Notre-Dame de Fourvière, Rhône River"
  },
  Marseille: {
    img: "https://source.unsplash.com/1000x600/?marseille,france",
    hotels: "Average hotel price: €100/night",
    spots: "Old Port, Calanques National Park, Notre-Dame de la Garde, Prado Beaches"
  },
  Nice: {
    img: "https://source.unsplash.com/1000x600/?nice,france",
    hotels: "Average hotel price: €120/night",
    spots: "Promenade des Anglais, Castle Hill, Nice Old Town, Cours Saleya Market"
  },
  Bordeaux: {
    img: "https://source.unsplash.com/1000x600/?bordeaux,france",
    hotels: "Average hotel price: €130/night",
    spots: "Place de la Bourse, Wine Museum, Garonne Riverfront, Bordeaux Cathedral"
  }
};

// function to update city info
function updateCity(cityName) {
  const city = cities[cityName];
  if (!city) return;
  document.getElementById("cityName").textContent = cityName;
  document.getElementById("hotelPrice").textContent = city.hotels;
  document.getElementById("citySpots").textContent = "Top attractions: " + city.spots;
  document.getElementById("cityImage").src = city.img;
}

// handle nav clicks
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const city = e.target.getAttribute("data-city");
    updateCity(city);
  });
});

// handle search
document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("searchCity").value.trim();
  if (city && cities[city]) updateCity(city);
  else alert("City not found. Try: Paris, Lyon, Marseille, Nice, or Bordeaux.");
});
