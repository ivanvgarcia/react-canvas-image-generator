import React, { useState } from 'react'
import { Styles } from "./Styles"
import { TwitterShareButton } from 'react-twitter-embed';
import PropTypes from "prop-types";

const ConfirmationScreen = ({ avatarImg, goNext, goBack, screen }) => {
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = (e) => {
    const answer = e.currentTarget.textContent
    if (answer === "No") {
      console.log("hey")
      return goBack(screen.previous)
    }
    setConfirm(true)
  }

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
              <Styles.ConfirmationButton backgroundColor="green" onClick={handleConfirm}>
                Yes
              </Styles.ConfirmationButton>
              <Styles.ConfirmationButton backgroundColor="red" onClick={handleConfirm}>No</Styles.ConfirmationButton>
            </Styles.ConfirmationButtons>
          </>
        ) : (
            <>
              <Styles.ConfirmationText>Your Avatar is Completed!</Styles.ConfirmationText>
              <TwitterShareButton
                url={"Image URL"}
                options={{
                  text: `${'Avatar'}`,
                  via: 'United',
                  size: 'large'
                }}
              />
            </>
          )}
      </Styles.ConfirmationAlert>

    </Styles.Confirmation>
  )
}

ConfirmationScreen.propTypes = {
  avatarImg: PropTypes.string.isRequired
}

export default ConfirmationScreen
