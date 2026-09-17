import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JobCard from '../components/JobCard';
import FilterButton from '../components/FilterButton';
import { City, jobs } from '../data/jobs';
import { styles } from '../styles/styles';

const cityFilters: City[] = ['København', 'Aarhus'];

export default function HomeScreen() {
  const [filter, setFilter] = useState<'Alle' | City>('Alle');
  const visibleJobs = jobs.filter(job => filter === 'Alle' || job.location === filter);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={visibleJobs}
        keyExtractor={job => job.id}
        renderItem={({ item }) => <JobCard job={item} />}
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
              <Text style={styles.count}>{visibleJobs.length} jobs</Text>
            </View>
            <Text style={styles.sectionDescription}>Nye begyndelser, tæt på dig.</Text>
            <View style={styles.filters}>
              {cityFilters.map(city => (
                <FilterButton key={city} label={city} active={filter === city} onPress={() => setFilter(city)} />
              ))}
              <FilterButton label="Filtrer" active={false} onPress={() => {}} />
            </View>
          </View>
        }
        ListFooterComponent={<Text style={styles.footerNote}>En lille start kan føre til noget stort.{'\n'}Foothold · Prototype med fiktive jobs</Text>}
      />
    </SafeAreaView>
  );
}
