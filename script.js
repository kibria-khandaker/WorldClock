// Time Zone Offsets in hours
const timeZones = {
    "new-york": { name: "New York", offset: -5 },
    "london": { name: "London", offset: 0 },
    "tokyo": { name: "Tokyo", offset: 9 },
    "sydney": { name: "Sydney", offset: 11 },
    "dubai": { name: "Dubai", offset: 4 },
    "dhaka": { name: "Dhaka", offset: 6 }
};

// Generate the clock HTML dynamically
function generateClocks() {
    const clocksContainer = document.getElementById("clocks");

    // Use map to create clock divs for each city
    clocksContainer.innerHTML = Object.keys(timeZones)
        .map(key => {
            const { name } = timeZones[key];
            return `
                <div class="clock" id="${key}">
                    <h2>${name}</h2>
                    <p class="time">--:--:--</p>
                </div>
            `;
        })
        .join(""); // Join the array into a single HTML string
}

// Update the clocks every second
function updateClocks() {
    const now = new Date();

    Object.keys(timeZones).forEach(key => {
        const { offset } = timeZones[key];
        const cityTime = new Date(now.getTime() + offset * 3600 * 1000);

        const hours = cityTime.getUTCHours().toString().padStart(2, '0');
        const minutes = cityTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = cityTime.getUTCSeconds().toString().padStart(2, '0');

        const timeDisplay = document.querySelector(`#${key} .time`);
        if (timeDisplay) {
            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
    });
}

// Initialize the world clock
generateClocks();
setInterval(updateClocks, 1000);
updateClocks(); // Initial call
