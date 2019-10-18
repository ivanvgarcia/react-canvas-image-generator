import React, { useEffect } from 'react';
import { Title } from 'components/commonStyles/';
import { getAvatars } from 'actions/avatar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Styles } from 'components/avatar/styles';
import Loader from 'components/loader/Loader';
import FullLoader from 'components/loader/FullLoader';

const Avatars = () => {
  const dispatch = useDispatch();
  const avatars = useSelector(state => state.avatar.avatars);

  useEffect(() => {
    dispatch(getAvatars());
  }, [dispatch]);

  const renderAvatars = () =>
    !avatars.length ? (
      <Loader />
    ) : (
      avatars.map(avatar => (
        <Link key={avatar._id} to={`/avatar/${avatar._id}`}>
          <picture>
            <source srcSet={avatar.webp} type="image/webp" alt="avatar" />
            <img src={avatar.url} alt="avatar" />
          </picture>
        </Link>
      ))
    );

  return (
    <>
      <Title>Avatars</Title>
      <Styles.FlexContainer backgroundColor="#D2A4CB">
        {renderAvatars()}
      </Styles.FlexContainer>
    </>
  );
};

export default Avatars;
