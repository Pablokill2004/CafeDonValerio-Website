import React from "react";

function ContactoWhatsApp() {
  const numero = "50212345678"; // Cambia por tu número
  const mensaje = "Hola, me gustaría más información."; // Mensaje opcional

  return (
    <a
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      Contactar por WhatsApp
    </a>
  );
}

export default ContactoWhatsApp;
