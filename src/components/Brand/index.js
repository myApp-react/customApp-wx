import React, { Component, PureComponent, Fragment } from "react";
import { Grid, Carousel } from 'antd-mobile';
import style from './index.less'
import shortid from 'shortid';
import { Prefix } from '@/utils/config'
import { pxtovw } from '@/utils'
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import isEqual from "react-fast-compare";
const data = Array.from(new Array(8)).map((_val, i) => ({
  Id: shortid.generate(),
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `选项${i}`,
}));

class Brand extends Component {

  shouldComponentUpdate(preProps, preState) {
    if(!isEqual(preProps, this.props)){
      return true
    }
    return false
  }

  render() {
    const { IsIcon, LogoColor, BranddetailUrl, BackColor, ShopPro, commonUrl } = this.props;
    const renderUrl = Id => commonUrl && Id ? `${BranddetailUrl}/${Id}` : "javascript:void(0)"
    const ImgUrl = url => commonUrl ? (commonUrl + url) : (Prefix + url)

    const openUrl = (el, index) => {
      if(commonUrl && el.ShopPromotionId){
        window.location.href = `${BranddetailUrl}/${el.ShopPromotionId}`
      }
    }

    return (
      <Fragment>
        {
          IsIcon === 0 ? <Grid
            data={!ShopPro || ShopPro.length === 0 ? data : ShopPro}
            hasLine={false}
            className={style['brand-show-type-1']}
            activeStyle={false}
            onClick={openUrl}
            square={false}
            style={{
              backgroundColor: BackColor || '#fff',
            }}
            renderItem={dataItem => (
              <div className={style.url}>
                <div className={style['brand-img-warp']}>
                  <img src={ShopPro && ShopPro.length !== 0 ? ImgUrl(dataItem.LogoUrl) : dataItem.icon}
                       className={style['brand-img']}
                       alt=""
                  />
                </div>
              </div>
            )}
            itemStyle={{
              height: pxtovw(156),
              background: BackColor || '#fff',
            }}
          /> : null
        }
        {
          IsIcon === 2 ? // frameOverflow="visible"
            <Carousel
              className={style['brand-show-type-3']}
              cellSpacing={0}
              slideWidth={.4}
              cellAlign={"left"}
              dots={false}
              arrows={true}
              prefixCls={"brand-show-2"}
              style={{
                background: BackColor || '#fff'
              }}
            >
              { ShopPro && ShopPro.length !== 0 ?
                ShopPro.map((_, index) => (
                  <a
                    key={_.Id}
                    className={style['card-item-warp']}
                    href={renderUrl(_.ShopPromotionId)}
                    style={{
                      display: 'block',
                      position: 'relative',
                      paddingLeft: pxtovw(20),
                    }}
                  >
                    <div
                      className={style['card-item']}
                      style={{
                        background: LogoColor || '#F0F2F5'
                      }}
                    >
                      <div className={style['store-img']}><img src={ImgUrl(_.LogoUrl)} alt=""/></div>
                      <div className={style['store-info']}>
                        <h3 className={style.title} style={{WebkitBoxOrient: 'vertical'}}>{_.StoreName}</h3>
                        <div className={style.describe} style={{WebkitBoxOrient: 'vertical'}}>{_.Describe}</div>
                      </div>
                    </div>
                  </a>
              )) : data.map((_, index) => (
                  <div className="swiper-slide" key={index}>
                    <a
                      className={style['card-item-warp']}
                      style={{
                        display: 'block',
                        position: 'relative',
                        background: LogoColor || '#F0F2F5'
                      }}
                    >
                      <div className={style['card-item']}>
                        <div className={style['store-img']}><img src={_.icon} alt=""/></div>
                        <div className={style['store-info']}>
                          <h3 className={style.title}>我是标题文字</h3>
                          <p className={style.describe}>这里放置的是一段描述性文字</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
            </Carousel> : null
        }
        {
          IsIcon === 1 ?
            <Carousel
              className={style['brand-show-type-2']}
              frameOverflow="visible"
              cellSpacing={0}
              slideWidth={.22}
              cellAlign={"left"}
              dots={false}
              style={{
                background: BackColor || '#fff'
              }}
            >
              { ShopPro && ShopPro.length !== 0 ?
                ShopPro.map((_, index) => (
                  <a
                    className={style['card-item-warp']}
                    key={_.ShopPromotionId}
                    href={renderUrl(_.ShopPromotionId)}
                    style={{
                      display: 'block',
                      position: 'relative',
                      paddingLeft: pxtovw(20),
                    }}
                  >
                    <div className={style['card-item']}>
                      <div className={style['store-img']}><img src={ImgUrl(_.LogoUrl)} alt=""/></div>
                    </div>
                  </a>
                )) : data.map((_, index) => (
                  <div className="swiper-slide" key={_.Id}>
                    <a
                      className={style['card-item-warp']}
                      style={{
                        display: 'block',
                        position: 'relative',
                        background: LogoColor || '#F0F2F5'
                      }}
                    >
                      <div className={style['card-item']}>
                        <div className={style['store-img']}><img src={_.icon} alt=""/></div>
                      </div>
                    </a>
                  </div>
                ))}
            </Carousel> : null
        }
        {
          IsIcon === 3 ? <Grid
            data={!ShopPro || ShopPro.length === 0 ? data : ShopPro}
            hasLine={false}
            className={style['brand-show-type-4']}
            columnNum={4}
            activeStyle={false}
            isCarousel={true}
            carouselMaxRow={ShopPro.length <= 4 ? 1 : 2}
            onClick={openUrl}
            style={{
              background: BackColor || '#fff',
            }}
            dotStyle={{
              width: pxtovw(30),
              height: pxtovw(4),
              margin: 0,
              borderRadius: 0,
            }}
            dotActiveStyle={{
              width: pxtovw(30),
              height: pxtovw(4),
              margin: 0,
              borderRadius: 0,
            }}
            renderItem={dataItem => (
              <div className={style.url}>
                <div className={style['brand-img-warp']} style={{ background: LogoColor || '#F0F2F5'}}>
                  <img src={ShopPro && ShopPro.length !== 0 ? ImgUrl(dataItem.LogoUrl) : dataItem.icon} className={style['brand-img']} alt="" />
                </div>
                <div style={{ color: '#000000', fontSize: pxtovw(24), marginTop: pxtovw(12) }}>
                  <span className={style['item-text']} style={{WebkitBoxOrient: 'vertical'}}>{ShopPro && ShopPro.length !== 0 ? dataItem.StoreName : dataItem.text}</span>
                </div>
              </div>
            )}
            itemStyle={{
              height: pxtovw(190),
              background: BackColor || '#fff',
            }}
          /> : null
        }
      </Fragment>
    )
  }
}

export default Brand;
