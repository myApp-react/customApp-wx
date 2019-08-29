/**
 * 模板列表
 * */
import React, { memo } from 'react';
import { Button } from 'antd-mobile';
import { Icon } from 'antd';
import style from './index.less';
import { Prefix } from '@/utils/config'
import { pxtovw } from '@/utils'

const renderHtml = (type, num, NameSize, NameColor, BtnNameSize, BtnNameColor, BtnBackColor, PointsSize, PointsColor) => {
    let htmlData = [];
    for(let i = 0; i < num; ++i){
      if(type === 2){
        htmlData.push(
          <div key={i} className={style['maillist-two']}>
            <div className={style['mall-list']}>
              <div className={style['mall-list-img']}>
                <Icon type="picture" style={{fontSize: 46}}/>
              </div>
              <div className={style['mall-list-main']}>
                <h3 className={style['mall-list-title']} style={{color: NameColor, fontSize: pxtovw(NameSize*2)}}>我是标题</h3>
                <p className={style['mall-list-integral']} style={{fontSize: pxtovw(PointsSize*2), color: PointsColor}}>5000</p>
                <div className={style['mall-list-btn']}>
                  <Button
                    type="primary"
                    size="small"
                    inline
                    style={{
                      fontSize: pxtovw(BtnNameSize*2),
                      color: BtnNameColor,
                      background: BtnBackColor,
                      border: 'none'
                    }}>立即兑换</Button>
                </div>
              </div>
            </div>
          </div>
        )
      }else {
        htmlData.push(
          <div key={i} className={style['maillist-one']}>
            <div className={style['mall-list-col']}>
              <div className={style['mall-list-img']}>
                <div className={style['list-img']}>
                  <Icon type="picture" style={{fontSize: 60}}/>
                </div>
              </div>
              <div className={style['list-main']}>
                <h3 className={style.title} style={{WebkitBoxOrient: 'vertical', fontSize: pxtovw(NameSize*2), color: NameColor}}>我是标题</h3>
                <p className={style.integral} style={{fontSize: pxtovw(PointsSize*2), color: PointsColor}}>5000积分</p>
              </div>
            </div>
          </div>
        )
      }
    }
    return htmlData
};


export default memo((props) => {
  const { AccordingNum, NameSize, NameColor, BtnNameSize, BtnNameColor, BtnBackColor, PointsSize, PointsColor, Style, GiftDetialUrl, Gifts, commonUrl } = props;

  const renderUrl = (Id) => {
    return commonUrl && GiftDetialUrl ? `${GiftDetialUrl}?giftId=${Id}` : "javascript:void(0)"
  }
  const ImgUrl = url => commonUrl ? (commonUrl + url) : (Prefix + url);

  const targetClick = (e) => {
    console.warn(e)
  }

  return (
    <div className={style['mall-warp']}>
      {
        Style === 1 ? Gifts && Gifts.map(_ => (
          <a
            href={renderUrl(_.GiftId)}
            key={_.GiftId}
            className={style['maillist-one']}
            onClick={targetClick}
          >
            <div className={style['mall-list-col']}>
              <div className={style['mall-list-img']}>
                <div className={style['list-img']}>
                  <img src={ImgUrl(_.GiftImage)} alt=""/>
                </div>
              </div>
              <div className={style['list-main']}>
                <h3 className={style.title} style={{WebkitBoxOrient: 'vertical', fontSize: pxtovw(NameSize*2), color: NameColor}}>{_.GiftName}</h3>
                <p className={style.integral} style={{fontSize: pxtovw(PointsSize*2), color: PointsColor}}>{_.NeedSocres} 积分</p>
                <div className={style['mall-list-btn']}>
                  <Button
                    type="primary"
                    size="small"
                    inline
                    style={{
                      fontSize: pxtovw(BtnNameSize*2),
                      color: BtnNameColor,
                      background: BtnBackColor,
                      border: 'none',
                      borderRadius: pxtovw(4),
                      padding: `0 ${pxtovw(20)}`
                    }}>立即兑换</Button>
                </div>
              </div>
            </div>
          </a>
        )) : null
      }
      {
        Style === 2 ? Gifts && Gifts.map(_ => (
          <a
            href={renderUrl(_.GiftId)}
            key={_.GiftId}
            className={style['maillist-two']}
            onClick={targetClick}
          >
            <div className={style['mall-list'] + ' ' + style['mall-list-border']}>
              <div className={style['mall-list-img']}>
                <img src={ImgUrl(_.GiftImage)} alt=""/>
              </div>
              <div className={style['mall-list-main']}>
                <h3 className={style['mall-list-title']} style={{WebkitBoxOrient: 'vertical', color: NameColor, fontSize: pxtovw(NameSize*2)}}>{_.GiftName}</h3>
                <p className={style['mall-list-integral']} style={{fontSize: pxtovw(PointsSize*2), color: PointsColor}}>{_.NeedSocres} 积分</p>
                <div className={style['mall-list-btn']}>
                  <Button
                    type="primary"
                    size="small"
                    inline
                    style={{
                      fontSize: pxtovw(BtnNameSize*2),
                      color: BtnNameColor,
                      background: BtnBackColor,
                      border: 'none',
                      borderRadius: pxtovw(4),
                      padding: `0 ${pxtovw(20)}`
                    }}>立即兑换</Button>
                </div>
              </div>
            </div>
          </a>
        )) : null
      }
      {/*{*/}
        {/*!Gifts ? renderHtml(Style, AccordingNum, NameSize, NameColor, BtnNameSize, BtnNameColor, BtnBackColor, PointsSize, PointsColor) : null*/}
      {/*}*/}

    </div>
  )
});
