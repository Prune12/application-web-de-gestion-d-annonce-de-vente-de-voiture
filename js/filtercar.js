// Dans la page de résultats
function displayResults(data) {
    // Récupère les données de recherche depuis localStorage
    const selectedOption = localStorage.getItem('selectedOption');
    const searchQuery = localStorage.getItem('searchQuery');
    // Filtre les données en fonction des données de recherche
    const filteredData = data.filter(car => {
      if (selectedOption === '1') {
        return car.type === searchQuery;
      } else if (selectedOption === '2') {
        return car.price === Number(searchQuery);
      } else if (selectedOption === '3') {
        return car.marque === searchQuery;
      }
      return false;
    });
    // Sélectionne l'élément div avec l'ID results
    const resultsElement = document.getElementById('gallery');
    // Affiche les résultats de la recherche
    if (filteredData.length > 0) {
      filteredData.forEach(car => {
        carElement=displayData(filteredData);
        resultsElement.appendChild(carElement);
      });
    } else {
      // Affiche un message indiquant qu'aucun résultat n'a été trouvé
      resultsElement.textContent = "Aucune voiture de ce type";
      // Crée un bouton pour revenir à la page d'accueil
      const backButton = document.createElement('button');
      backButton.textContent = "Revenir à la page d'accueil";
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
      // Ajoute le bouton à l'élément div avec l'ID results
      resultsElement.appendChild(backButton);
    }
  }



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
// Dans la page de résultats
  
  fetch('http://192.168.43.152:8080/api/cars')
    .then(response => response.json())
    .then(data => displayResults(data));
 

