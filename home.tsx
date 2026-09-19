import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.brand}>Football<Text style={styles.red}>Hub</Text></Text><Text style={styles.icon}>♡</Text></View>
      <View style={styles.empty}><Text style={styles.title}>Your football feed</Text><Text style={styles.subtitle}>Posts from people you follow will appear here.</Text><Pressable style={styles.button} onPress={() => router.push('/create')}><Text style={styles.buttonText}>Create your first post</Text></Pressable></View>
      <View style={styles.nav}><Text style={styles.navItem}>⌂</Text><Text style={styles.navItem}>⌕</Text><Text style={styles.navItem} onPress={() => router.push('/create')}>＋</Text><Text style={styles.navItem}>♡</Text><Text style={styles.navItem}>◯</Text></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 20, paddingTop: 60, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  brand: { color: theme.colors.text, fontSize: 24, fontWeight: '800' }, red: { color: theme.colors.primary }, icon: { color: theme.colors.text, fontSize: 28 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }, title: { color: theme.colors.text, fontSize: 24, fontWeight: '700', textAlign: 'center' }, subtitle: { color: theme.colors.muted, textAlign: 'center', marginTop: 10 },
  button: { backgroundColor: theme.colors.primary, padding: 15, borderRadius: 10, marginTop: 24 }, buttonText: { color: theme.colors.text, fontWeight: '700' },
  nav: { flexDirection: 'row', justifyContent: 'space-around', padding: 18, borderTopWidth: 1, borderTopColor: theme.colors.border }, navItem: { color: theme.colors.text, fontSize: 25 }
});
