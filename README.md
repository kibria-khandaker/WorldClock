# 🌍 WorldClock

A dynamic, customizable world clock for websites that displays the current time for selected countries.

## Features:
- **HTML Structure**: Each clock is represented by a dynamically generated `div` based on the time zone information.
- **JavaScript Logic**: 
  - Utilizes the `Date` object to calculate the local time for each city using its UTC offset.
  - Automatically updates every second to ensure real-time accuracy.
- **Dynamic Clock Generation**:
  - The `generateClocks` function creates a new clock for each city listed in the `timeZones` object.
  - No need to manually add HTML for each clock—just update the configuration!
- **Easy Configuration**:
  - Add a new country by simply updating the `timeZones` object:
    ```javascript
    "nairobi": { name: "Nairobi", offset: 3 }
    ```
    The clock for the new city will automatically appear on the webpage.
- **Customizable Design**: Easily modify the appearance using CSS.

---

## How It Works:
1. **HTML**:
   - A container (`<div id="clocks">`) holds all the dynamically generated clocks.
   - Each clock is represented as a `<div>` with an ID corresponding to the city's name.

2. **JavaScript**:
   - **Clock Updates**:
     - The `updateClocks` function calculates the current time for each city by adding its UTC offset to the current UTC time.
     - Formats the time into `hh:mm:ss` and displays it in the corresponding clock container.
   - **Dynamic Generation**:
     - The `generateClocks` function iterates through the `timeZones` object using `Object.keys()`, creating and appending a new `<div>` for each city.

3. **Automatic Updates**:
   - A timer updates all clocks every second to ensure accuracy.

---

## Adding a New City:
1. Open the JavaScript file.
2. Add a new entry to the `timeZones` object:
    ```javascript
        "tokyo": { name: "Tokyo", offset: 9 }
    ```



---
---
---

## About (UTC Time Zone) information from ChatGPT:

### All complete list of UTC time zone offsets along with corresponding example cities.(UTC Time Zone Offsets):

| Offset | Example Cities  | Time Zone Name/Abbreviation |
|--------|-----------------|-----------------------------|
| UTC-12 | Baker Island (Uninhabited)     |  AoE (Anywhere on Earth)     | 
| UTC-11 | Pago Pago (American Samoa)     |   SST (Samoa Standard Time)     | 
| UTC-10 | Honolulu (Hawaii)     |    HST (Hawaii Standard Time)     | 
| UTC-9  |  Anchorage (Alaska)     |   AKST (Alaska Standard Time)     | 
| UTC-8  |  Los Angeles (USA)     |    PST (Pacific Standard Time)     | 
| UTC-7  |  Denver (USA)     |     MST (Mountain Standard Time)     | 
| UTC-6  |  Mexico City (Mexico)     |     CST (Central Standard Time)     | 
| UTC-5  |  New York (USA) , Toronto (Canada)     |     EST (Eastern Standard Time)     | 
| UTC-4  |  Santiago (Chile)  , Caracas (Venezuela)     |    AST (Atlantic Standard Time)     | 
| UTC-3  |  São Paulo (Brazil)  , Buenos Aires (Argentina)     |     BRT (Brasília Time)     | 
| UTC-2  |  South Georgia (Uninhabited)     |  GST (South Georgia Time)     | 
| UTC-1  |  Azores (Portugal)     |    AZOST (Azores Standard Time)     | 
| UTC+0  |  London (UK)  , Reykjavik (Iceland)     |     GMT (Greenwich Mean Time)     | 
| UTC+1  |  Berlin (Germany)  , Paris (France)     |     CET (Central European Time)     | 
| UTC+2  |  Cairo (Egypt)  , Johannesburg (South Africa)     |   EET (Eastern European Time)     | 
| UTC+3  |  Moscow (Russia)  , Riyadh (Saudi Arabia)     |   MSK (Moscow Standard Time)     | 
| UTC+4  |  Dubai (UAE)  , Tbilisi (Georgia)     |   GST (Gulf Standard Time)     | 
| UTC+5  |  Islamabad (Pakistan)  , Tashkent (Uzbekistan)     |  PKT (Pakistan Standard Time)     | 
| UTC+6  |  Dhaka (Bangladesh)  , Almaty (Kazakhstan)     |  BST (Bangladesh Standard Time)     | 
| UTC+7  |  Jakarta (Indonesia)  , Bangkok (Thailand)     |  WIB (Western Indonesia Time)     | 
| UTC+8  |  Beijing (China)  , Singapore  | CST (China Standard Time)     | 
| UTC+9  |  Tokyo (Japan)  , Seoul (South Korea)     |   JST (Japan Standard Time)     | 
| UTC+10 | Sydney (Australia)  , Vladivostok (Russia)     |     AEST (Australian Eastern Standard Time)     | 
| UTC+11 | Noumea (New Caledonia)  , Solomon Islands | SBT (Solomon Islands Time)     | 
| UTC+12 | Auckland (New Zealand)  , Suva (Fiji)     |  NZST (New Zealand Standard Time)     | 
| UTC+13 | Apia (Samoa)  , Tokelau     | WSDT (West Samoa Daylight Time)     | 
| UTC+14 | Line Islands (Kiribati)     |  LINT (Line Islands Time)     | 


### Question: Is it possible to complete all time zones for All world countries with this list?
- Yes, it is possible to represent all world countries and their respective time zones using this list of UTC offsets as a base. However, there are a few nuances to consider: 

### All Answer and Explain:
#### Why This List Covers All Time Zones:
- Universal Coverage:
  - All UTC offsets (from UTC-12 to UTC+14) are included.
  - Each time zone offset can apply to multiple regions/countries.

- Daylight Saving Time (DST):
  - DST shifts are temporary adjustments that move the clocks forward (typically by 1 hour) during certain months. For example:
    - New York (USA): UTC-5 (Standard Time) → UTC-4 (DST)
  - You can handle this programmatically if needed, depending on whether the time zone follows DST.

- Overlapping Time Zones:
  - Some countries or territories span multiple time zones. For example:
    - Russia: Ranges from UTC+2 to UTC+12.
    - USA: Ranges from UTC-10 (Hawaii) to UTC-5 (East Coast).

- Uninhabited Areas:
  - Certain time zones like UTC-12 and UTC+14 correspond to uninhabited or sparsely populated regions (e.g., Baker Island or Line Islands).


#### Challenges to Be Aware Of:
- Special Time Zones:

  - Some countries use non-integer UTC offsets, such as:
    - India (UTC+5:30)
    - Nepal (UTC+5:45)
    - Iran (UTC+3:30)
    - Myanmar (UTC+6:30)
    - Newfoundland (Canada, UTC-3:30)

- Dynamic Changes:
  - Some countries periodically adjust their time zones. For example:
    - Samoa switched from UTC-11 to UTC+13 in 2011.
    - South Sudan adopted UTC+2 in 2021.

- Dependencies and Territories:
    - Certain regions (e.g., Greenland, French Polynesia, or the Canary Islands) follow different time zones from their parent countries.

- Local Time Rules:
    - Countries like China have a single official time zone (UTC+8), but unofficially, some regions like Xinjiang may follow a different local time.


#### Completing Time Zones for All Countries:
To represent all world countries:

- Use a Detailed Time Zone Database:
  - Consider referencing the IANA Time Zone Database (used by most modern systems).
  - Examples of time zones: America/New_York, Europe/Paris, Asia/Kolkata.

- Expand the List with Subdivisions:
    - Add specific regions for countries with multiple time zones. For example:
    ```javascript
        timeZones["usa_eastern"] = { name: "New York", offset: -5 };
        timeZones["usa_central"] = { name: "Chicago", offset: -6 };
        timeZones["usa_pacific"] = { name: "Los Angeles", offset: -8 };
    ```
- Account for Non-Standard Offsets:
    - Add entries for countries with non-integer offsets:
    ```javascript
        timeZones["india"] = { name: "New Delhi", offset: 5.5 };
        timeZones["nepal"] = { name: "Kathmandu", offset: 5.75 };
    ```

- Handle Daylight Saving Time:
    - If you want dynamic handling of DST, use JavaScript's Intl.DateTimeFormat API or libraries like Moment.js or Luxon.