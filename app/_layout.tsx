import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../styles/styles';

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.ink,
        headerShadowVisible: false,
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: colors.background },
      }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="job/[id]" options={{ title: 'Jobmulighed', headerBackTitle: 'Jobs' }} />
        <Stack.Screen name="apply/[id]" options={{ title: 'Din ansøgning', headerBackTitle: 'Tilbage' }} />
      </Stack>
    </>
  );
}
