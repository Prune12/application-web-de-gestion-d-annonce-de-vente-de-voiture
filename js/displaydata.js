let selectedOption;
let searchQuery;

const selectElement = document.querySelector('.select_box_main select');
selectElement.addEventListener('change', event => {
  selectedOption = event.target.value;
});

const inputElement = document.getElementById("search-input");
inputElement.addEventListener('input', event => {
  val = event.target.value;

});

let val = ""

function displayData(data) {
  const galleryElement = document.getElementById('gallery');
  let rowElement;
  data.forEach((car, index) => {
    if (index % 3 === 0) {
      rowElement = document.createElement('div');
      rowElement.className = 'row';
      galleryElement.appendChild(rowElement);
    }

    const colElement = document.createElement('div');
    colElement.className = 'col-md-4';
    rowElement.appendChild(colElement);

    const galleryBoxElement = document.createElement('div');
    galleryBoxElement.className = 'gallery_box';
    colElement.appendChild(galleryBoxElement);

    const galleryImgElement = document.createElement('div');
    galleryImgElement.className = 'gallery_img';
    galleryBoxElement.appendChild(galleryImgElement);

    const imgElement = document.createElement('img');
    imgElement.src = car.imageLinks[0];
    galleryImgElement.appendChild(imgElement);

    const nameElement = document.createElement('h3');
    nameElement.className = 'types_text';
    nameElement.textContent = car.name;
    galleryBoxElement.appendChild(nameElement);

    const marqueElement = document.createElement('p');
    marqueElement.className = 'looking_text';
    marqueElement.textContent = `Marque: ${car.marque}`;
    galleryBoxElement.appendChild(marqueElement);

    const typeElement = document.createElement('p');
    typeElement.className = 'looking_text';
    typeElement.textContent = `Type: ${car.type}`;
    galleryBoxElement.appendChild(typeElement);

    const priceElement = document.createElement('p');
    priceElement.className = 'looking_text';
    priceElement.textContent = `Price: $${car.price}`;
    galleryBoxElement.appendChild(priceElement);

    const readBtElement = document.createElement('div');
    readBtElement.className = 'read_bt';
    galleryBoxElement.appendChild(readBtElement);

    const bookNowLink = document.createElement('a');
    bookNowLink.href = '#';
    bookNowLink.textContent = 'Book Now';
    readBtElement.appendChild(bookNowLink);
  });
}
function displayData2(data) {
  const galleryElement = document.getElementById('gallery');
  let rowElement;

  data.forEach((car, index) => {
    if (car.marque == val || car.price == val || car.type == val) {
      if (index % 3 === 0) {
        rowElement = document.createElement('div');
        rowElement.className = 'row';
        galleryElement.appendChild(rowElement);
      }

      const colElement = document.createElement('div');
      colElement.className = 'col-md-4';
      rowElement.appendChild(colElement);

      const galleryBoxElement = document.createElement('div');
      galleryBoxElement.className = 'gallery_box';
      colElement.appendChild(galleryBoxElement);

      const galleryImgElement = document.createElement('div');
      galleryImgElement.className = 'gallery_img';
      galleryBoxElement.appendChild(galleryImgElement);

      const imgElement = document.createElement('img');
      imgElement.src = car.imageLinks[0];
      galleryImgElement.appendChild(imgElement);

      const nameElement = document.createElement('h3');
      nameElement.className = 'types_text';
      nameElement.textContent = car.name;
      galleryBoxElement.appendChild(nameElement);

      const marqueElement = document.createElement('p');
      marqueElement.className = 'looking_text';
      marqueElement.textContent = `Marque: ${car.marque}`;
      galleryBoxElement.appendChild(marqueElement);

      const typeElement = document.createElement('p');
      typeElement.className = 'looking_text';
      typeElement.textContent = `Type: ${car.type}`;
      galleryBoxElement.appendChild(typeElement);

      const priceElement = document.createElement('p');
      priceElement.className = 'looking_text';
      priceElement.textContent = `Price: $${car.price}`;
      galleryBoxElement.appendChild(priceElement);

      const readBtElement = document.createElement('div');
      readBtElement.className = 'read_bt';
      galleryBoxElement.appendChild(readBtElement);

      const bookNowLink = document.createElement('a');
      bookNowLink.href = '#';
      bookNowLink.textContent = 'Book Now';
      readBtElement.appendChild(bookNowLink);
    } else {
      document.writeln("Aucune annonce trouve")
    }
  });
}
fetch('http://192.168.43.152:8080/api/cars')
  .then(response => response.json())
  .then(data => {
    
      displayData(data);

  });