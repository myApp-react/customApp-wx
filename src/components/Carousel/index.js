import React, { PureComponent } from "react";
import { Carousel } from 'antd-mobile';
// import swiperBanner from '@/assets/swiper-banner.png';
import arcImg from '@/assets/swiper-arc-img.png';
import styles from './index.less'
import { Prefix } from '@/utils/config'

export default class CarouselPages extends PureComponent {
  state = {
    data: ['1', '2', '3'],
  }

  render() {
    const { data } = this.state
    const { IsFloat, RollingTime, Images, commonUrl } = this.props;
    // const openUrl = url => commonUrl ? commonUrl + url : 'javascript:;'
    //const openUrl = url => url ? commonUrl ? url : 'javascript:void(0)' : 'javascript:void(0)';

    const ImgUrl = url => commonUrl ? (commonUrl + url) : (Prefix + url)

    return (
      <div className={styles.carousel}>
        <Carousel
          autoplay={true}
          infinite
          autoplayInterval={RollingTime}
          dotStyle={{
            background: 'rgba(255,255,255,.6)',
          }}
          dotActiveStyle={{
            background: 'rgba(255,255,255,1)',
          }}
        >
          {
            Images.length === 0 ? data.map(_ => (
              <div
                key={_}
                className={styles['img-warp']}
              >
                <img
                  src={`https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png`}
                  alt=""
                  className={styles.img}
                />
              </div>
            )) : Images.map(_ => {
              if(_.LinkUrl && commonUrl){
                return (
                  <a
                    key={_.Id}
                    href={_.LinkUrl}
                    className={styles['img-warp']}
                  >
                    <img
                      src={ImgUrl(_.ImageUrl)}
                      className={styles.img}
                    />
                  </a>
                )
              }else {
                return (
                  <div
                    key={_}
                    className={styles['img-warp']}
                  >
                    <img
                      src={ImgUrl(_.ImageUrl)}
                      className={styles.img}
                    />
                  </div>
                )
              }
            })
          }
        </Carousel>
        <img src={arcImg} style={{display: `${IsFloat ? 'block' : 'none'}`}} className={styles.arcimg} alt="圆弧图片"/>
      </div>
    )
  }
};


