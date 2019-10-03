import React from 'react'
import PropTypes from 'prop-types'
import { Styles } from "components/loader/LoaderStyles"
import Loader from 'components/loader/Loader';

const FullLoader = ({ message }) => {
  return (
    <Styles.FullLoaderContainer>
      <Styles.FullLoaderContent>
        <Loader />
        <Styles.FullLoaderMessage>
          {message}
        </Styles.FullLoaderMessage>
        <span></span>
      </Styles.FullLoaderContent>

      <img src="https://avatar-jp-images.s3-ap-northeast-1.amazonaws.com/userAvatar_1570072645876.png" alt="avatar" />
    </Styles.FullLoaderContainer>
  )
}

FullLoader.propTypes = {
  message: PropTypes.string
}

export default FullLoader;
