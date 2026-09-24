import { View, Text, ScrollView } from 'react-native';
import { Link } from "expo-router";
import List from "../components/List";

interface Props {
  // Define your props here
}

const Index = (props: Props) => {
  return (
    <View className="flex-1 relative bg-[#fbf6fb]">
      <ScrollView className="flex-1 mb-16">
        {/* Greeting */}
        <View className="px-5 py-2">
          <Text className="text-3xl">Good morning, Code number 9</Text>
        </View>

        {/* Overview */}
        <View className="px-5 py-2">
          <View className="bg-[#f3ecf3] rounded-lg px-5 py-2">
            <Text className="text-lg font-bold">Today's Overview</Text>
            <View className="bg-white rounded-lg px-5 py-2 mt-2">
              {/* Progression Bar Circle */}
              <View>
                <View className="flex-row items-end">
                  <Text className="font-bold text-3xl">3</Text>
                  <Text className="text-sm"> of 8 task done</Text>
                </View>
                <Text className="text-sm">You're making steady daily progress. Keep momentum!</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Today task */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-3xl">Today's Task</Text>
            <View>
              <List />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-5 right-5 rounded-xl bg-[#4F378A] p-5 w-28 items-center">
        <Link href="/createTask">
          <Text className="text-white font-bold text-xl">+ Task</Text>
        </Link>
      </View>

    </View>
  );
};

export default Index;
