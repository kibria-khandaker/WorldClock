// Time Zone Offsets in hours
const timeZones = {
    "new-york": -5, // New York (UTC-5)
    "london": 0,    // London (UTC+0)
    "tokyo": 9,     // Tokyo (UTC+9)
    "sydney": 11,   // Sydney (UTC+11)
    "dubai": 4,     // Dubai (UTC+4)
    "dhaka": 6      // Dhaka (UTC+6)
};

// Update the clocks every second
function updateClocks() {
    const now = new Date();

    Object.keys(timeZones).forEach(city => {
        const offset = timeZones[city];
        const cityTime = new Date(now.getTime() + offset * 3600 * 1000);

        const hours = cityTime.getUTCHours().toString().padStart(2, '0');
        const minutes = cityTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = cityTime.getUTCSeconds().toString().padStart(2, '0');

        const timeDisplay = document.querySelector(`#${city} .time`);
        if (timeDisplay) {
            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
    });
}

// Run the update function every second
setInterval(updateClocks, 1000);
updateClocks(); // Initial call
