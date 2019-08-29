/**
 * 配置文件
 * */

const boardList = [
  {
    id: "450000199211201094",
    type: 1,
    OrderNo: 1,
    name: "滚屏广告"
  },
  {
    id: "540000200110096878",
    type: 2,
    OrderNo: 1,
    name: "功能模块"
  },
  {
    id: "43000019730626372X",
    type: 3,
    OrderNo: 1,
    name: "品牌导航"
  },
  {
    id: "420000197309012668",
    type: 4,
    OrderNo: 1,
    name: "标题栏"
  },
  {
    id: "410000199012188264",
    type: 5,
    OrderNo: 1,
    name: "活动推荐"
  },
  {
    id: "140000199412214833",
    type: 6,
    OrderNo: 1,
    name: "积分商城"
  },
  {
    id: "410000200107200700",
    type: 7,
    OrderNo: 1,
    name: "底部菜单"
  }
]

const colorPicker = [
  '#000000',
  '#333333',
  '#4D4D4D',
  '#666666',
  '#808080',
  '#999999',
  '#B3B3B3',
  '#CCCCCC',
  '#FFFFFF',
  '#9F0500',
  '#D33115',
  '#F44E3B',
  '#C45100',
  '#E27300',
  '#FE9200',
  '#FB9E00',
  '#FCC400',
  '#FCDC00',
  '#808900',
  '#B0BC00',
  '#DBDF00',
  '#194D33',
  '#68BC00',
  '#A4DD00',
  '#0C797D',
  '#16A5A5',
  '#68CCCA',
  '#0062B1',
  '#009CE0',
  '#73D8FF',
  '#653294',
  '#7B64FF',
  '#AEA1FF',
  '#AB149E',
  '#FA28FF',
  '#FDA1FF',
]

const Prefix = process.env.NODE_ENV === 'development' ? '/ydh' : '';
const uploadUrl = `${Prefix}/MallHomePageConfig/DownLoadBase64Image`

export {
  boardList,
  colorPicker,
  Prefix,
  uploadUrl
}
