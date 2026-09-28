import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from "react"
import LocalStorageModule from '../../modules/localstorage/src/LocalStorageModule';
import DonutChart from '@/components/DonutChart';

const Stats = () => {
  const [datas,setDatas] = useState<any>([])

  const fetchingData = () => {
    const fetching = LocalStorageModule.getData()
    const personal = JSON.parse(fetching).filter((d:any) => d.category == "Personal").length
    const work = JSON.parse(fetching).filter((d:any) => d.category == "Work").length
    const study = JSON.parse(fetching).filter((d:any) => d.category == "Study").length

    const data = [{label:"Personal",value:personal,color:"#4F378A"},{label:"Work",value:work,color:"#0b3a65"},{label:"Study",value:study,color:"#4d0404"}]

    setDatas(data)
  }

  useEffect(() => {
    fetchingData()
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