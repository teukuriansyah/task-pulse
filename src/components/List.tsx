import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from "./Checkbox";

interface Props { 
  title: string; 
  context:string;
  check: boolean; 
  time:string;
  date:string;
  press: any; 
  category:string
}

const List = (props: Props) => (
  <View className={`flex-row items-center gap-3 rounded-lg ${props.check ? "bg-[#9a9a9a]" : "bg-[#f3ecf3]"} px-5 py-2`}>
    <Checkbox press={props.press} isCheck={props.check}/>
    <View className="flex-1">
      <Text className={`text-lg font-bold ${props.check ? "line-through text-[#494551]" : ""}`}>{props.title || "FirstTab"}</Text>
      <Text className={`text-sm ${props.check ? "text-[#494551] line-through" : ""}`}>{props.context || "FirstTab"}</Text>
      <View className="flex-row items-center gap-3 py-1">
        <View className={`rounded-full ${props.check ? "" : "bg-green-600"} px-2 py-[2px]`}>
          <Text className={`text-[10px] ${props.check ? "text-[#494551]" : "text-green-400"}`}>{props.category}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center gap-1">
            <Ionicons name="alarm-outline" size={16} color={props.check ? "#494551" : "#dc2626"} />
            <Text className={`text-sm font-medium ${props.check ? "text-[#494551]" : "text-red-600"}`}>{props.time}</Text>
          </View>
          <Text className="text-xs text-gray-400">•</Text>
          <View className="flex-row items-center gap-1">
            <Ionicons name="calendar-outline" size={16} color="#4b5563" />
            <Text className="text-sm text-gray-600">{props.date}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
);

export default List;