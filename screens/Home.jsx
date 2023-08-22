import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useState, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.API_KEY;
  const API = `
https://api.themoviedb.org/3/`;

  const getMovies = async () => {
    try {
      const response = await fetch(
        `${API}movie/latest?api_key=${API_KEY}&language=en-US`,
      );
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text style={homeStyles.appTitle}>MOVIEVILLE</Text>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={({id}) => id}
            renderItem={({movie}) => (
              <Text>
                {movie.title}, {movie.release_date}
              </Text>
            )}
          />
        )}
      </View>
      <View style={homeStyles.buttonContainer}>
        <Pressable>
          <Text style={homeStyles.playNow}>Play Now</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const homeStyles = StyleSheet.create({
  appTitle: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'black',
  },
  playNow: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
