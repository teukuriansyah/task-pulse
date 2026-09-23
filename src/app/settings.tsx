import { View, Text, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  // Define your props here
}

const Settings = (props: Props) => {
  return (
    <ScrollView className="bg-[#fbf6fb]">
      <View className="px-5 gap-2">
        <View className="bg-[#f3ecf3] p-4 rounded-lg flex-row items-center gap-4">
          <View className="bg-[#6a51a8] p-4 rounded-full">
            <Ionicons name="person-outline" size={16} color="white" />
          </View>
          <View>
            <Text className="text-lg font-bold">Nama</Text>
            <Text className="text-sm">email@email.com</Text>
          </View>
        </View>
      </View>

      <View className="px-5 gap-2 mt-5">
        <View>
          <Text className="text-[#6a51a8]">Security & Privacy (Android Native)</Text>
        </View>
        <View>
          <View className="bg-[#f3ecf3] p-4 rounded-lg">
            <Text className="text-lg font-bold">Data Storage</Text>
            <Text className="text-[11px]">Local SQLite Room Database (100% Offline)</Text>
          </View>
        </View>
      </View>

      <View className="px-5 gap-2 mt-2">
        <View>
          <Text className="text-[#6a51a8]">System Integration & About</Text>
        </View>
        <View>
          <View className="bg-[#f3ecf3] p-4 rounded-lg">
            <Text className="text-lg font-bold">App Version</Text>
            <Text className="text-[11px]">TaskPulse v.1.0.0 (API 34/35 Native Android)</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;