export const themeColors = {
  background: "#ffffff",
  text: "#000000",
};

export const pageSizes = {
  width: 595.28,
  height: 841.89,
};

export const sizePerc = (n: number) => {
  return (n * pageSizes.height) / 100;
};

export const widthPerc = (n: number) => {
  return (n * pageSizes.width) / 100;
};
