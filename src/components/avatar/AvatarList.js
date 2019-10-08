import React from 'react';
import { Styles } from 'components/avatar/styles';
import { useSelector, useDispatch } from 'react-redux';
import { chooseAvatar, removeChosenAvatar } from 'actions/avatar';
import { useTranslation } from 'react-i18next';

const AvatarList = () => {
  const avatars = useSelector(state => state.avatar.avatars);
  const chosen = useSelector(state => state.avatar.chosenAvatars);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const chooseAvatars = clickedAvatar => {
    const hasAvatar = chosen.some(avatar => avatar._id === clickedAvatar._id);

    if (hasAvatar) return dispatch(removeChosenAvatar(clickedAvatar._id));

    if (chosen && chosen.length === 4)
      return console.error('You have chosen the limit');

    dispatch(
      chooseAvatar({
        ...clickedAvatar,
        x: 0,
        y: 0,
        scaleX: 0.4,
        scaleY: 0.4,
        name: `avatar${clickedAvatar._id}`,
        offsetX: 0,
        offsetY: 0,
        rotation: 0,
        skewX: 0,
        skewY: 0
      })
    );
  };

  const checkChosen = avatar => {
    return chosen.some(chosen => chosen._id === avatar._id);
  };

  return (
    <Styles.FlexContainer>
      <Styles.Title flex="100%" size={'1.6rem'}>
        {t('avatar-list.title')}
      </Styles.Title>
      {avatars.map(avatar => (
        <Styles.AvatarCard key={avatar._id}>
          {checkChosen(avatar) && (
            <Styles.CardBackground>
              <Styles.Tag>Chosen!</Styles.Tag>
            </Styles.CardBackground>
          )}
          <picture>
            <source
              srcSet={avatar.webp}
              type="image/webp"
              alt="avatar"
              onClick={() => chooseAvatars(avatar)}
            />
            <img
              src={avatar.url}
              alt="avatar"
              onClick={() => chooseAvatars(avatar)}
            />
          </picture>
        </Styles.AvatarCard>
      ))}
    </Styles.FlexContainer>
  );
};

export default AvatarList;
