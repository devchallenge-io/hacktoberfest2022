import * as React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Page from '../components/Page';
import { IMAGE_URL } from '../context/MovieContext';
import { useMovie } from '../hooks/useMovie';

export default function Details({ navigation }) {
  const {
    isLoaded,
    selectedMovie,
    categoriesList
  } = useMovie()

  if (!isLoaded) return (
    <Page>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={32} color="FFF" />
      </View>
    </Page >
  )

  return (
    <Page>
      <Image source={{ uri: IMAGE_URL + selectedMovie.backdrop }} style={styles.detailImage} />
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Text style={styles.title}>{selectedMovie.title}</Text>
        <View style={{ flexDirection: "row", marginVertical: 16 }}>
          <View style={styles.chipContainer}>
            <Text style={styles.chipText}>{new Date(selectedMovie.dtLancamento).getFullYear()}</Text>
          </View>
          {
            selectedMovie.genre_ids.map(genre => (
              <View key={genre} style={styles.chipContainer}>
                <Text style={styles.chipText}>
                  {
                    categoriesList.filter(cat => (cat.id === genre))[0].name
                  }
                </Text>
              </View>
            ))
          }
        </View>
        <Text style={styles.subtitle}>Sinopse</Text>
        <Text style={styles.description}>
          {selectedMovie.description}
        </Text>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "normal",
    fontSize: 24,
    color: "#FFF",
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    marginBottom: 8,
  },
  description: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#FFF"
  },
  chipContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#29293C",
    borderRadius: 32,
    marginRight: 8
  },
  chipText: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#FFF"
  },
  detailImage: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2,
    marginBottom: 16,
  },
})
