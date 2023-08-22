import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {colors} from '../assets/colors/colors';
import {useState, useEffect} from 'react';
export default function NewReleases() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=6e4c6be7f2da545a503250ef079eed34&language=en-US&page=1',
    )
      .then(res => res.json())
      .then(
        result => {
          setLoading(false), setMovies(result);
        },
        error => {
          setLoading(false);
          setErrorMessage(error);
        },
      );
  }, []);

  const getMovies = () => {
    {
      loading ? (
        <ActivityIndicator
          style={newReleasesStyles.loadingIndicator}
          size="large"
        />
      ) : (
        <SafeAreaView>
          <FlatList
            data={movies}
            renderItem={({movie}) => (
              <Text>{movie['results'].original_title}</Text>
            )}
          />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView>
        <Text>New Releases Screen</Text>
        {getMovies()}
      </SafeAreaView>
    );
  };

  const newReleasesStyles = {
    loadingIndicator: {
      color: '#0000ff',
    },
    text: {
      color: colors.slateBlack,
    },
  };
}
