import { View, Text, ScrollView } from 'react-native';
import { useState, useCallback } from "react";
import { useFocusEffect } from 'expo-router';
import LocalStorageModule from '../../modules/localstorage/src/LocalStorageModule';
import DonutChart from '@/components/DonutChart';

const Stats = () => {
  const [datas, setDatas] = useState<any[]>([]);

  const fetchingData = useCallback(() => {
    const fetching = LocalStorageModule.getData();

    if (!fetching || fetching === "No Data") {
      setDatas([]);
      return;
    }

    try {
      const parsedData = JSON.parse(fetching);

      // Hitung per kategori cukup dari 1 kali parse
      const personal = parsedData.filter((d: any) => d.category === "Personal" && d.check).length;
      const work = parsedData.filter((d: any) => d.category === "Work" && d.check).length;
      const study = parsedData.filter((d: any) => d.category === "Study" && d.check).length;

      const data = [
        { label: "Personal", value: personal, color: "#4F378A" },
        { label: "Work", value: work, color: "#0b3a65" },
        { label: "Study", value: study, color: "#4d0404" }
      ];

      setDatas(data);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, []);

  // useFocusEffect memastikan data selalu ter-update saat tab "Stats" dibuka
  useFocusEffect(
    useCallback(() => {
      fetchingData();
    }, [fetchingData])
  );

  return (
    <ScrollView className='bg-[#fbf6fb]'>
      {/* Task category */}
      <View className="px-5 py-2">
        <View className="bg-[#f3ecf3] rounded-lg px-5 py-2">
          <View>
            <Text className="font-bold text-xl">Task by Category</Text>
            <Text>Distribution across active domains</Text>
          </View>
          <View className="mt-4">
            <DonutChart data={datas} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Stats;