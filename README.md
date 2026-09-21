# Foothold

En simpel jobapp til unge, lavet med React Native, JavaScript og Expo. Appen har tre skærme: joboversigt, jobbeskrivelse og ansøgning.

Jobbene er fiktive. Ansøgningen viser kun en lokal kvittering og bliver ikke sendt eller gemt. Filterknapperne er kun visuelle.

## Start

Installér Node.js, og kør i projektmappen:

```sh
npm install
npm start
```

Tryk `w` for browseren. På denne Windows-computer kan du også bruge `start.cmd`.

## Filer

- `App.js`: jobdata, skærme, navigation og formular.
- `styles.js`: styling i en separat fil.
- `index.js`: starter appen.
- `app.json`, `package.json` og `package-lock.json`: opsætning og pakker.

`FlatList` viser joblisten. `JobCard` genbruges til hvert job. React Navigation åbner skærmene, og `useState` holder styr på formularen.

## Links

- Kode: https://github.com/Younes-kad/Innovation-1
- **Demovideo: MANGLER – indsæt link inden aflevering.**

## Tjekliste inden aflevering

Baseret på *Godkendelsesopgave 1 INNT - E26-1 (1).docx*.
**Individuel aflevering på Canvas senest 21. september kl. 23.55.**

### Rapport og brugerinddragelse – krav

- [ ] Rapporten er højst **5 normalsider**. Programkode og demovideo vedlægges derudover.

 APA kan bruges til kildehenvisninger.

### Kode – krav

- [ ] Mobilapplikation i **React Native**.
- [ ] Mindst **3 views** (`View` bruges flere steder i `App.js`).
- [ ] Mindst **3 screens** (Home, Job og Apply).
- [ ] Mindst **2 knapper**, hvor mindst én har en funktion (fx Se job og Ansøg nu).
- [ ] Mindst **1 liste** (`FlatList` viser jobs).
- [ ] Styling i en **separat fil** (`styles.js`).
- [ ] En **README med link til demovideo**.

### Det skal afleveres – krav

- [ ] Skriftlig rapport på Canvas.
- [ ] Koden som **GitHub-link**. Kontrollér, at den endelige kode ligger der, og at bedømmeren har adgang.
- [ ] Koden også som **zip-fil uden `node_modules`**, vedlagt som kodebilag.
- [ ] En **videodemonstration** med link i README. Videoen kan fx ligge på GitHub eller YouTube.

### Kodepakken – praktisk oprydning

- [ ] Medtag `App.js`, `styles.js`, `index.js`, `app.json`, `package.json`, `package-lock.json` og `README.md`.
- [ ] Behold gerne `.gitignore`. `start.cmd` er valgfri.
- [ ] Udelad `node_modules` fra zip-filen – det er et udtrykkeligt krav.
- [ ] Udelad også `.expo`, `dist` og `.git` fra zip-filen – de er ikke nødvendige for at køre koden.
- [ ] De tomme mapper `app`, `components`, `data` og `styles` kan udelades. Behold **filen `styles.js`**.
- [ ] Udelad kladder og dubletter fra afleveringspakken.

Du behøver ikke slette disse mapper fra din computer. Pak kun de relevante filer i en ny zip.

### Sidste kontrol – anbefalinger

- [ ] Afprøv kodepakken i en ny mappe med `npm install` og `npm start`.
- [ ] Test jobliste → jobbeskrivelse → ansøgning → kvittering samt tilbageknapper og tomme felter.
- [ ] Vis de tre skærme og det fungerende flow i videoen. Fortæl, at jobs og ansøgning er en prototype.
- [ ] Rapporten beskriver den faktiske kode: JavaScript, React Navigation og filtre uden funktion.
- [ ] Du kan forklare komponenter, props, `useState`, `FlatList` og navigation med egne ord.
- [ ] Brug interviewbilag, mockup og temakodning som relevant dokumentation. Dokumentet kræver ikke specifikt fulde transskriptioner.
- [ ] Åbn alle endelige filer og links, og kontrollér kvitteringen fra Canvas.

**Ikke præciseret i opgavebeskrivelsen:** definitionen af en normalside; om forside, litteraturliste og interviewbilag tæller med; videoens længde; rapportens filformat; samt særlige AI-regler. Tjek fagets øvrige vejledning på Canvas for disse punkter. Antag ikke, at interviewbilag automatisk er uden for sidegrænsen.
