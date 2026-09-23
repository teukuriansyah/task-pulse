import { Text } from 'react-native'
import { Link } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavbarCreatetask() {
  return (
    <SafeAreaView className="flex-row gap-4 px-5 bg-[#fbf6fb] items-center">
      <Link href="/"><Ionicons name="arrow-back" size={28} color="#494551" /></Link>
      <Text className="font-bold text-[#494551] text-2xl">New Task</Text>
    </SafeAreaView>
  )
}