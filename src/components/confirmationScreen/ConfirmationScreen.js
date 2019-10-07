import React, { useState, useEffect } from 'react';
import { Styles } from './Styles';
import { TwitterShareButton } from 'react-twitter-embed';
import PropTypes from 'prop-types';
import { ReactComponent as Facebook } from 'components/svgs/facebook.svg';

const ConfirmationScreen = ({ avatarImg, goNext, goBack, screen }) => {
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = e => {
    const answer = e.currentTarget.textContent;
    if (answer === 'No') {
      return goBack(screen.previous);
    }
    setConfirm(true);
  };

  useEffect(() => {
    window.fbAsyncInit = function() {
      // eslint-disable-next-line no-undef
      FB.init({
        appId: '396269361288665',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v4.0'
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  console.log(avatarImg);

  return (
    <Styles.Confirmation>
      <img style={{ width: '100%' }} src={avatarImg} alt="avatar" />
      <Styles.ConfirmationAlert>
        {!confirm ? (
          <>
            <Styles.ConfirmationText>
              Are you happy with your creation?
            </Styles.ConfirmationText>
            <Styles.ConfirmationButtons>
              <Styles.ConfirmationButton
                backgroundColor="green"
                onClick={handleConfirm}
              >
                Yes
              </Styles.ConfirmationButton>
              <Styles.ConfirmationButton
                backgroundColor="red"
                onClick={handleConfirm}
              >
                No
              </Styles.ConfirmationButton>
            </Styles.ConfirmationButtons>
          </>
        ) : (
          <>
            <Styles.ConfirmationText>
              Your Avatar is Completed!
            </Styles.ConfirmationText>

            <Styles.ShareButtons>
              <Styles.FaceBookShareButton
                onClick={() => {
                  // eslint-disable-next-line no-undef
                  if (FB) {
                    // eslint-disable-next-line no-undef
                    FB.ui({
                      method: 'share',
                      href: 'https://d1riqzz03dhs7s.cloudfront.net/',
                      hashtag: '#United',
                      quote: 'Share your avatar'
                    });
                  }
                }}
              >
                <Facebook></Facebook> Share
              </Styles.FaceBookShareButton>
              <TwitterShareButton
                url={'Image URL'}
                options={{
                  text: `${'Avatar'}`,
                  via: 'United',
                  size: 'large'
                }}
              />
            </Styles.ShareButtons>
          </>
        )}
      </Styles.ConfirmationAlert>
    </Styles.Confirmation>
  );
};

ConfirmationScreen.propTypes = {
  avatarImg: PropTypes.string.isRequired
};

export default ConfirmationScreen;
