import { useState } from 'react';

export default canvas => {
  const [data, setData] = useState({
    base64: '',
    pokemonImg: '',
    upperPose: '4',
    lowerPose: '1',
    accessoryB: 'images/clothes/102010001_b.png',
    hairB: 'images/clothes/101010001_b.png',
    topB: 'images/clothes/104010001_b.png',
    bottomB: 'images/clothes/105010001_b.png',
    footwearB: 'images/clothes/109010003_b.png',
    body: 'images/body/body_4_1.png',
    face: 'images/clothes/103010001_f.png',
    footwearF: 'images/clothes/109010003_f.png',
    topI: 'images/clothes/104010001_i.png',
    bottomF: 'images/clothes/105010001_f.png',
    topF: 'images/clothes/104010001_f.png',
    hairF: 'images/clothes/101010001_f.png',
    accessoryF: 'images/clothes/102010001_f.png'
  });

  return [data, setData];
};
