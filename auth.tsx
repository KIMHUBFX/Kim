import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { theme } from '@/themes';
import { supabase } from '@/supabase';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(true);
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!email || !password) {
      Alert.alert(
        'Missing details',
        'Enter your email and password.'
      );
      return;
    }

    setLoading(true);

    const result = signUp
      ? await supabase.auth.signUp({
          email,
          password,
        })
      : await supabase.auth.signInWithPassword({
          email,
          password,
        });

    setLoading(false);

    if (result.error) {
      Alert.alert(
        'Authentication error',
        result.error.message
      );
      return;
    }

    Alert.alert(
      'Success',
      signUp
        ? 'Check your email if confirmation is required.'
        : 'Welcome back!'
    );

    router.replace('/home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>
        Football<Text style={styles.red}>Hub</Text>
      </Text>

      <Text style={styles.heading}>
        {signUp ? 'Create your account' : 'Welcome back'}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor={theme.colors.muted}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.colors.muted}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.button}
        onPress={submit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading
            ? 'Please wait...'
            : signUp
              ? 'Sign Up'
              : 'Log In'}
        </Text>
      </Pressable>

      <Pressable onPress={() => setSignUp(!signUp)}>
        <Text style={styles.switch}>
          {signUp
            ? 'Already have an account? Log in'
            : "Don't have an account? Sign up"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 24,
    justifyContent: 'center',
  },

  brand: {
    color: theme.colors.text,
    fontSize: 34,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 40,
  },

  red: {
    color: theme.colors.primary,
  },

  heading: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },

  input: {
    backgroundColor: theme.colors.surfaceAlt,
    color: theme.colors.text,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },

  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    color: theme.colors.text,
    fontWeight: '700',
  },

  switch: {
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 24,
  },
});