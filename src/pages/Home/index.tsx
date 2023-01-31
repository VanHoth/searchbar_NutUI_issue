import {
  Button,
} from "@nutui/nutui-react-taro";
import './index.scss'
import {View} from "@tarojs/components";
import { SearchBar,Swiper,SwiperItem,Icon  } from '@nutui/nutui-react-taro';
import React, {useState} from 'react'

function Index() {


  const [swiperImgUrl,setSwiperImgUrl] = useState(['https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg']);




  return (
      <View style={{padding:'0 20px'}}>
        <p>
          九天农业-水产养殖不花冤枉钱!
        </p>
        <SearchBar shape={'round'} style={{margin:'10px 0',padding:0}}
                   rightoutIcon={<p>搜索</p>}
                   leftinIcon={<Icon name="search" size="12" />}
                   placeholder="搜索商品"

        />
        <View style={{height:150}}>
          <Swiper
              height={150}
              paginationColor="#426543"
              autoPlay="3000"
              initPage={0}
              paginationVisible
          >
            {swiperImgUrl.map((item) => {
              return (
                  <SwiperItem key={item}>
                    <img src={item} width={'100%'} height={'100%'} alt="" />
                  </SwiperItem>
              )
            })}
          </Swiper>
        </View>

      </View>
  );

}

export default Index
