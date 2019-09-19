import React, { useState, useEffect } from 'react';
import { Icon, Thumbnail } from './EditToolsStyles';
import { getThumbnails, getToolIcons } from 'utils/canvasToolIcons';
import { CLOTHES_LINEUP, SETTINGS } from 'utils/constantData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EditTools = ({ canvasRef, scene }) => {
  const [activeIcon, setActiveIcon] = useState('10101');
  const [id, setId] = useState(null);

  useEffect(() => {
    id && scene.onClothesSelected(id);
  }, [id, scene]);

  const renderIcons = () => {
    const CATEGORY_IDS = Object.keys(CLOTHES_LINEUP);

    const imagePaths = getToolIcons(CATEGORY_IDS, activeIcon);

    return imagePaths.map((path, idx) => (
      <Icon
        key={CATEGORY_IDS[idx]}
        onClick={e => setActiveIcon(CATEGORY_IDS[idx])}
        src={path}
        alt="icon"
      />
    ));
  };

  const thumbnail = (avatarData, idx, path) => (
    <Thumbnail
      key={avatarData}
      src={path}
      alt="avatar-clothes"
      onClick={() => changeClothes(avatarData[idx])}
    />
  );

  const changeClothes = id => setId(id);

  const renderThumbnails = () => {
    let paths;
    switch (activeIcon) {
      case '10101':
        paths = getThumbnails(CLOTHES_LINEUP['10101']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10101'], idx, path)
        );
      case '10201':
        paths = getThumbnails(CLOTHES_LINEUP['10201']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10201'], idx, path)
        );
      case '10301':
        paths = getThumbnails(CLOTHES_LINEUP['10301']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10301'], idx, path)
        );
      case '10401':
        paths = getThumbnails(CLOTHES_LINEUP['10401']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10401'], idx, path)
        );
      case '10501':
        paths = getThumbnails(CLOTHES_LINEUP['10501']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10501'], idx, path)
        );
      case '10901':
        paths = getThumbnails(CLOTHES_LINEUP['10901']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10901'], idx, path)
        );
      default:
    }
  };

  return (
    <div>
      {renderIcons()}
      <Slider {...SETTINGS}>{renderThumbnails()}</Slider>
    </div>
  );
};

export default EditTools;
