function BagsContent() {
  data = `<div class="card-container">
  <div class="card-title">Bags Collection</div>
  <div class="grid-container-card">`;
  for (i = 1; i < 20; i++) {
    data += `<div class="card">
        <img
          src="../images/homeCollection/home2.jpg"
          alt="Avatar"
          style="width: 100%"
        />
        <p>Code #${i}</p>
      </div>`;
  }
  data += `</div>
  </div>`;
  document.getElementById("body-contents").innerHTML = data;
}
