import React, { useState, useEffect } from 'react';
import { Icon, Thumbnail } from './EditToolsStyles';
import { getThumbnails, getToolIcons } from 'utils/canvasToolIcons';
import {
  CLOTHES_LINEUP,
  SETTINGS,
  UPPER_POSE_MAP,
  LOWER_POSE_MAP
} from 'utils/constantData';
import Scene from 'utils/canvas/Scene';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import usePersistentData from 'components/hooks/usePersistentData';

const EditTools = ({ canvasRef }) => {
  const [activeIcon, setActiveIcon] = useState('10101');
  const [data, setData] = usePersistentData({});

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scene = new Scene(canvas, ctx, data);
    scene.render();
  }, [canvasRef, data]);

  const thumbnail = (avatarData, type, idx, path) => (
    <Thumbnail
      key={data[idx]}
      src={path}
      alt="hair"
      onClick={() => changeClothes(avatarData[idx], type)}
    />
  );

  const changeClothes = (id, type) => {
    switch (type) {
      case 'hair':
        setData({
          ...data,
          hairB: `images/clothes/${id}_b.png`,
          hairF: `images/clothes/${id}_f.png`
        });
        break;
      case 'accessory':
        setData({
          ...data,
          accessoryF: `images/clothes/${id}_f.png`,
          accessoryB: `images/clothes/${id}_b.png`
        });
        break;
      case 'face':
        setData({
          ...data,
          face: `images/clothes/${id}_f.png`
        });
        break;
      case 'top':
        setData({
          ...data,
          upperPose: UPPER_POSE_MAP[id],
          topF: `images/clothes/${id}_f.png`,
          topB: `images/clothes/${id}_b.png`,
          topI: `images/clothes/${id}_i.png`
        });
        break;
      case 'bottom':
        setData({
          ...data,
          bottomF: `images/clothes/${id}_f.png`,
          bottomB: `images/clothes/${id}_b.png`
        });
        break;
      case 'footwear':
        setData({
          ...data,
          lowerPose: LOWER_POSE_MAP[id],
          footwearF: `images/clothes/${id}_f.png`,
          footwearB: `images/clothes/${id}_b.png`
        });
        break;
      default:
    }
  };

  // const changePose = () => {
  //   var newUpperPose = null;
  //   if (categoryId === '10401') {
  //   }

  //   // Shoeの場合は下半身ポーズが変わる
  //   var newLowerPose = null;
  //   if (categoryId === '10901') {
  //     newLowerPose = LOWER_POSE_MAP[clothesId];
  //   }

  //   this.changePose(
  //     newUpperPose != null ? newUpperPose : this.upperPose_,
  //     newLowerPose != null ? newLowerPose : this.lowerPose_
  //   );
  // };

  const renderThumbnails = () => {
    let paths;
    switch (activeIcon) {
      case '10101':
        paths = getThumbnails(CLOTHES_LINEUP['10101']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10101'], 'hair', idx, path)
        );
      case '10201':
        paths = getThumbnails(CLOTHES_LINEUP['10201']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10201'], 'accessory', idx, path)
        );
      case '10301':
        paths = getThumbnails(CLOTHES_LINEUP['10301']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10301'], 'face', idx, path)
        );
      case '10401':
        paths = getThumbnails(CLOTHES_LINEUP['10401']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10401'], 'top', idx, path)
        );
      case '10501':
        paths = getThumbnails(CLOTHES_LINEUP['10501']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10501'], 'bottom', idx, path)
        );
      case '10901':
        paths = getThumbnails(CLOTHES_LINEUP['10901']);
        return paths.map((path, idx) =>
          thumbnail(CLOTHES_LINEUP['10901'], 'footwear', idx, path)
        );
      default:
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
