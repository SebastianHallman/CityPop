# CityPop
## Arbetsprov för WeKnowIt

### Om appen
CityPop är en mobilapplikation, utvecklat i React Native, där användaren kan kolla upp antalet in vånare i en stad. Användaren kan antingen söka på en stad direkt eller söka på ett land för att få upp en lista av städer sorterat på antal invånare.

### Teknologier

- Node.js 16.14.2
- React Native

### Använda API:er

- Geonames API
- api-ninjas country APi
  
### Dependencies

- Axios
- Jest
  
###  Filstruktur

- ```/screens``` innehåller alla sidor i appen
- ```/components``` innehåller alla custom components för projektet
- ```/api``` innehåller alla api calls samt test för apit
- ```/misc``` innehåller hjälpfiler, såsom färgschemat och props till alla skärmar

### Kör appen

- Klona projektet genom att köra kommandot  ```git clone https://github.com/SebastianHallman/CityPop.git```
- Installera alla dependencies med kommandot ```npm install```
- Skapa filen ```key.ts``` inuti ```/api``` och skapa variabeln ```API_NINJA_KEY``` som innehåller din API-nyckel från api-ninjas. Du kan hämta en gratis API-nyckel [här](https://api-ninjas.com/).
- Du kan nu köra projektet genom att köra kommandot ```npm start```

### Författare
Sebastian Hällman