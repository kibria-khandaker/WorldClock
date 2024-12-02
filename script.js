const timeZones = {
    "new_york": { name: "New York", offset: -5 },
    "london": { name: "London", offset: 0 },
    "tokyo": { name: "Tokyo", offset: 9 },
    "nairobi": { name: "Nairobi", offset: 3 },
    "dhaka": { name: "Dhaka", offset: 6 },
    "xx1": { name: "xx1", offset: 1 },
    "xx2": { name: "xx2", offset: 3 },
    "xx3": { name: "xx3", offset: -2 },
    "xx4": { name: "xx4", offset: 8 },
    "xx5": { name: "xx5", offset: -7 },
    "xx6": { name: "xx6", offset: -1 },
    "xx7": { name: "xx7", offset: 9 },
    // Add more time zones as needed
};

const initialTimeZones = Object.keys(timeZones).slice(0, 9); // First 9 time zones
let timeFormat = "24"; // Default time format

function generateClocks() {
    const clocksContainer = document.getElementById("clocks");

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

generateClocks();
handleTimeFormatChange();
setInterval(updateAllClocks, 1000);
