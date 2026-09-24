import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  // Define your props here
}

const List = (props: Props) => {
  return (
    <View className="px-5 py-2 rounded-lg bg-[#f3ecf3]">
      <View>
        <Text className="font-bold text-lg">FirstTab</Text>
        <Text className="text-sm">FirstTab</Text>
      </View>
      <View className="flex-row gap-3 py-1 items-center">
        <View className="bg-green-600 py-[2px] px-2 rounded-full">
          <Text className="text-green-400 text-[10px]">Work</Text>
        </View>
        
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center gap-1">
            <Ionicons name="alarm-outline" size={16} color="#dc2626" />
            <Text className="text-red-600 text-sm font-medium">02:00</Text>
          </View>

          {/* Pemisah visual opsional */}
          <Text className="text-gray-400 text-xs">•</Text>
          
          <View className="flex-row items-center gap-1">
            <Ionicons name="calendar-outline" size={16} color="#4b5563" />
            <Text className="text-gray-600 text-sm">24 Sep</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default List;