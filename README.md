# Foothold

Foothold er en enkel React Native-prototype med fem fiktive jobs og tre skærme: joboversigt, jobbeskrivelse og ansøgning.

## Start

Installer først projektets pakker:

`npm install`

Start derefter projektet:

`npm start`

For at starte direkte i browseren:

`npm run web`

Appen kan også åbnes på en telefon med Expo Go ved at scanne QR-koden fra terminalen.

## Filer

* `App.js`: Indeholder jobdata, navigation, jobkort og de tre skærme. Kommentarer i filen viser, hvor de forskellige dele starter.
* `styles.js`: Indeholder appens styling og farver.
* `index.js`: Starter appen med Expo.
* `app.json`, `package.json` og `package-lock.json`: Indeholder projektets opsætning og nødvendige pakker.

## Kode og brugerfeedback

`FlatList` viser de fem jobs fra et array. `JobCard` genbruges for hvert job og modtager information om jobbet og knappens funktion gennem props.

`navigation.navigate` bruges til at åbne en ny skærm med jobbets ID. `find` bruges derefter til at finde det valgte job, mens `map` bruges til at vise jobbets arbejdsopgaver.

Ansøgningsformularen bruger `TextInput` og `useState` til navn, e-mail og en kort ansøgningstekst. En `if`-sætning kontrollerer, at alle felterne er udfyldt.

Når brugeren sender ansøgningen, vises kun en lokal bekræftelse. Oplysningerne bliver ikke sendt til en virksomhed eller gemt permanent.

Brugerinterviewene viste blandt andet et uklart formål, et ønske om filtrering og et behov for mere konkrete arbejdsopgaver. Prototypen bruger derfor betegnelsen **jobs** og viser konkrete arbejdsopgaver i jobbeskrivelserne.

Filterknappen er på nuværende tidspunkt kun visuel og er derfor deaktiveret. Filtrering efter eksempelvis lokation eller jobtype er en mulighed for videreudvikling på baggrund af Gabriels feedback.

Den enkle ansøgningsformular er bevaret, da begge interviewpersoner generelt vurderede denne del positivt.

## Demovideo

Demovideo med en kort gennemgang af appen:

https://www.youtube.com/watch?v=Tz-rWQ_6BpA

