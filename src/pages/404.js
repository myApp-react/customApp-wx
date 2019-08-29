import React, { PureComponent } from 'react'
import { Result, Icon } from 'antd-mobile';
import styles from './404.less'

class Error extends PureComponent {
  render() {
    return (
      <Result
        img={<Icon type="cross-circle-o" className={styles.spe} style={{ fill: '#F13642' }} />}
        title="404"
        message="页面找不到了"
      />
    )
  }
}
export default Error
