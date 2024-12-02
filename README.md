### Steps:
HTML: Create a structure with containers for each country's clock.
CSS: Style the clocks to make them visually appealing.
JavaScript: Use the Date object and its methods to calculate the time for each country based on their time zone offsets.

### How It Works
- HTML Structure: Each clock is represented by a div with an ID corresponding to the city's name.
- CSS Styling: Clocks are styled as cards and displayed in a flexible grid.
- JavaScript Logic: The updateClocks function calculates the current time for each city by adding its time zone offset to the current UTC time, then formats and displays it in the corresponding clock's container.

### Customization
- You can add more cities by updating the timeZones object and adding corresponding HTML elements.
- Change the styling as desired in the CSS.

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
    | UTC+8  |  Beijing (China)  , Singapore  CST (China Standard Time)     | 
    | UTC+9  |  Tokyo (Japan)  , Seoul (South Korea)     |   JST (Japan Standard Time)     | 
    | UTC+10 | Sydney (Australia)  , Vladivostok (Russia)     |     AEST (Australian Eastern Standard Time)     | 
    | UTC+11 | Noumea (New Caledonia)  , Solomon Islands SBT (Solomon Islands Time)     | 
    | UTC+12 | Auckland (New Zealand)  , Suva (Fiji)     |  NZST (New Zealand Standard Time)     | 
    | UTC+13 | Apia (Samoa)  , Tokelau     | WSDT (West Samoa Daylight Time)     | 
    | UTC+14 | Line Islands (Kiribati)     |  LINT (Line Islands Time)     | 