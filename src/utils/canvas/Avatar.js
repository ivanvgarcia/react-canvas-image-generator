import { UPPER_POSE_MAP, LOWER_POSE_MAP } from '../constantData';

const createImage = function(path) {
  var image = new Image();
  image.src = path;
  return image;
};

class Avatar {
  constructor() {
    this.imagesToRender = [];
    this.previousClothes = null;
    this.upperPose = '4';
    this.lowerPose = '1';
    this.bgImage = createImage('images/ui/bg.png');
    this.bodyImage = createImage('images/body/body_1_1.png');
    this.clothesInfoMap = {
      '10101': null, // Hair
      '10201': null, // Hat
      '10301': null, // Face
      '10401': null, // Top
      '10501': null, // Bottom
      '10901': null // Shoe
    };

    this.attachClothes('101010001');
    this.attachClothes('102010001');
    this.attachClothes('103010001');
    this.attachClothes('104010001');
    this.attachClothes('105010001');
    this.attachClothes('109010001');
  }

  render(ctx) {
    ctx.drawImage(this.bgImage, 0, 0);

    if (this.clothesInfoMap['10201']) {
      ctx.drawImage(this.clothesInfoMap['10201'].back, 0, 0);
    }
    // Hair back
    if (this.clothesInfoMap['10101']) {
      ctx.drawImage(this.clothesInfoMap['10101'].back, 0, 0);
    }
    // Top back
    if (this.clothesInfoMap['10401']) {
      ctx.drawImage(this.clothesInfoMap['10401'].back, 0, 0);
    }
    // Bottom back
    if (this.clothesInfoMap['10501']) {
      ctx.drawImage(this.clothesInfoMap['10501'].back, 0, 0);
    }
    // Shoe back
    if (this.clothesInfoMap['10901']) {
      ctx.drawImage(this.clothesInfoMap['10901'].back, 0, 0);
    }
    // Body
    ctx.drawImage(this.bodyImage, 0, 0);
    // Face front
    if (this.clothesInfoMap['10301']) {
      ctx.drawImage(this.clothesInfoMap['10301'].front, 0, 0);
    }
    // Shoe front
    if (this.clothesInfoMap['10901']) {
      ctx.drawImage(this.clothesInfoMap['10901'].front, 0, 0);
    }
    // Top inner
    if (this.clothesInfoMap['10401']) {
      ctx.drawImage(this.clothesInfoMap['10401'].inner, 0, 0);
    }
    // Bottom front
    if (this.clothesInfoMap['10501']) {
      ctx.drawImage(this.clothesInfoMap['10501'].front, 0, 0);
    }
    // Top front
    if (this.clothesInfoMap['10401']) {
      ctx.drawImage(this.clothesInfoMap['10401'].front, 0, 0);
    }
    // Hair front
    if (this.clothesInfoMap['10101']) {
      ctx.drawImage(this.clothesInfoMap['10101'].front, 0, 0);
    }
    // Hat front
    if (this.clothesInfoMap['10201']) {
      ctx.drawImage(this.clothesInfoMap['10201'].front, 0, 0);
    }
  }

  attachClothes(clothesId) {
    const categoryId = clothesId.substr(0, 5);
    const clothesInfo = {};
    clothesInfo.front = createImage(`images/clothes/${clothesId}_f.png`);

    // Faceは奥用画像なし
    if (categoryId !== '10301') {
      clothesInfo.back = createImage(`images/clothes/${clothesId}_b.png`);
    }

    // TopはInner用画像がある
    if (categoryId === '10401') {
      clothesInfo.inner = createImage(`images/clothes/${clothesId}_i.png`);
    }

    this.clothesInfoMap[categoryId] = clothesInfo;

    // Topの場合は上半身ポーズが変わる
    var newUpperPose = null;
    if (categoryId === '10401') {
      newUpperPose = UPPER_POSE_MAP[clothesId];
    }

    let newLowerPose = null;
    if (categoryId === '10901') {
      newLowerPose = LOWER_POSE_MAP[clothesId];
    }

    this.changePose(
      newUpperPose != null ? newUpperPose : this.upperPose,
      newLowerPose != null ? newLowerPose : this.lowerPose
    );
  }

  changePose(upper, lower) {
    this.upperPose = upper;
    this.lowerPose = lower;
    this.bodyImage.src = `images/body/body_${this.upperPose}_${this.lowerPose}.png`;
  }
}

export default Avatar;
