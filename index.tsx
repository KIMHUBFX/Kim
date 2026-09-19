import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { theme } from '@/constants/theme';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>F<Text style={styles.logoRed}>H</Text></Text>
      <Text style={styles.title}>Football<Text style={styles.red}>Hub</Text></Text>
      <Text style={styles.subtitle}>Football brings us together</Text>
      <View style={styles.spacer} />
      <Pressable style={styles.primaryButton} onPress={() => router.push('/auth')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
      <Pressable style={styles.secondaryButton} onPress={() => router.push('/auth')}>
        <Text style={styles.secondaryText}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: 24, justifyContent: 'center' },
  logo: { fontSize: 96, fontWeight: '900', color: theme.colors.text, textAlign: 'center' },
  logoRed: { color: theme.colors.primary },
  title: { color: theme.colors.text, fontSize: 34, fontWeight: '800', textAlign: 'center' },
  red: { color: theme.colors.primary },
  subtitle: { color: theme.colors.muted, textAlign: 'center', marginTop: 8, textTransform: 'uppercase', letterSpacing: 1 },
  spacer: { height: 120 },
  primaryButton: { backgroundColor: theme.colors.primary, padding: 16, borderRadius: 12, alignItems: 'center' },
  secondaryButton: { borderColor: theme.colors.text, borderWidth: 1, padding: 15, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  buttonText: { color: theme.colors.text, fontSize: 16, fontWeight: '700' },
  secondaryText: { color: theme.colors.text, fontSize: 16, fontWeight: '700' }
});
