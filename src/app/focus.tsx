import { View, Text, ScrollView, Pressable } from 'react-native';

interface Props {
  // Define your props here
}

const Focus = (props: Props) => {
  return (
    <ScrollView className="bg-[#fbf6fb]">
      {/* Button */}
      <View className="px-5 flex-row justify-between gap-4">
        <Pressable className="bg-[#f3ecf3] p-4 rounded-lg justify-center h-12"><Text>25 Min</Text></Pressable>
        <Pressable className="bg-[#f3ecf3] p-4 rounded-lg justify-center h-12"><Text>50 Min</Text></Pressable>
        <Pressable className="bg-[#f3ecf3] p-4 rounded-lg justify-center h-12"><Text>Custom (15 Min)</Text></Pressable>
        <Pressable className="bg-[#f3ecf3] p-4 rounded-lg aspect-square justify-center h-12"><Text>Break (5 Min)</Text></Pressable>
      </View>
      
      <View className="px-5 mt-5">
        <View className="flex-row justify-between">
          <Pressable className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center h-16"><Text className="font-bold text-2xl">Pause</Text></Pressable>
          <Pressable className="bg-[#6a51a8] flex-row justify-center p-4 rounded-full w-52 h-16 items-center gap-4"><Text className="text-white font-bold text-2xl">Pause</Text></Pressable>
          <Pressable className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center h-16"><Text className="font-bold text-2xl">Pause</Text></Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Focus;