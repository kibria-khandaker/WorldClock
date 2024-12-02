let timeZones = {}; // Placeholder for time zone data
const initialTimeZones = []; // First 9 time zones will be determined dynamically
let timeFormat = "24"; // Default time format

// Fetch the time zone data from the JSON file
fetch("timeZones.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load time zone data.");
        }
        return response.json();
    })
    .then((data) => {
        timeZones = data;
        Object.keys(timeZones).slice(0, 9).forEach((key) => initialTimeZones.push(key));
        generateClocks();
        handleTimeFormatChange();
        setInterval(updateAllClocks, 1000);
    })
    .catch((error) => console.error("Error loading time zones:", error));

function generateClocks() {
    const clocksContainer = document.getElementById("clocks");
    clocksContainer.innerHTML = ""; // Clear any existing clocks

    initialTimeZones.forEach((key) => {
        const clockDiv = document.createElement("div");
        clockDiv.className = "clock";
        clockDiv.id = key;

        const dropdown = document.createElement("select");
        dropdown.addEventListener("change", (e) => updateClock(e.target));

        // Populate dropdown with all time zone options
        Object.keys(timeZones).forEach((zoneKey) => {
            const option = document.createElement("option");
            option.value = zoneKey;
            option.textContent = timeZones[zoneKey].name;
            if (zoneKey === key) option.selected = true; // Set default selection
            dropdown.appendChild(option);
        });

        clockDiv.innerHTML = `
            <h2>${timeZones[key].name}</h2>
            <p class="time">--:--:--</p>
        `;
        clockDiv.prepend(dropdown); // Add dropdown above the clock details
        clocksContainer.appendChild(clockDiv);
    });
}

function updateClock(dropdown) {
    const selectedZone = dropdown.value;
    const clockDiv = dropdown.parentElement;
    const timeElement = clockDiv.querySelector(".time");
    const cityName = clockDiv.querySelector("h2");

    const { name, offset } = timeZones[selectedZone];
    cityName.textContent = name;

    const now = new Date();
    const localTime = new Date(now.getTime() + offset * 3600 * 1000);

    let hours = localTime.getUTCHours();
    let minutes = localTime.getUTCMinutes().toString().padStart(2, "0");
    let seconds = localTime.getUTCSeconds().toString().padStart(2, "0");
    let timeString;

    if (timeFormat === "12") {
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert to 12-hour format
        timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    }

    timeElement.textContent = timeString;
}

function updateAllClocks() {
    const allDropdowns = document.querySelectorAll(".clock select");
    allDropdowns.forEach(updateClock);
}

function handleTimeFormatChange() {
    const formatSelector = document.getElementById("timeFormat");
    formatSelector.addEventListener("change", () => {
        timeFormat = formatSelector.value;
        updateAllClocks(); // Update all clocks immediately after changing format
    });
}
