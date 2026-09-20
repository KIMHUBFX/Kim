import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { theme } from '@/themes';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>
          eFootball<Text style={styles.red}>Hub</Text>
        </Text>

        <Text style={styles.icon}>♡</Text>
      </View>

      {/* Feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feed}
      >
        {/* Welcome */}
        <Text style={styles.sectionTitle}>eFootball Community</Text>

        <Text style={styles.sectionSubtitle}>
          Discover matches, squads, players and the latest eFootball content.
        </Text>

        {/* First post */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>E</Text>
            </View>

            <View>
              <Text style={styles.username}>eFootballHub</Text>
              <Text style={styles.time}>Just now</Text>
            </View>
          </View>

          <View style={styles.postImage}>
            <Text style={styles.imageText}>⚽</Text>
            <Text style={styles.imageTitle}>eFootball</Text>
            <Text style={styles.imageSubtitle}>
              YOUR FOOTBALL. YOUR WAY.
            </Text>
          </View>

          <View style={styles.actions}>
            <Text style={styles.action}>♡</Text>
            <Text style={styles.action}>💬</Text>
            <Text style={styles.action}>↗</Text>
          </View>

          <Text style={styles.likes}>0 likes</Text>

          <Text style={styles.caption}>
            Welcome to eFootballHub! 🔥
          </Text>

          <Text style={styles.captionMuted}>
            Share your squads, goals, players and eFootball moments.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.nav}>
        <Text style={styles.navItem}>⌂</Text>

        <Text style={styles.navItem}>⌕</Text>

        <Pressable onPress={() => router.push('/create')}>
          <Text style={styles.addButton}>＋</Text>
        </Pressable>

        <Text style={styles.navItem}>♡</Text>

        <Text style={styles.navItem}>◯</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },

  brand: {
    color: theme.colors.text,
    fontSize: 25,
    fontWeight: '800',
  },

  red: {
    color: theme.colors.primary,
  },

  icon: {
    color: theme.colors.text,
    fontSize: 28,
  },

  feed: {
    padding: 16,
    paddingBottom: 30,
  },

  sectionTitle: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '800',
  },

  sectionSubtitle: {
    color: theme.colors.muted,
    marginTop: 6,
    marginBottom: 18,
    lineHeight: 20,
  },

  post: {
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 14,
    overflow: 'hidden',
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  username: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 15,
  },

  time: {
    color: theme.colors.muted,
    fontSize: 12,
    marginTop: 2,
  },

  postImage: {
    height: 230,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageText: {
    fontSize: 45,
  },

  imageTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 8,
  },

  imageSubtitle: {
    color: '#aaa',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 4,
  },

  actions: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 12,
    gap: 20,
  },

  action: {
    color: theme.colors.text,
    fontSize: 25,
  },

  likes: {
    color: theme.colors.text,
    fontWeight: '700',
    paddingHorizontal: 14,
    marginTop: 5,
  },

  caption: {
    color: theme.colors.text,
    paddingHorizontal: 14,
    marginTop: 8,
    fontWeight: '600',
  },

  captionMuted: {
    color: theme.colors.muted,
    paddingHorizontal: 14,
    paddingTop: 5,
    paddingBottom: 15,
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },

  navItem: {
    color: theme.colors.text,
    fontSize: 25,
  },

  addButton: {
    color: theme.colors.primary,
    fontSize: 32,
    fontWeight: '700',
  },
});