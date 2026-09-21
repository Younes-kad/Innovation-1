# Foothold

En enkel React Native-prototype med fem fiktive jobs og tre skærme: joboversigt, jobbeskrivelse og ansøgning.

## Start

Kør `npm install` og derefter `npm start`. 
`npm run web` starter direkte til web.
 brug Expo Go på en telefon ved at scanne QR koden. 

## Få filer

- `App.js`: jobdata, navigation, jobkort og alle tre skærme. Kommentarer viser, hvor hver del starter.
- `styles.js`: farver og styling i en separat fil.
- `index.js`: starter appen med Expo.
- `app.json`, `package.json` og `package-lock.json`: projektets opsætning og pakker.




## Kode og brugerfeedback

FlatList viser de fem jobs fra et array/liste. JobCard genbruges for hvert job og modtager jobbet og knappens funktion som props. navigation.navigate åbner en ny skærm med jobbets id. find henter jobbet, og map viser arbejdsopgaverne.

Formularen bruger TextInput og useState til navn, e-mail og en kort tekst. En if-sætning kontrollerer, at felterne er udfyldt. Send viser kun en lokal kvittering: oplysningerne bliver hverken sendt til virksomheder eller gemt permanent.

Interviewene pegede på et uklart formål, et ønske om filtrering og behov for konkrete arbejdsopgaver. Prototypen bruger derfor betegnelsen jobs og viser konkrete arbejdsopgaver. Filtrer-knappen er kun visuel og er deaktiveret. Den filtrerer ikke listen. Filtrering efter lokation eller jobtype er et forslag til videreudvikling på baggrund af Gabriels feedback. Den enkle formular er bevaret i tråd med begge interviewpersoners positive vurderinger.


## Demovideo

Demovideo: (Kort rejse igennem app)
https://www.youtube.com/watch?v=Tz-rWQ_6BpA&feature=youtu.be

Aflever koden som GitHub-link og zip uden node_modules sammen med rapport og demovideo.
