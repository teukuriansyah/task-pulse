import { View, Text } from 'react-native';

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
      <View className="flex-row gap-3 py-1">
        <View className="bg-green-600 py-[2px] px-2 rounded-full"><Text className="text-green-400 text-[10px]">Work</Text></View>
        <View>
          <Text className="text-red-600 text-sm">02:00</Text>
        </View>
      </View>
    </View>
  );
};

export default List;