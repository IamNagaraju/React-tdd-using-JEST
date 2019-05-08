export const maxNumber = array => {
  if (!(array || []).length) return 0;

  return Math.max(...array);
};
