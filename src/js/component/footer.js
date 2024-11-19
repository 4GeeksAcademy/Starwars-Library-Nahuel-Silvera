import React, { useState, useEffect } from "react";

export const Footer = () => {
  const starWarsQuotes = [
    "Yo soy tu padawan, y tú mi maestro de código.",
    "Que el commit sea siempre con vos.",
    "Este es el JavaScript que estás buscando.",
    "Haciendo código como un Jedi, sin miedo al Dark Side.",
    "La Fuerza del código nos conecta a todos.",
    "Tienes mucho potencial, joven padawan, pero primero, aprende a hacer deploy.",
    "Que tus pruebas unitarias pasen como un X-Wing.",
    "Hazlo o no lo hagas, pero no lo intentes... en producción.",
    "Solo un Sith teme al código sin comentarios.",
	"Que la profe Cecilia no rechace el proyecto, ¡que la Fuerza del código esté con nosotros!"
  ];

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * starWarsQuotes.length);
    setRandomQuote(starWarsQuotes[randomIndex]);
  }, []);

  return (
    <footer className="footer fixed-bottom mt-auto pt-4 pb-1 text-center">
      <p>{randomQuote}</p>
    </footer>
  );
};
