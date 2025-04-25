emailjs.init("jx4_5pC5jriDtL0Hx")

const form = document.getElementById("contacto");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("GmailService", "template_vn1thi2", form)
    .then(() => {
      alert("Mensaje enviado con éxito.");
      form.reset();
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar. Intentalo más tarde.");
    });
});
