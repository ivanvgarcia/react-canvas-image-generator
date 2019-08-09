import React, { useState } from 'react';
import { Icon, Thumbnail } from './EditToolsStyles';
import { usePersistentCanvas } from 'components/hooks';
import { getThumbnails, getToolIcons } from 'utils/canvasToolIcons';
import {
  CATEGORY_IDS,
  HAIR,
  SETTINGS,
  ACCESSORIES,
  EYES,
  TOPS,
  BOTTOMS,
  FOOTWEAR
} from 'utils/constantData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EditTools = ({ canvas }) => {
  const [activeIcon, setActiveIcon] = useState('10101');

  const renderIcons = () => {
    const imagePaths = getToolIcons(CATEGORY_IDS, activeIcon);

    return imagePaths.map((path, idx) => (
      <Icon
        key={CATEGORY_IDS[idx]}
        onClick={e => setActiveIcon(CATEGORY_IDS[idx])}
        src={path}
        alt="icon"
        srcset=""
      />
    ));
  };

  //   const renderToCanvas = () => {

  //   }

  const thumbnail = (data, idx, path) => (
    <Thumbnail key={data[idx]} src={path} alt="hair" />
  );

  const renderThumbnails = () => {
    let paths;
    switch (activeIcon) {
      case '10101':
        paths = getThumbnails(HAIR);
        return paths.map((path, idx) => thumbnail(HAIR, idx, path));
      case '10201':
        paths = getThumbnails(ACCESSORIES);
        return paths.map((path, idx) => thumbnail(ACCESSORIES, idx, path));
      case '10301':
        paths = getThumbnails(EYES);
        return paths.map((path, idx) => thumbnail(EYES, idx, path));
      case '10401':
        paths = getThumbnails(TOPS);
        return paths.map((path, idx) => thumbnail(TOPS, idx, path));
      case '10501':
        paths = getThumbnails(BOTTOMS);
        return paths.map((path, idx) => thumbnail(BOTTOMS, idx, path));
      case '10901':
        paths = getThumbnails(FOOTWEAR);
        return paths.map((path, idx) => thumbnail(FOOTWEAR, idx, path));
      default:
        paths = getThumbnails(HAIR);
        return paths.map((path, idx) => thumbnail(HAIR, idx, path));
    }
  };

  return (
    <>
      {renderIcons()}
      <Slider {...SETTINGS}>{renderThumbnails()}</Slider>
    </>
  );
};

export default EditTools;
