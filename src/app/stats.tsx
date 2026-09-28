import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from "react"
import LocalStorageModule from '../../modules/localstorage/src/LocalStorageModule';
import DonutChart from '@/components/DonutChart';

const Stats = () => {
  const [datas,setDatas] = useState<any>([])

  const fetching = () => {
    const data = LocalStorageModule.getData()
    const personal = JSON.parse(data).filter(d => d.category == "Personal").length
    const work = JSON.parse(data).filter(d => d.category == "Work").length
    const study = JSON.parse(data).filter(d => d.category == "Study").length
    setDatas(data == "No Data" ? [] : JSON.parse(data)) 
  }

  useEffect(() => {
    fetching()
  },[])
  return (
    <ScrollView className='bg-[#fbf6fb]'>
      {/* Task category */}
      <View className="px-5 py-2">
        <View className="bg-[#f3ecf3] rounded-lg px-5 py-2">
          <View>
            <Text className="font-bold text-xl">Task by Category</Text>
            <Text>Distribution across active domains</Text>
          </View>
          <View>
            <DonutChart data={datas}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Stats;