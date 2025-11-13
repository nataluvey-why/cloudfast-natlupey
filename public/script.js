// Ambil elemen tombol dan output
const tombol = document.getElementById('tombol');
const output = document.getElementById('output');

// Tambahkan event listener
tombol.addEventListener('click', () => {
  const waktu = new Date().toLocaleTimeString();
  output.textContent = `Tombol diklik pada pukul ${waktu}`;
});
