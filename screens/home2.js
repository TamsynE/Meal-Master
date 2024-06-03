import {View, Text, Button,  StyleSheet} from 'react-native';

function Home2({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home2</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('MealMaster')} />
        <Button
          title="Go to Recipes"
          onPress={() => navigation.navigate('MealMaster', { screen: 'Recipes' })}
        />
      </View>
    );
  }

export default Home2

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1,
      padding: 10,
      alignContent: 'center',

  },
});