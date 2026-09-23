import { Text } from 'react-native'
import { Link } from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function NavbarCreatetask() {
  return (
    <SafeAreaView className="flex-row gap-4 px-5 bg-[#fbf6fb] items-center">
      <Link href="/">Back</Link>
      <Text className="font-bold text-[#494551] text-2xl">New Task</Text>
    </SafeAreaView>
  )
}