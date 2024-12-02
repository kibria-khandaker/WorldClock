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

## About (UTC Time Zone) and  information from ChatGPT:

### TThere are 195 countries in the world as of now. This includes:
- 193 member states of the United Nations.
- 2 observer states: the Holy See (Vatican City) and Palestine.

### Here is the complete list of the 195 countries in the world, organized by continent:
- Africa (54 Countries)
- Asia (49 Countries)
- Europe (44 Countries)
- North America (23 Countries)
- Oceania (14 Countries)
- South America (12 Countries)

Here Total 196 Countries, But actual Countries 195. 
The difference arises because some countries are transcontinental, meaning they are part of more than one continent. This can cause a country to be counted in multiple regions when listed by continent.

For example:
- Turkey: It spans both Asia and Europe.
- Russia: It spans Europe and Asia.
- Egypt: It spans Africa and Asia.
So, The official count of 195 countries includes each country only once.


---

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


---

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

---
---
---

#### Here is a complete list of the 195 countries:

> Here is a complete list of the 195 countries along with their respective  general standard UTC time zone offsets. Please note that some countries span multiple time zones, and some may observe Daylight Saving Time (DST), which can change their offsets during certain periods of the year.


**Africa (54 Countries)**
- Algeria - UTC+1
- Angola - UTC+1
- Benin - UTC+1
- Botswana - UTC+2
- Burkina Faso - UTC+0
- Burundi - UTC+2
- Cabo Verde - UTC-1
- Cameroon - UTC+1
- Central African Republic - UTC+1
- Chad - UTC+1
- Comoros - UTC+3
- Congo (Democratic Republic of the Congo) - UTC+1 (Western) / UTC+2 (Eastern)
- Congo (Republic of the Congo) - UTC+1
- Djibouti - UTC+3
- Egypt - UTC+2
- Equatorial Guinea - UTC+1
- Eritrea - UTC+3
- Eswatini - UTC+2
- Ethiopia - UTC+3
- Gabon - UTC+1
- Gambia - UTC+0
- Ghana - UTC+0
- Guinea - UTC+0
- Guinea-Bissau - UTC+0
- Ivory Coast (Côte d'Ivoire) - UTC+0
- Kenya - UTC+3
- Lesotho - UTC+2
- Liberia - UTC+0
- Libya - UTC+2
- Madagascar - UTC+3
- Malawi - UTC+2
- Mali - UTC+0
- Mauritania - UTC+0
- Mauritius - UTC+4
- Morocco - UTC+1
- Mozambique - UTC+2
- Namibia - UTC+2
- Niger - UTC+1
- Nigeria - UTC+1
- Rwanda - UTC+2
- São Tomé and Príncipe - UTC+1
- Senegal - UTC+0
- Seychelles - UTC+4
- Sierra Leone - UTC+0
- Somalia - UTC+3
- South Africa - UTC+2
- South Sudan - UTC+3
- Sudan - UTC+2
- Tanzania - UTC+3
- Togo - UTC+0
- Tunisia - UTC+1
- Uganda - UTC+3
- Zambia - UTC+2
- Zimbabwe - UTC+2

**Asia (49 Countries)**
- Afghanistan - UTC+4:30
- Armenia - UTC+4
- Azerbaijan - UTC+4
- Bahrain - UTC+3
- Bangladesh - UTC+6
- Bhutan - UTC+6
- Brunei - UTC+8
- Cambodia - UTC+7
- China - UTC+8
- Cyprus - UTC+2 (Standard) / UTC+3 (DST)
- Georgia - UTC+4
- India - UTC+5:30
- Indonesia - UTC+7 to UTC+9
- Iran - UTC+3:30
- Iraq - UTC+3
- Israel - UTC+2 (Standard) / UTC+3 (DST)
- Japan - UTC+9
- Jordan - UTC+2 (Standard) / UTC+3 (DST)
- Kazakhstan - UTC+5 to UTC+6
- Kuwait - UTC+3
- Kyrgyzstan - UTC+6
- Laos - UTC+7
- Lebanon - UTC+2 (Standard) / UTC+3 (DST)
- Malaysia - UTC+8
- Maldives - UTC+5
- Mongolia - UTC+8
- Myanmar (Burma) - UTC+6:30
- Nepal - UTC+5:45
- North Korea - UTC+9
- Oman - UTC+4
- Pakistan - UTC+5
- Palestine - UTC+2
- Philippines - UTC+8
- Qatar - UTC+3
- Saudi Arabia - UTC+3
- Singapore - UTC+8
- South Korea - UTC+9
- Sri Lanka - UTC+5:30
- Syria - UTC+2 (Standard) / UTC+3 (DST)
- Tajikistan - UTC+5
- Thailand - UTC+7
- Timor-Leste - UTC+9
- Turkey - UTC+3
- Turkmenistan - UTC+5
- United Arab Emirates - UTC+4
- Uzbekistan - UTC+5
- Vietnam - UTC+7
- Yemen - UTC+3

**Europe (44 Countries)**
- Albania - UTC+1
- Andorra - UTC+1
- Austria - UTC+1 (Standard) / UTC+2 (DST)
- Belarus - UTC+3
- Belgium - UTC+1 (Standard) / UTC+2 (DST)
- Bosnia and Herzegovina - UTC+1
- Bulgaria - UTC+2
- Croatia - UTC+1 (Standard) / UTC+2 (DST)
- Cyprus - UTC+2 (Standard) / UTC+3 (DST)
- Czech Republic - UTC+1 (Standard) / UTC+2 (DST)
- Denmark - UTC+1 (Standard) / UTC+2 (DST)
- Estonia - UTC+2
- Finland - UTC+2 (Standard) / UTC+3 (DST)
- France - UTC+1 (Standard) / UTC+2 (DST)
- Germany - UTC+1 (Standard) / UTC+2 (DST)
- Greece - UTC+2 (Standard) / UTC+3 (DST)
- Hungary - UTC+1 (Standard) / UTC+2 (DST)
- Iceland - UTC+0
- Ireland - UTC+0 (Standard) / UTC+1 (DST)
- Italy - UTC+1 (Standard) / UTC+2 (DST)
- Kosovo - UTC+1 (Standard) / UTC+2 (DST)
- Latvia - UTC+2
- Liechtenstein - UTC+1
- Lithuania - UTC+2
- Luxembourg - UTC+1 (Standard) / UTC+2 (DST)
- Malta - UTC+1 (Standard) / UTC+2 (DST)
- Moldova - UTC+2 (Standard) / UTC+3 (DST)
- Monaco - UTC+1 (Standard) / UTC+2 (DST)
- Montenegro - UTC+1 (Standard) / UTC+2 (DST)
- Netherlands - UTC+1 (Standard) / UTC+2 (DST)
- North Macedonia - UTC+1
- Norway - UTC+1 (Standard) / UTC+2 (DST)
- Poland - UTC+1 (Standard) / UTC+2 (DST)
- Portugal - UTC+0 (Standard) / UTC+1 (DST)
- Romania - UTC+2 (Standard) / UTC+3 (DST)
- Russia - UTC+3 to UTC+12
- San Marino - UTC+1 (Standard) / UTC+2 (DST)
- Serbia - UTC+1 (Standard) / UTC+2 (DST)
- Slovakia - UTC+1 (Standard) / UTC+2 (DST)
- Slovenia - UTC+1 (Standard) / UTC+2 (DST)
- Spain - UTC+1 (Standard) / UTC+2 (DST)
- Sweden - UTC+1 (Standard) / UTC+2 (DST)
- Switzerland - UTC+1 (Standard) / UTC+2 (DST)
- United Kingdom - UTC+0 (Standard) / UTC+1 (DST)

**North America (23 Countries)**
- Antigua and Barbuda - UTC-4
- Bahamas - UTC-5
- Barbados - UTC-4
- Belize - UTC-6
- Canada - UTC-3.5 to UTC-8
- Costa Rica - UTC-6
- Cuba - UTC-5
- Dominica - UTC-4
- Dominican Republic - UTC-4
- El Salvador - UTC-6
- Grenada - UTC-4
- Guatemala - UTC-6
- Haiti - UTC-5
- Honduras - UTC-6
- Jamaica - UTC-5
- Mexico - UTC-6 to UTC-8
- Nicaragua - UTC-6
- Panama - UTC-5
- Saint Kitts and Nevis - UTC-4
- Saint Lucia - UTC-4
- Saint Vincent and the Grenadines - UTC-4
- Trinidad and Tobago - UTC-4
- United States - UTC-5 to UTC-10

**Oceania (14 Countries)**
- Australia - UTC+8 to UTC+11
- Fiji - UTC+12
- Kiribati - UTC+12 to UTC+14
- Marshall Islands - UTC+12
- Micronesia - UTC+10
- Nauru - UTC+12
- New Zealand - UTC+12 (Standard) / UTC+13 (DST)
- Palau - UTC+9
- Papua New Guinea - UTC+10
- Samoa - UTC+13
- Solomon Islands - UTC+11
- Tonga - UTC+13
- Tuvalu - UTC+12
- Vanuatu - UTC+11
- South America (12 Countries)
- Argentina - UTC-3
- Bolivia - UTC-4
- Brazil - UTC-3 to UTC-5
- Chile - UTC-4
- Colombia - UTC-5
- Ecuador - UTC-5
- Guyana - UTC-4
- Paraguay - UTC-4
- Peru - UTC-5
- Suriname - UTC-3
- Uruguay - UTC-3
- Venezuela - UTC-4


