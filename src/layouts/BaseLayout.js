import React, { PureComponent, Fragment } from 'react'
import { Loader } from '@/components'
import './BaseLayout.less'
import { connect } from 'dva';

@connect(({ loading }) => ({ loading }))
class BaseLayout extends PureComponent{

  render() {
    const { loading, children } = this.props;
    return (
      <Fragment>
        <Loader fullScreen spinning={loading.global} />
        { children }
      </Fragment>
    )
  }
}

export default BaseLayout
