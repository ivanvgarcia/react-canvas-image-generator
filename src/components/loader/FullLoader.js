import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from 'components/loader/styles';
import Loader from 'components/loader/Loader';

const FullLoader = ({ message }) => {
  return (
    <Styles.FullLoaderContainer>
      <Styles.FullLoaderContent>
        <Loader />
        <Styles.FullLoaderMessage data-testid="message">
          {message}
        </Styles.FullLoaderMessage>
        <span></span>
      </Styles.FullLoaderContent>

      <img src={process.env.PUBLIC_URL + '/images/avatar.png'} alt="avatar" />
    </Styles.FullLoaderContainer>
  );
};

FullLoader.propTypes = {
  message: PropTypes.string
};

export default FullLoader;
