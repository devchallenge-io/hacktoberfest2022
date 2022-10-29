import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Page from '../components/Page';
import { IMAGE_URL } from '../context/MovieContext';
import { useMovie } from '../hooks/useMovie';

export default function Search() {
  const {
    isLoaded,
    searchList,
    handleSearch,
    setSelectedMovie,
    categoriesList
  } = useMovie()

  const [search, setSearch] = React.useState("");

  if (!isLoaded) return (
    <Page>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={32} color="FFF" />
      </View>
    </Page >
  )

  return (
    <Page>
      <View style={{ marginHorizontal: 20, marginVertical: 24, position: "relative" }}>
        <TextInput
          placeholderTextColor={"#ccc"}
          cursorColor={"#CCC"}
          color={"#CCC"}
          placeholder='Pesquise por titulos...'
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          onPress={() => handleSearch(search)}
          style={{
            position: "absolute", top: 0, right: 0, bottom: 0,
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 8
          }}>
          <Feather name="search" size={24} color={"#CCC"} />
        </TouchableOpacity>
      </View>

      {
        searchList.length === 0 ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>
              Nenhum filme encontrado
            </Text>
          </View>
        ) : (

          <ScrollView style={{ width: Dimensions.get('screen').width, paddingHorizontal: 20 }}>
            {
              searchList.map(movie => (
                <TouchableOpacity key={movie.id} onPress={() => setSelectedMovie(movie)} style={{ flex: 1, flexDirection: "row" }}>
                  <Image source={{ uri: IMAGE_URL + movie.backdrop }} style={styles.scrollImage} />
                  <View style={{ flex: 1, marginLeft: 8 }}>
                    <View>
                      <Text style={styles.title}>{movie.title}</Text>
                      <Text style={styles.subtitle}>{movie.description.length > 60 ? movie.description.substr(0, 59) + " [...]" : movie.description}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 16 }}>
                      <View style={styles.chipContainer}>
                        <Text style={styles.chipText}>{new Date(movie.dtLancamento).getFullYear()}</Text>
                      </View>
                      {
                        movie.genre_ids.map(genre => (
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
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        )
      }


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
  scrollImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 8,
  },
  input: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#29293C',
    borderRadius: 8,
  },
})