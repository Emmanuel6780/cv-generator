// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cvForm");
  const preview = document.getElementById("cvPreview");
  const downloadBtn = document.getElementById("downloadBtn");

  // Function to update preview
  form.addEventListener("input", () => {
    const name = document.getElementById("name").value || "Your Name";
    const email = document.getElementById("email").value || "Your Email";
    const phone = document.getElementById("phone").value || "Your Phone Number";
    const education = document.getElementById("education").value || "Education Details";
    const experience = document.getElementById("experience").value || "Work Experience";
    const skills = document.getElementById("skills").value || "Your Skills";

    preview.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Work Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  });

  // Function to download as PDF
  downloadBtn.addEventListener("click", () => {
    const doc = new jsPDF();
    doc.html(preview, {
      callback: (doc) => {
        doc.save("CV.pdf");
      }
    });
  });
});
