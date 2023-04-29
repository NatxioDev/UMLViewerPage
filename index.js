const fs = require('fs');
const path = require('path');

const diagramsFolder = './diagrams'; // Ruta a la carpeta de diagramas

const diagramFiles = fs.readdirSync(diagramsFolder)
  .filter(file => file.endsWith('.uml')); // Obtener archivos .uml de la carpeta

const diagramsContainer = document.getElementById('diagrams-container'); // Contenedor de los cards de diagrama

// Crear un card de diagrama para cada archivo .uml
diagramFiles.forEach(file => {
  const diagramName = path.parse(file).name; // Obtener el nombre del archivo sin extensión
  const card = `
    <div class="col-md-4">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${diagramName}</h5>
          <p class="card-text">Descripción del diagrama.</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${diagramName}-modal">Ver diagrama</button>
        </div>
      </div>
    </div>
  `;
  diagramsContainer.insertAdjacentHTML('beforeend', card); // Agregar el card al contenedor
});
