import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getAvatar } from 'actions/avatar';
import Loader from 'components/loader/Loader';
import { Title } from 'components/commonStyles';
import { Helmet } from 'react-helmet';

const AvatarShow = () => {
  const params = useParams();
  const avatar = useSelector(state => state.avatar.avatar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvatar(params.id));
  }, [dispatch, params.id]);

  if (!avatar) {
    return <Loader />;
  }

  return (
    <div>
      <Helmet>
        <title>Cocoppa Created Avatar</title>
        <meta name="description" content="I created this avatar!" />
        <meta property="og:title" content="An avatar created by Ivan" />
        <meta property="og:image" content={`${avatar.url}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Title>Cocoppa Avatar</Title>
      <picture>
        <source
          style={{ width: '100%' }}
          srcSet={avatar.webp}
          type="image/webp"
          alt="avatar"
        />
        <img style={{ width: '100%' }} src={avatar.url} alt="avatar" />
      </picture>
    </div>
  );
};

export default AvatarShow;
