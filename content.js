// Listen for the DOMContentLoaded event, which fires when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Query for the RTA meta tag
    var isAdultContent = document.querySelector("meta[name='rating']");

    // Check if the RTA meta tag exists and its content value
    if (isAdultContent && isAdultContent.content === 'RTA-5042-1996-1400-1577-RTA') {
        // Change the background color to black
        document.body.style.backgroundColor = 'black';

        // Create an overlay div element
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.height = '100%';
        overlay.style.width = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.zIndex = '1000';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        document.body.appendChild(overlay);

        // Create a div for the warning message
        var warningMessage = document.createElement('div');
        warningMessage.innerText = 'This site contains adult content. Do you wish to proceed?';
        warningMessage.style.color = 'white';
        warningMessage.style.fontSize = '30px';
        warningMessage.style.textAlign = 'center';
        warningMessage.style.marginBottom = '20px';
        overlay.appendChild(warningMessage);

        // Create 'Yes' button
        var yesButton = document.createElement('button');
        yesButton.innerText = 'Yes';
        yesButton.style.fontSize = '20px';
        yesButton.style.marginRight = '10px';
        yesButton.onclick = function () {
            overlay.style.display = 'none'; // Hide overlay on click
        };
        overlay.appendChild(yesButton);

        // Create 'No' button
        var noButton = document.createElement('button');
        noButton.innerText = 'No';
        noButton.style.fontSize = '20px';
        noButton.onclick = function () {
            window.location.href = 'https://www.google.com'; // Redirect to Google on click
        };
        overlay.appendChild(noButton);
    }
});
