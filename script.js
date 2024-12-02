const timeZones = {
    "dhaka": { name: "Dhaka", offset: 6 },
    "new_york": { name: "New York", offset: -5 },
    "london": { name: "London", offset: 0 },
    "canada": { name: "Canada", offset: -5 },
    "tokyo": { name: "Tokyo", offset: 9 },
    "nairobi": { name: "Nairobi", offset: 3 },
};

let timeFormat = "24"; // Default time format

function generateClocks() {
    const clocksContainer = document.getElementById("clocks");
    Object.keys(timeZones).forEach((key) => {
        const clockDiv = document.createElement("div");
        clockDiv.className = "clock";
        clockDiv.id = key;
        clockDiv.innerHTML = `<h2>${timeZones[key].name}</h2><p class="time">--:--:--</p>`;
        clocksContainer.appendChild(clockDiv);
    });
}

function updateClocks() {
    const now = new Date();
    Object.keys(timeZones).forEach((key) => {
        const { offset } = timeZones[key];
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

        document.querySelector(`#${key} .time`).textContent = timeString;
    });
}

function handleTimeFormatChange() {
    const formatSelector = document.getElementById("timeFormat");
    formatSelector.addEventListener("change", () => {
        timeFormat = formatSelector.value;
        updateClocks(); // Update clocks immediately after changing format
    });
}

generateClocks();
handleTimeFormatChange();
setInterval(updateClocks, 1000);
