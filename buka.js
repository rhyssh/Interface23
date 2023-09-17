// Fungsi untuk mengubah teks pada elemen output
function updateOutput(text) {
  document.getElementById("output").innerHTML = text;
}

// Event listener untuk template 1
document.getElementById("pembukaan").addEventListener("click", function () {
  const namaDosen = document.getElementById("nama").value;
  const isBapakSelected = document.getElementById("bapak").checked;
  const isIbuSelected = document.getElementById("ibu").checked;
  const prefix = (isBapakSelected ? "Bapak " : "") + (isIbuSelected ? "ibu " : "");

  const template1Text = `Selamat Datang di Acara Perdana Interface 2023 Kepada ${prefix}${namaDosen}. Selaku Dosen Jurusan Ilmu Komputer Universitas Negeri Semarang.
  Terima kasih atas waktunya karena sudah menyempatkan hadir di acara ini`;
  updateOutput(template1Text);
});

// Event listener untuk template 2
document.getElementById("penutup").addEventListener("click", function () {
  const namaDosen = document.getElementById("nama").value;
  const isBapakSelected = document.getElementById("bapak").checked;
  const isIbuSelected = document.getElementById("ibu").checked;
  const prefix = (isBapakSelected ? "Bapak " : "") + (isIbuSelected ? "ibu " : "");

  const template2Text = `Terima kasih ${prefix}${namaDosen} Telah menyempatkan hadir pada acara ini, apabila ingin meninggalkan zoom dipersilahkan🙏. <br> Semoga ${prefix} dan keluarga sehat selalu`;
  updateOutput(template2Text);
});

// Event listener untuk briefing
document.getElementById("briefing").addEventListener("click", function () {
  const namaDosen = document.getElementById("nama").value;
  const isBapakSelected = document.getElementById("bapak").checked;
  const isIbuSelected = document.getElementById("ibu").checked;
  const prefix = (isBapakSelected ? "Bapak " : "") + (isIbuSelected ? "ibu " : "");

  const template3Text = `
    <p>Izin untuk memberitahu ${prefix} bahwa pembukaan acara akan dilakukan pukul 08.00 dan untuk rangkaian acara perkenalan dosen akan dilakukan pukul 08.50.</p>
    <p>Untuk mekanisme nya operator akan menampilkan slide perkenalan dosen, dan bila slide perkenalan sudah ditampilkan ${prefix} dipersilakan untuk langsung memperkenalkan diri. Kurang lebih waktu perkenalannya selama 3 menit.</p>
  `;
  updateOutput(template3Text);
});

// Event listener untuk tombol copy
document.getElementById("copy").addEventListener("click", function () {
  const kalimat = document.getElementById("output").textContent;
  copyToClipboard(kalimat);
});

// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text) {
  const tempElement = document.createElement("textarea");
  tempElement.value = text;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);
  alert("Teks berhasil disalin ke clipboard!");
}
