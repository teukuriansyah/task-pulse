import { View, Text, ScrollView } from 'react-native';
import { Link, useFocusEffect } from "expo-router";
import { useState, useCallback } from "react";
import localStorage from "../../modules/localstorage/src/LocalStorageModule";
import List from "../components/List";

const Index = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [dataTaskToday, setDataTaskToday] = useState<any[]>([]);

  const fetchingData = useCallback(() => {
    const rawData = localStorage?.getData?.();

    if (!rawData || rawData === 'No Data') {
      setDataTaskToday([]);
      setDatas([]);
      return;
    }

    try {
      const parsedData = JSON.parse(rawData);
      const today = new Date();

      const allTaskToday = parsedData.filter((d: any) => {
        if (!d?.selectedDate) return false;

        const [day, month, year] = d.selectedDate.split('/');
        const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));

        return today.toDateString() === selectedDate.toDateString();
      });

      setDataTaskToday(allTaskToday);
      setDatas(parsedData);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchingData();
    }, [fetchingData])
  );

  const updateCheck = (i: number) => {
    const updatedDatas = datas.map((item, index) => {
      if (index === i) {
        return { ...item, check: true };
      }
      return item;
    });

    localStorage.postData(JSON.stringify(updatedDatas));

    fetchingData();
  };

  return (
    <View className="flex-1 relative bg-[#fbf6fb]">
      <ScrollView className="flex-1 mb-16">
        <View className="px-5 py-2">
          <Text className="text-3xl">Good morning, Code Number 9</Text>
        </View>

        <View className="px-5 py-2">
          <View className="bg-[#f3ecf3] rounded-lg px-5 py-2">
            <Text className="text-lg font-bold">Today's Overview</Text>
            <View className="bg-white rounded-lg px-5 py-2 mt-2">
              <View className="flex-row items-end">
                <Text className="font-bold text-3xl">
                  {dataTaskToday?.filter((d: any) => d.check).length}
                </Text>
                <Text className="text-sm"> of {dataTaskToday?.length} task done</Text>
              </View>
              <Text className="text-sm">You're making steady daily progress. Keep momentum!</Text>
            </View>
          </View>
        </View>

        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-3xl">Today's Task</Text>
            <View className="gap-2">
              {datas?.map((d: any, i: any) => {
                if (!d?.selectedDate) return null;

                const [day, month, year] = d.selectedDate.split('/');
                const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
                const today = new Date();

                if (today.toDateString() === selectedDate.toDateString()) {
                  return (
                    <List
                      key={i}
                      category={d.category}
                      press={() => updateCheck(i)}
                      title={d.title}
                      time={d.selectedTime}
                      date={d.selectedDate}
                      context={d.context}
                      check={d.check}
                    />
                  );
                }
                return null;
              })}
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