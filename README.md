# NemCV (Easy Resume)

Prototype of an online resume maker, made in a week. Inspired by Squarespace, the resumes are editable while previewing the page. A small framework around web components was built and used in the project, so the code is pretty modular. 

# NemCV (in Danish)

![](https://i.imgur.com/bvPjS2C.png)

Dette projekt er oprettet til faget **Systematisk Design af Brugergrænseflader**
på bachelor-studiet i **Softwareudvikling** hos **IT-universitetet i København**.  
Projektet er udarbejdet i HTML, CSS og JS.

Projektet er udarbejdet af:
* Jakob Israelsen
* Jonas Lindenskov Nielsen
* Matilde Hørlyk
* Simon Green Kristensen
* Tobias Løfgren

## Opsætning af programmet
Da dette program er en simpel webside kan den køre med flere forskellige servere (dog ikke med file://).
Her ses forskellige måder en server nemmest kan startes. Alle kommandoer antager en terminal der er åbnet i projektets rod-mappe. 
Det skal dog nævnes at hjemmesidens hastighed kan variere meget baseret på valg af webserver. 
Vi anbefaler docker eller NodeJS for den bedste oplevelse.

### Docker Compose
Hvis docker-compose (og docker) er installeret på din maskine kan hjemmesiden køres med denne kommando.
```
docker-compose up -d
```

Hjemmesiden kan herefter tilgås på addressen `localhost`, så længe `docker-compose` programmet kører i terminalen.

For at opdatere konfigurationen kan docker-compose "bygge" siden med følgende kommando:
```
docker-compose build
```

### Node JS
NPM Pakken `http-server` kan bruges som en simpel web server med NodeJS.
Pakken kan installeres med én af følgende kommandoer:
```
yarn global install http-server@0.9.0
```
eller
```
npm install -g http-server@0.9.0
```

Serveren kan herefter startes med følgende kommando.
```
http-server
```
Hjemmesiden kan herefter tilgås på addressen `localhost:8080`, så længe `http-server`-programmet kører i terminalen.

### Python 2
Python 2 har en indbygget pakke, kaldet `SimpleHTTPServer`, som fungerer som en simpel web server. Denne kan køres med følgende kommando:
```
python -m SimpleHTTPServer
```

Hjemmesiden kan herefter tilgås på addressen `localhost:8000`, så længe `SimpleHTTPServer` programmet kører i terminalen.

### Python 3
```
python -m http.server
```

Hjemmesiden kan herefter tilgås på addressen `localhost:8000`, så længe `http.server` programmet kører i terminalen.
