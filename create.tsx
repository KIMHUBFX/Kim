import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { theme } from '@/themes';

export default function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Post</Text>

      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Media preview</Text>
      </View>

      <Pressable style={styles.secondary}>
        <Text style={styles.secondaryText}>Choose from gallery</Text>
      </Pressable>

      <TextInput
        style={styles.input}
        placeholder="Write a caption..."
        placeholderTextColor={theme.colors.muted}
        multiline
      />

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Share</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 24,
    paddingTop: 60,
  },

  heading: {
    color: theme.colors.text,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 24,
  },

  placeholder: {
    height: 240,
    backgroundColor: theme.colors.surfaceAlt,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    color: theme.colors.muted,
  },

  secondary: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
  },

  secondaryText: {
    color: theme.colors.text,
  },

  input: {
    backgroundColor: theme.colors.surfaceAlt,
    color: theme.colors.text,
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    minHeight: 90,
  },

  button: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: theme.colors.text,
    fontWeight: '700',
  },
});