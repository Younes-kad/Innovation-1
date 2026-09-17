export type City = 'København' | 'Aarhus';
export type Job = {
  id: string;
  title: string;
  company: string;
  initials: string;
  location: City;
  category: string;
  color: string;
  background: string;
  description: string;
  tasks: string[];
};

// Alle virksomheder og jobs er fiktive.
export const jobs: Job[] = [
  {
    id: '1', title: 'Social Media Assistant', company: 'Studio Nord', initials: 'sn',
    location: 'København', category: 'Social media', color: '#68529B', background: '#F0EBF8',
    description: 'Har du øje for en god historie? Bliv en del af et lille kreativt team, og hjælp lokale brands med at finde deres stemme på sociale medier. Du får sparring undervejs og plads til dine egne idéer.',
    tasks: ['Lav opslag til Instagram og TikTok', 'Planlæg indhold i vores fælles kalender', 'Find billeder og skriv korte tekster'],
  },
  {
    id: '2', title: 'Junior Web Assistant', company: 'Pixel & Co.', initials: 'p.',
    location: 'Aarhus', category: 'Web & digital', color: '#346689', background: '#E9F1F8',
    description: 'Tag dine første skridt i den digitale verden. Hos Pixel & Co. hjælper du med at holde små virksomheders hjemmesider opdaterede. Du behøver ikke kunne det hele på forhånd — vi hjælper dig godt i gang.',
    tasks: ['Opdatér tekst og billeder på hjemmesider', 'Tjek at links og sider virker på mobil', 'Hjælp med enkle ændringer i hjemmesidens layout'],
  },
  {
    id: '3', title: 'Marketing Assistant', company: 'Grove', initials: 'g',
    location: 'København', category: 'Marketing', color: '#93602D', background: '#FBF0DF',
    description: 'Er du nysgerrig på, hvordan en idé bliver til en kampagne? Hjælp vores marketingteam med små, konkrete projekter, og få praktisk erfaring i en virksomhed med fokus på grønne hverdagsvalg.',
    tasks: ['Hjælp med at skrive nyhedsbreve', 'Find inspiration til nye kampagner', 'Saml resultater fra kampagner i et regneark'],
  },
  {
    id: '4', title: 'Content Creator', company: 'Forma', initials: 'fo',
    location: 'Aarhus', category: 'Kreativt', color: '#A25263', background: '#FAECEF',
    description: 'Elsker du at skabe noget, andre får lyst til at se? Hjælp Forma med billeder og korte videoer fra hverdagen i vores designstudio. Vi lægger vægt på nysgerrighed og gode idéer.',
    tasks: ['Optag korte videoer af vores produkter', 'Tag billeder til sociale medier', 'Planlæg indhold sammen med vores designer'],
  },
  {
    id: '5', title: 'IT Support Assistant', company: 'Hello Tech', initials: 'ht',
    location: 'København', category: 'IT & support', color: '#347360', background: '#E7F3EC',
    description: 'Bliv den hjælpsomme kollega, der gør teknologi lidt lettere. Du hjælper vores team med hverdagens IT-spørgsmål og lærer om udstyr og support sammen med en erfaren kollega.',
    tasks: ['Hjælp kolleger med enkle IT-spørgsmål', 'Klargør computere til nye medarbejdere', 'Skriv korte guides til de mest almindelige problemer'],
  },
];
