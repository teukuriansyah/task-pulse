import { Tabs } from "expo-router";
import "../../global.css";
import Ionicons from '@expo/vector-icons/Ionicons';
import Navbar from "../components/Navbar";
import NavbarCreatetask from "@/components/NavbarCreatetask";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#6a51a8", tabBarActiveBackgroundColor: "#bdb2d7", tabBarStyle: { height: 72, backgroundColor:"#f3ecf3" } }}>
      <Tabs.Screen name="index" options={{ title: "Home", header: (t: any) => <Navbar title={t.options.title} />, tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="tasks" options={{ title: "Tasks", header: (t: any) => <Navbar title={t.options.title} />, tabBarIcon: ({ color, size }) => <Ionicons name="checkbox-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="focus" options={{ title: "Focus", header: (t: any) => <Navbar title={t.options.title} />, tabBarIcon: ({ color, size }) => <Ionicons name="timer-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="stats" options={{ title: "Stats", header: (t: any) => <Navbar title={t.options.title} />, tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", header: (t: any) => <Navbar title={t.options.title} />, tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} /> }} />
      <Tabs.Screen name="createTask" options={{ href: null, tabBarStyle: { display: "none" }, header: (t: any) => <NavbarCreatetask/> }} />
    </Tabs>
  );
}