// Get user agent information
let userAgent = navigator.userAgent;

// Get screen resolution
let screenResolution = `${window.screen.width}x${window.screen.height}`;

// Get IP address and network information
getIpAddress().then(ipInfo => {
    // Extracting network information
    let networkInfo = ipInfo.org || "Unknown Network";

    // Get current time
    let currentTime = new Date().toLocaleString();

    // Prepare data
    let data = new FormData();
    data.append('userAgent', userAgent);
    data.append('screenResolution', screenResolution);
    data.append('ipAddress', ipInfo.ip);
    data.append('networkInfo', networkInfo);
    data.append('currentTime', currentTime);

    // Send data to server
    fetch('https://script.google.com/macros/s/AKfycbxUadX6-8-iyXerVFWNfIXKI8fFLC96MXHEzUlpLrjXKH_lBPi4aNe_CIgQSyLvT8AwaA/exec', {
        method: "POST",
        body: data
    });
});

// Function to get IP address and network information
function getIpAddress() {
    return fetch('https://ipinfo.io/json')
        .then(response => response.json());
}
