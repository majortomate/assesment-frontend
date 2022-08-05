/* eslint-disable no-else-return */
// eslint-disable-next-line consistent-return
function rating(rate) {
  switch (true) {
    case (rate <= 1):
      return '⭐';
    case (rate <= 2 && rate > 1):
      return '⭐ ⭐';
    case (rate <= 3 && rate > 2):
      return '⭐ ⭐ ⭐';
    case (rate <= 4 && rate > 3):
      return '⭐ ⭐ ⭐ ⭐';
    case (rate <= 5 && rate > 4):
      return '⭐ ⭐ ⭐ ⭐ ⭐';
    default:
      return 'No Stars';
  }
}
export default rating;
