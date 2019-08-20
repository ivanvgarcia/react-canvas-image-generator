/* eslint-disable array-callback-return */
// const fs = require('fs');

// fs.readdir('../../public/images/thumbnail', function(err, link) {
//   link.forEach(link => {
//     if (link.startsWith('109')) {
//       console.log(link);
//     }
//   });
// });

export const getToolIcons = (data, activeIcon) => {
  let imagePaths = [];
  data.forEach(categoryId => {
    if (activeIcon === categoryId) {
      imagePaths.push(`images/ui/icon-on_${categoryId}.png`);
    } else {
      imagePaths.push(`images/ui/icon-off_${categoryId}.png`);
    }
  });
  return imagePaths;
};

export const getThumbnails = data => {
  console.log(data);
  let imagePaths = [];
  data.map(id => {
    imagePaths.push(`images/thumbnail/${id}.png`);
  });

  return imagePaths;
};
