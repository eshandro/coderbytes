// is num a power of 2?
function powersOfTwo(num) {
  if (num === 1) return true;
  if (num === 0 || num % 2 !== 0) return false;
  return powersOfTwo(num / 2);
}