import { Pressable, Text } from 'react-native';
import { styles } from '../styles/styles';

type Props = { label: string; active: boolean; onPress: () => void };

export default function FilterButton({ label, active, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={({ pressed }) => [styles.filter, active && styles.filterActive, pressed && styles.pressed]}
    >
      <Text style={[styles.filterText, active && styles.filterTextActive]}>{label}</Text>
    </Pressable>
  );
}
