import { useState } from 'react';

export default canvas => {
  const [data, setData] = useState({
    base64: '',
    pokemonImg: ''
  });

  return [data, setData];
};
