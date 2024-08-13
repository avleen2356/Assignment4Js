// Description of the Assignment: This script fetches a random dog image from The Dog API and displays it on the page.
//Creating a simple page would demonstrate how to connect with the API by using the publicly available dog API.

// Adding  API key and URL for The Dog API
const apiKey = 'live_FbhrvQVzCI9TjUEEEDEGxcOQejc73Qdzq1aHPKrSSj3rYceM2OJxTeNgNDamc43H';

// API URL for fetching a random dog image
const apiUrl = 'https://api.thedogapi.com/v1/images/search';

//  Adding the Event listener for the button click
document.getElementById('fetch-dog').addEventListener('click', () => {

    // Getting the selected breed from the dropdown
    const breed = document.getElementById('breed').value;
    let url = apiUrl;
    
    // If a specific breed is selected, append it to the API request
    if (breed !== 'random') {
        url += `?breed_ids=${breed}`;
    }

    // Fetching the  data from The Dog API using the fetch API
    fetch(url, {
        headers: {
            'x-api-key': apiKey//Including the API key in the request header for authentication purposes 
        }
    })

    // Parse the JSON response and display the dog image on the page.
    .then(response => response.json())

    // Displaying the dog image on the page.
    .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        
        // Clearing the previous dog image if any before displaying the new one
    
        dogImageContainer.innerHTML = `<img src="${data[0].url}" alt="A cute dog">`;

    })

    // Catching any errors that occur during the fetch request .

    .catch(error => console.error('Error fetching dog image:', error));
});