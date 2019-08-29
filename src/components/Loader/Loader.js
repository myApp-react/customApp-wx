import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'antd-mobile';

const Loader = ({ spinning = true, fullScreen }) => {
  return (
    <ActivityIndicator
      toast
      text="Loading..."
      animating={spinning}
    />
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader
