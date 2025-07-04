document.addEventListener("DOMContentLoaded", () => {
  let username = prompt("Masukkan nama Anda:");
  document.getElementById("welcomeText").textContent = `Hi ${username}, Welcome To Website`;
});

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const birthdate = document.getElementById("birthdate").value.trim();
  const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
  const message = document.getElementById("message").value.trim();

  if (!name || !birthdate || !gender || !message) {
    alert("Harap isi semua kolom.");
    return;
  }

  const now = new Date();
  const formResult = document.getElementById("formResult");

  formResult.innerHTML = `
    <p><strong>Current Time:</strong> ${now.toString()}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  alert("Pesan berhasil dikirim!");
});
