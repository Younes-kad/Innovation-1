import { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors, styles } from './styles';


// Fiktive jobs til prototypen.

// Alle virksomheder og jobs er fiktive.
const jobs = [
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


// Navigation mellem appens tre sk?rme.

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.ink,
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
        }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Job" component={JobScreen} options={{ title: 'Jobmulighed', headerBackTitle: 'Jobs' }} />
          <Stack.Screen name="Apply" component={ApplyScreen} options={{ title: 'Din ansøgning', headerBackTitle: 'Tilbage' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// 1. Joboversigt

const cityFilters = ['København', 'Aarhus'];

function HomeScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={jobs}
        keyExtractor={job => job.id}
        renderItem={({ item }) => <JobCard job={item} onPress={() => navigation.navigate('Job', { id: item.id })} />}
        ListHeaderComponent={
          <View>
            <View style={styles.brandRow}>
              <View style={styles.companyRow}>
                <View style={styles.brandMark}><Text style={styles.brandMarkText}>f.</Text></View>
                <Text style={styles.brandName}>foothold</Text>
              </View>
              <Text style={styles.brandCaption}>Små skridt. Nye muligheder.</Text>
            </View>
            <View style={styles.hero}>
              <View style={styles.heroLabelRow}>
                <View style={styles.dot} />
                <Text style={styles.heroLabel}>DIT NÆSTE SKRIDT STARTER HER</Text>
              </View>
              <Text style={styles.heroTitle}>Store muligheder.{'\n'}Din første fod indenfor.</Text>
              <Text style={styles.heroDescription}>Find et job, hvor du kan lære, bidrage og vokse. Du behøver ikke have prøvet det hele før.</Text>
              <View style={styles.heroBottom}>
                <Text style={styles.heroTag}>Nysgerrighed er en god start</Text>
                <Text style={styles.heroArrow} accessibilityElementsHidden>↗</Text>
              </View>
            </View>
            <View style={styles.sectionHeading}>
              <Text style={styles.sectionTitle}>Find dit næste job</Text>
              <Text style={styles.count}>{jobs.length} jobs</Text>
            </View>
            <Text style={styles.sectionDescription}>Nye begyndelser, tæt på dig.</Text>
            <View style={styles.filters}>
              {/* Visuelle muligheder. Filtrering kan udvikles senere. */}
              <View style={styles.filterOptions}>
                {['København', 'Aarhus', 'IT', 'Marketing'].map(label => (
                  <Pressable key={label} style={styles.filter} accessibilityRole="button" accessibilityState={{ disabled: true }} disabled>
                    <Text style={styles.filterText}>{label}</Text>
                  </Pressable>
                ))}
              </View>
              <Pressable style={[styles.filter, styles.extraFilter]} accessibilityRole="button" accessibilityState={{ disabled: true }} disabled>
                <Text style={styles.extraFilterText}>Filtrer</Text>
              </Pressable>
            </View>
          </View>
        }
        ListFooterComponent={<Text style={styles.footerNote}>En lille start kan føre til noget stort.{'\n'}Foothold · Prototype med fiktive jobs</Text>}
      />
    </SafeAreaView>
  );
}

// Jobkort genbruges i listen.

function JobCard({ job, onPress }) {
  return (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <View style={styles.companyRow}>
          <View style={[styles.logo, { backgroundColor: job.background }]}>
            <Text style={[styles.logoText, { color: job.color }]}>{job.initials}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
        <Text style={styles.smallArrow} accessibilityElementsHidden>↗</Text>
      </View>
      <Text style={styles.cardTitle}>{job.title}</Text>
      <Text style={styles.cardDescription} numberOfLines={3}>{job.description}</Text>
      <View style={styles.cardFooter}>
        <View style={[styles.badge, { backgroundColor: job.background }]}>
          <Text style={[styles.badgeText, { color: job.color }]}>{job.category}</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={'Se job: ' + job.title}
          onPress={onPress}
          style={({ pressed }) => [styles.smallButton, pressed && styles.pressed]}
        >
          <Text style={styles.smallButtonText}>Se job  →</Text>
        </Pressable>
      </View>
    </View>
  );
}

// 2. Jobbeskrivelse

function JobScreen({ navigation, route }) {
  const { id } = route.params;
  const job = jobs.find(item => item.id === id);

  if (!job) {
    return <View style={styles.empty}><Text style={styles.sectionTitle}>Jobbet blev ikke fundet</Text><Pressable accessibilityRole="button" style={styles.primaryButton} onPress={() => navigation.popToTop()}><Text style={styles.primaryButtonText}>Tilbage til jobs</Text></Pressable></View>;
  }

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.pageContent}>
        <View style={styles.detailTop}>
          <View style={[styles.largeLogo, { backgroundColor: job.background }]}>
            <Text style={[styles.largeLogoText, { color: job.color }]}>{job.initials}</Text>
          </View>
          <Text style={styles.eyebrow}>{job.company}</Text>
          <Text style={styles.pageTitle}>{job.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.location}>{job.location}</Text>
            <View style={[styles.badge, { backgroundColor: job.background }]}>
              <Text style={[styles.badgeText, { color: job.color }]}>{job.category}</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailCard}>
          <Text style={styles.sectionTitle}>Om jobbet</Text>
          <Text style={styles.body}>{job.description}</Text>
          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>Det kommer du til at lave</Text>
          {job.tasks.map((task, index) => (
            <View key={task} style={styles.taskRow}>
              <View style={styles.taskNumber}><Text style={styles.taskNumberText}>{index + 1}</Text></View>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </View>
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Dit første skridt behøver ikke være stort.</Text>
          <Text style={styles.noteText}>Fortæl kort om dig selv, og hvorfor jobbet vækker din nysgerrighed.</Text>
        </View>
        <Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]} onPress={() => navigation.navigate('Apply', { id: job.id })}>
          <Text style={styles.primaryButtonText}>Ansøg nu  →</Text>
        </Pressable>
        <Text style={styles.helperCentered}>En kort ansøgning er en god start.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// 3. Ans?gning og lokal kvittering

function ApplyScreen({ navigation, route }) {
  const { id } = route.params;
  const job = jobs.find(item => item.id === id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  function sendApplication() {
    if (!name.trim() || !about.trim() || !email.trim()) {
      setError('Udfyld dit navn, din e-mail og lidt om dig selv.');
      return;
    }
    setError('');
    setSent(true); // Kun lokal visning. Ingen oplysninger sendes eller gemmes.
  }

  if (!job) {
    return <View style={styles.empty}><Text style={styles.sectionTitle}>Jobbet blev ikke fundet</Text><Pressable accessibilityRole="button" style={styles.primaryButton} onPress={() => navigation.popToTop()}><Text style={styles.primaryButtonText}>Tilbage til jobs</Text></Pressable></View>;
  }

  if (sent) {
    return (
      <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
        <View style={styles.success}>
          <View style={styles.successIcon}><Text style={styles.successCheck}>✓</Text></View>
          <Text style={styles.eyebrow}>FØRSTE SKRIDT ER TAGET</Text>
          <Text style={styles.successTitle} accessibilityRole="header" accessibilityLiveRegion="polite">Din ansøgning er sendt ✓</Text>
          <Text style={styles.successText}>Tak, {name.trim()}! Du har nu prøvet at ansøge som {job.title} hos {job.company}.</Text>
          <Text style={styles.helperCentered}>Dette er en prototype. Din ansøgning er ikke sendt til en virksomhed.</Text>
          <Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]} onPress={() => navigation.popToTop()}>
            <Text style={styles.primaryButtonText}>Tilbage til jobs  →</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={['bottom', 'left', 'right']}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView contentContainerStyle={styles.pageContent} keyboardShouldPersistTaps="handled">
          <Text style={styles.eyebrow}>EN NY BEGYNDELSE</Text>
          <Text style={styles.pageTitle}>Lad os høre lidt{'\n'}om dig.</Text>
          <Text style={styles.body}>Du behøver ikke et langt CV. Start med at fortælle, hvem du er.</Text>
          <View style={styles.applicationJob}>
            <View style={[styles.logo, { backgroundColor: job.background }]}><Text style={[styles.logoText, { color: job.color }]}>{job.initials}</Text></View>
            <View style={styles.flex}><Text style={styles.company}>{job.title}</Text><Text style={styles.location}>{job.company} · {job.location}</Text></View>
          </View>
          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.inputLabel}>Navn</Text>
              <TextInput accessibilityLabel="Navn" style={styles.input} placeholder="Dit fulde navn" placeholderTextColor={colors.placeholder} value={name} onChangeText={setName} autoComplete="name" />
            </View>
            <View style={styles.field}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput accessibilityLabel="E-mail" style={styles.input} placeholder="dig@eksempel.dk" placeholderTextColor={colors.placeholder} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" autoCorrect={false} autoComplete="email" />
            </View>
            <View style={styles.field}>
              <Text style={styles.inputLabel}>Kort om dig</Text>
              <TextInput accessibilityLabel="Kort om dig" style={[styles.input, styles.textArea]} placeholder="Hvem er du, og hvad gør dig nysgerrig på jobbet?" placeholderTextColor={colors.placeholder} value={about} onChangeText={setAbout} multiline textAlignVertical="top" />
              <Text style={styles.helper}>Et par sætninger er helt fint.</Text>
            </View>
            {error ? <Text style={styles.error} accessibilityRole="alert">{error}</Text> : null}
            <Pressable accessibilityRole="button" style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]} onPress={sendApplication}>
              <Text style={styles.primaryButtonText}>Send ansøgning  →</Text>
            </Pressable>
          </View>
          <Text style={styles.helperCentered}>Prototype · Dine oplysninger bliver ikke sendt eller gemt.</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
