import { View, Text } from 'react-native';
import { Link } from "expo-router"

interface Props {
  // Define your props here
}

const Index = (props: Props) => {
  return (
    <View>
      <Link href="/addTask"> + Task</Link>
    </View>
  );
};

export default Index;