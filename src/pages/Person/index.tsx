import {
  Button,

} from "@nutui/nutui-react-taro";
import './index.scss'
import {View} from "@tarojs/components";
import React from 'react'

function Index() {

  return (
      <View className="nutui-react-demo">
        <View className="index">
          1234
        </View>
        <View className="index">
          <Button type="primary" className="btn">
            NutUI React Button
          </Button>
        </View>
      </View>
  );

}

export default Index
