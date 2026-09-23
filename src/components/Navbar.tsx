import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  title:string;
}

const Navbar = (props: Props) => {
  return (
    <SafeAreaView className="px-5 flex flex-row justify-between items-center bg-[#fbf6fb]">
      <View>
        <Text className="text-2xl text-[#494551]">{props.title}</Text>
      </View>
      <View className="flex flex-row gap-4 items-center">
        <Ionicons name="notifications-outline" size={24} color="#494551"/>
        <View className="bg-[#4F378A] aspect-square rounded-full p-2">
          <Ionicons name="person-outline" size={16} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;