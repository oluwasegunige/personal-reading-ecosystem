import { Link } from 'expo-router';
import type { ReactElement } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
export default function Home(): ReactElement {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Personal Library</Text>
      <Text style={styles.copy}>Scaffold only — no product features are implemented yet.</Text>
      <View>
        <Link href="/library" style={styles.link}>
          Library
        </Link>
        <Link href="/settings" style={styles.link}>
          Settings
        </Link>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, padding: 16, backgroundColor: '#F9F8F6' },
  title: { marginTop: 32, color: '#1A1C1D', fontSize: 24, fontWeight: '600' },
  copy: { marginVertical: 16, color: '#5C6166' },
  link: { display: 'flex', marginVertical: 8, color: '#2D5A47', fontSize: 16 },
});
