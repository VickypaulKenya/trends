// Function to create card HTML
function createCardHTML(item) {
    return `
        <div class="col-md-4">
             <div class="card political-card">
                <img src="${item.image}" class="card-img-top img-fluid" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    `;
}

// Function to render cards to the container
function renderCards(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach((item) => {
        container.innerHTML += createCardHTML(item);
    });
}

// Fetch combined JSON data
fetch('content.JSON')
    .then(response => response.json())
    .then(data => {
        // Render politics cards
        renderCards(data.politics, 'politicsContainer');

        // Render cybersecurity cards
        renderCards(data.cybersecurity, 'cybersecurityContainer');
    })
    .catch(error => console.error('Error loading content:', error));
