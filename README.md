# Foothold

En enkel universitetsprototype med fem fiktive jobs, byfilter og en lokal ansøgningsformular.

## Start

Installér Node.js LTS, hvis det ikke allerede findes. Kør derefter i projektmappen:

```sh
npm install
npm start
```

Tryk `w` for at åbne i browseren, eller brug `npm run web`.
På telefon kan du bruge Expo Go, der understøtter projektets Expo SDK 55.
Browseren er også velegnet til at præsentere prototypen.

## Koden

- `app/_layout.tsx`: Expo Router og skærmenes overskrifter.
- `app/index.tsx`: jobliste og filter.
- `app/job/[id].tsx`: beskrivelse og konkrete arbejdsopgaver.
- `app/apply/[id].tsx`: formular og kvittering.
- `components/JobCard.tsx`: et genbrugeligt jobkort.
- `components/FilterButton.tsx`: en filterknap.
- `data/jobs.ts`: alle fem jobs og deres TypeScript-type.
- `styles/styles.ts`: farver og styling med StyleSheet.

Filteret gemmer den valgte by med useState. Arrayets filter-metode viser jobs i den valgte by, eller alle jobs når Alle er valgt.

Expo Router bruger filerne i app-mappen som skærme. router.push åbner en skærm med jobbets id. useLocalSearchParams læser id, og find henter det tilsvarende job fra jobs.ts.

Formularen bruger useState til navn, e-mail, kort tekst og kvittering. Den tjekker blot, at felterne er udfyldt, og at e-mailen har et enkelt gyldigt format. Send-knappen ændrer sent til true. Oplysningerne sendes ikke til nogen server og gemmes ikke permanent.

SafeAreaView sørger for afstand til telefonens systemområder. ScrollView og KeyboardAvoidingView gør formularen brugbar på mindre skærme med tastaturet åbent. De øvrige UI-elementer er React Natives egne komponenter.

## Tjek

```sh
npm run typecheck
npx expo install --check
npx expo export --platform web
```

Manuel gennemgang:
1. Alle viser 5 jobs, København 3 og Aarhus 2.
2. Åbn et job, og tjek titel, virksomhed, by, kategori og arbejdsopgaver.
3. Tryk Ansøg nu, og tjek at det samme job vises.
4. Tomme eller ugyldige felter skal vise en fejl.
5. Udfyld formularen, send, og se "Din ansøgning er sendt ✓".
6. Gå tilbage til jobs.

## Start paa denne Windows-computer

Koer .\start.cmd fra projektmappen. Den finder ogsaa den lokale Node.js-installation, som blev brugt til at kontrollere projektet. Tryk w i Expo-terminalen for at aabne browseren.

