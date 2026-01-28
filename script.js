let timeZones = {}; // All time zone data from JSON
let initialTimeZones = []; // Currently selected time zones for clocks
let timeFormat = "24"; // Default time format (24-hour)
let clockCount = 9; // Default number of clocks

const MAX_CLOCKS = 195; // Maximum allowed clocks
const MIN_CLOCKS = 1;   // Minimum allowed clocks

// ================================
// Load time zone data from JSON
// ================================
fetch("timeZones.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load time zone data.");
        }
        return response.json();
    })
    .then((data) => {
        timeZones = data;

        // Take first N time zones based on clockCount
        initialTimeZones = Object.keys(timeZones).slice(0, clockCount);

        generateClocks();             // Create clocks UI
        handleTimeFormatChange();     // Time format listener
        handleClockCountChange();     // Clock count listener

        // Update all clocks every second
        setInterval(updateAllClocks, 1000);
    })
    .catch((error) => console.error("Error loading time zones:", error));


// ================================
// Create clock UI dynamically
// ================================
function generateClocks() {
    const clocksContainer = document.getElementById("clocks");
    clocksContainer.innerHTML = ""; // Clear previous clocks

    initialTimeZones.forEach((key) => {
        const clockDiv = document.createElement("div");
        clockDiv.className = "clock bg-white p-4 rounded shadow";
        clockDiv.id = key;

        // -------- Dropdown (Time Zone Selector) --------
        const dropdown = document.createElement("select");
        dropdown.className = "mb-2 w-full p-1 border rounded";
        dropdown.addEventListener("change", (e) => updateClock(e.target));

        // Populate dropdown options
        Object.keys(timeZones).forEach((zoneKey) => {
            const option = document.createElement("option");

            // 🔹 Show city name with UTC offset in dropdown
            const offset = timeZones[zoneKey].offset;
            const offsetText = offset >= 0 ? `+${offset}` : offset;

            option.value = zoneKey;
            option.textContent = `${timeZones[zoneKey].name} (UTC ${offsetText})`;

            if (zoneKey === key) option.selected = true;
            dropdown.appendChild(option);
        });

        // -------- City name + UTC offset --------
        const offset = timeZones[key].offset;
        const offsetText = offset >= 0 ? `+${offset}` : offset;

        clockDiv.innerHTML = `
            <!-- City Name + UTC Offset -->
            <h2 class="text-lg font-semibold">
                ${timeZones[key].name}
                <span class="text-sm text-gray-500">(UTC ${offsetText})</span>
            </h2>

            <!-- Time will be updated by JavaScript -->
            <p class="time text-xl mt-2">--:--:--</p>
        `;

        clockDiv.prepend(dropdown);
        clocksContainer.appendChild(clockDiv);
    });
}


// ================================
// Update a single clock
// ================================
function updateClock(dropdown) {
    const selectedZone = dropdown.value;
    const clockDiv = dropdown.parentElement;
    const timeElement = clockDiv.querySelector(".time");
    const cityName = clockDiv.querySelector("h2");

    const { name, offset } = timeZones[selectedZone];

    // 🔹 Update city name with UTC offset
    const offsetText = offset >= 0 ? `+${offset}` : offset;
    cityName.innerHTML = `
        ${name}
        <span class="text-sm text-gray-500">(UTC ${offsetText})</span>
    `;

    // -------- Time calculation (UNCHANGED LOGIC) --------
    const now = new Date();
    const localTime = new Date(now.getTime() + offset * 3600 * 1000);

    let hours = localTime.getUTCHours();
    let minutes = localTime.getUTCMinutes().toString().padStart(2, "0");
    let seconds = localTime.getUTCSeconds().toString().padStart(2, "0");

    let timeString;

    if (timeFormat === "12") {
        const amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
    } else {
        timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
    }

    timeElement.textContent = timeString;
}


// ================================
// Update all clocks at once
// ================================
function updateAllClocks() {
    const allDropdowns = document.querySelectorAll(".clock select");
    allDropdowns.forEach(updateClock);
}


// ================================
// Handle 12h / 24h format change
// ================================
function handleTimeFormatChange() {
    const formatSelector = document.getElementById("timeFormat");

    formatSelector.addEventListener("change", () => {
        timeFormat = formatSelector.value;
        updateAllClocks();
    });
}


// ================================
// Handle number of clocks change
// ================================
function handleClockCountChange() {
    const clockCountInput = document.getElementById("clockCount");
    const updateButton = document.getElementById("updateClocks");

    updateButton.addEventListener("click", () => {
        const inputValue = clockCountInput.value.trim();

        // 🔒 Validate numeric input
        if (!/^\d+$/.test(inputValue)) {
            alert("Invalid input! Please enter a positive number.");
            return;
        }

        const newCount = parseInt(inputValue, 10);

        // 🔒 Validate min / max range
        if (newCount < MIN_CLOCKS || newCount > MAX_CLOCKS) {
            alert(`Please enter a value between ${MIN_CLOCKS} and ${MAX_CLOCKS}.`);
            return;
        }

        clockCount = newCount;
        initialTimeZones = Object.keys(timeZones).slice(0, clockCount);

        generateClocks();
    });
}
