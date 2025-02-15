// Maak een container voor het nieuwe element
const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "20px";
container.style.right = "20px";
container.style.backgroundColor = "#f9f9f9";
container.style.padding = "10px";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
container.style.zIndex = "9999"; // Zodat het boven andere elementen komt

// Voeg het H1-element toe
const heading = document.createElement("h1");
heading.textContent = "Website gratis aanvragen";
heading.style.fontSize = "18px";
heading.style.margin = "0";
heading.style.color = "#333";
container.appendChild(heading);

// Voeg de link toe
const link = document.createElement("a");
link.href = "mailto:kianbruinings11@gmail.com?subject=website aanvragen";
link.textContent = "Stuur een e-mail";
link.style.display = "block";
link.style.marginTop = "5px";
link.style.color = "#007bff";
link.style.textDecoration = "none";
container.appendChild(link);

// Voeg alles toe aan het document
document.body.appendChild(container);
