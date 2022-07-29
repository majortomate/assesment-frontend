/* eslint-disable no-else-return */
// eslint-disable-next-line consistent-return
function rating(rate) {
  if (rate <= 1) {
    return '⭐';
  } else if (rate <= 2 && rate > 1) {
    return '⭐ ⭐';
  } else if (rate <= 3 && rate > 2) {
    return '⭐ ⭐ ⭐';
  } else if (rate <= 4 && rate > 3) {
    return '⭐ ⭐ ⭐ ⭐';
  } else if (rate <= 5 && rate > 4) {
    return '⭐ ⭐ ⭐ ⭐ ⭐';
  }
}
export default rating;
