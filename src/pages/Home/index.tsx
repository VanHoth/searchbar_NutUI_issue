import {
  Avatar,
  Button, Cell, Col, Price, Row
} from "@nutui/nutui-react-taro";
import './index.scss'
import {View,Image} from "@tarojs/components";
import {SearchBar, Swiper, SwiperItem, Icon, NoticeBar,Image as NImage } from '@nutui/nutui-react-taro';
import React, {useState} from 'react'
import IconFont from "../../iconfont";


const horseLamp1 = [
  'NoticeBar 公告栏',
  'Cascader 级联选择',
  'DatePicker 日期选择器',
  'CheckBox 复选按钮',
]

function Index() {


  const [swiperImgUrl, setSwiperImgUrl] = useState(['https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg']);


  return (
      <View style={{padding: '0 10px'}}>
        <p>
          九天农业-水产养殖不花冤枉钱!
        </p>
        <SearchBar shape={'round'} style={{margin: '10px 0'}}
                   className={'searchbar'}
                   leftinIcon={<Icon name="search" size="12"/>}
                   placeholder="搜索商品"

        />
        <View style={{height: 150}}>
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
                    <img src={item} width={'100%'} height={'100%'} alt=""/>
                  </SwiperItem>
              )
            })}
          </Swiper>
        </View>

        <Row className={'icon-row'} justify={'space-between'} type={'flex'}>
          <Col span={'4.8'} className={'col-container'}>
            <View className={'home-icon'}
                  style={{backgroundColor: 'lightcoral'}}>
              <IconFont size={35} name={'shangpuchuzu'}/>
            </View>
            <p className={'home-icon-text'}>商城</p>
          </Col>
          <Col span={'4.8'} className={'col-container'}>
            <View className={'home-icon'}
                  style={{backgroundColor: 'lightcyan'}}>
              <IconFont size={35} name={'shangpuchuzu'}/>
            </View>
            <p className={'home-icon-text'}>领优惠券</p>
          </Col>
          <Col span={'4.8'} className={'col-container'}>
            <View className={'home-icon'}
                  style={{backgroundColor: 'lightgray'}}>
              <IconFont size={35} name={'shangpuchuzu'}/>
            </View>
            <p className={'home-icon-text'}>行业咨询</p>
          </Col>
          <Col span={'4.8'} className={'col-container'}>
            <View className={'home-icon'} style={{backgroundColor: 'lightpink'}}>
              <IconFont size={35} name={'shangpuchuzu'}/>
            </View>
            <p className={'home-icon-text'}>我的收藏</p>
          </Col>

          <Col span={'4.8'} className={'col-container'}>
            <View className={'home-icon'} style={{backgroundColor: 'lightblue'}}>
              <IconFont size={35} name={'shangpuchuzu'}/>
            </View>
            <p className={'home-icon-text'}>地址管理</p>
          </Col>
        </Row>

        <View className={'home-noticeBar'}>
          <Icon name={'notice'} size={20}/>
          <NoticeBar
              direction="vertical"
              list={horseLamp1}
              speed={10}
              standTime={1000}
              height={25}
              text={'123'}
              color={'grey'}
              background={'transparent'}
          />
        </View>

        {/*teachingVideo*/}
        <Cell title={'教学视频'} className={'tv-container'}>
          <View className={'tv-title'}>
            <p ><text style={{fontWeight:700}}>教学视频</text> <text style={{fontSize:'12px',color:'grey'}}>精彩内容</text></p>
          </View>
          <View className={'tv-videos-container'}>
            <View className="tv-cell">
              <Image
                  src={'https://hbimg.b0.upaiyun.com/2cc32978fc60c45b2c17679027ab6a7795d4ba824d53f-CZvSuE_fw658'}
                  className={'tv-img'}
                  mode={'scaleToFill'}
              />
              <p className="tv-cell-title">
                低温肥水
              </p>
            </View>
          </View>

        </Cell>

        {/*FineGoods*/}
        <Cell title={'教学视频'} className={'tv-container'}>
          <View className={'tv-title'}>
            <p ><text style={{fontWeight:700}}>热门精品</text> <text style={{fontSize:'12px',color:'grey'}}>成为代理享受优惠</text></p>
          </View>
          <View className={'fg-cells-container'}>
            <View className="fg-cell">
              <Image
                  src={'https://hbimg.b0.upaiyun.com/2cc32978fc60c45b2c17679027ab6a7795d4ba824d53f-CZvSuE_fw658'}
                  className={'fg-img'}
                  mode={'scaleToFill'}
              />
              <View className={'fg-text-container'}>
                <p className="fg-cell-title">
                  低温肥水
                </p>
                <Price
                    price={15213.1221}
                    size="normal"
                    decimalDigits={3}
                    needSymbol
                    thousands
                />
              </View>
            </View>
          </View>
        </Cell>


        {/*RankingList*/}
        <Cell title={'教学视频'} className={'tv-container'}>
          <View className={'tv-title'}>
            <p ><text style={{fontWeight:700}}>热门精品</text> <text style={{fontSize:'12px',color:'grey'}}>成为代理享受优惠</text></p>
          </View>
          <View className={'fg-cells-container'}>
            <View className="fg-cell">
              <Image
                  src={'https://hbimg.b0.upaiyun.com/2cc32978fc60c45b2c17679027ab6a7795d4ba824d53f-CZvSuE_fw658'}
                  className={'fg-img'}
                  mode={'scaleToFill'}
              />
              <View className={'fg-text-container'}>
                <p className="fg-cell-title">
                  低温肥水
                </p>
                <Price
                    price={15213.1221}
                    size="normal"
                    decimalDigits={3}
                    needSymbol
                    thousands
                />
              </View>
            </View>
          </View>
        </Cell>




      </View>


  );

}

export default Index
