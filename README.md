# Foothold

En enkel React Native-prototype med fem fiktive jobs og tre skærme: joboversigt, jobbeskrivelse og ansøgning.

## Start

Kør `npm install` og derefter `npm start`. Tryk `w` for browseren, eller brug Expo Go på en kompatibel telefon. `npm run web` starter direkte til web. På Windows kan du også bruge `start.cmd`.

## Få filer

- `App.js`: jobdata, navigation, jobkort og alle tre skærme. Kommentarer viser, hvor hver del starter.
- `styles.js`: farver og styling i en separat fil, som opgaven kræver.
- `index.js`: starter appen med Expo.
- `app.json`, `package.json` og `package-lock.json`: projektets opsætning og pakker.

Tre skærme behøver ikke ligge i tre filer. HomeScreen, JobScreen og ApplyScreen er stadig hver sin skærm i React Navigation, men står samlet i App.js.

## Kode og brugerfeedback

FlatList viser de fem jobs fra et array. JobCard genbruges for hvert job og modtager jobbet og knappens funktion som props. navigation.navigate åbner en ny skærm med jobbets id. find henter jobbet, og map viser arbejdsopgaverne.

Formularen bruger TextInput og useState til navn, e-mail og en kort tekst. En if-sætning kontrollerer, at felterne er udfyldt. Send viser kun en lokal kvittering: oplysningerne bliver hverken sendt til virksomheder eller gemt permanent.

Interviewene pegede på et uklart formål, et ønske om filtrering og behov for konkrete arbejdsopgaver. Prototypen bruger derfor betegnelsen jobs og viser konkrete arbejdsopgaver. Filtrer-knappen er kun visuel og er deaktiveret. Den filtrerer ikke listen. Filtrering efter lokation eller jobtype er et forslag til videreudvikling på baggrund af Gabriels feedback. Den enkle formular er bevaret i tråd med begge interviewpersoners positive vurderinger.

Strukturen bygger på JavaScript, komponenter, useState, navigation, lister og separat StyleSheet fra [undervisningen](https://github.com/orgs/CBS-INNT-26/repositories). Tastatur- og safe-area-håndtering hjælper visningen på telefon.

## Demovideo

Demovideo er endnu ikke tilføjet. Indsæt linket før aflevering.

## Kontrol

Kør `npx expo export --platform web` for at kontrollere webbygningen.

Kontroller også manuelt:
1. Listen viser fem jobs, og Filtrer-knappen er synlig uden funktion.
2. Se job åbner det valgte job og viser arbejdsopgaverne.
3. Ansøg nu åbner formularen for samme job.
4. Tomme felter giver en fejl. Udfyldte felter giver en lokal kvittering.
5. Tilbage til jobs vender tilbage til listen. En ny ansøgning har tomme felter.
6. Afprøv tilbageknapper, rulning og tastatur på telefon.

Aflever koden som GitHub-link og zip uden node_modules sammen med rapport og demovideo.
