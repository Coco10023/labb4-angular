# Laboration 4 - Angular och HttpClient

Detta projekt är en Angular-applikation som hämtar kursdata från en extern JSON-fil med hjälp av Angular HttpClient.

Applikationen presenterar kurser i tabellformat och innehåller funktioner för sortering och filtrering av data.

## Funktioner

- Hämtar kursdata från extern JSON-fil
- Visar kurskod, kursnamn och progression i tabell
- Sortering på:
  - kurskod
  - kursnamn
  - progression
- Filtrering/sökning på kurskod och kursnamn
- Dynamisk uppdatering utan sidomladdning
- Byggd med Angular och TypeScript

## Teknologier

- Angular
- TypeScript
- HTML
- CSS
- HttpClient
- GitHub Actions
- GitHub Pages

## JSON-källa

Data hämtas från:

https://webbutveckling.miun.se/files/ramschema.json

## Publicerad webbplats

https://coco10023.github.io/labb4-angular/ 

## Installation och körning

Klona repot:

```bash
git clone https://github.com/Coco10023/labb4-angular.git
```

Installera dependencies: npm install

Starta utvecklingsserver: ng serve 

Öppna i webbläsaren: http://localhost:4200 

## Projektstruktur

services/course.service.ts

Hämtar data från JSON-filen med HttpClient.

models/course.ts

Interface för kursobjekt.

app.ts

Hanterar data, sortering och filtrering.

app.html

Visar tabellen och sökfältet.

app.css

Styling för användargränssnittet.
