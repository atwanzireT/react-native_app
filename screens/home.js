import { Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
  return (
    <View>
      <View>
        <Text>This is My</Text>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('detail',
            {
              itemId: 12,
              otherParam: "Anything you want here",
            }
          )}
        />
      </View>
      <View>
        <Text>This is My</Text>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('detail',
            {
              itemId: 53,
              otherParam: "Another thing you want here",
            }
          )}
        />
      </View>
    </View>
  );
}

export default Home;