/**
 * 从 itemElements 中抽离出所有的 img 元素
 */
export const getImgElements = (
  itemElements: HTMLElement[]
): HTMLImageElement[] => {
  const imgElements: HTMLImageElement[] = [];
  itemElements.forEach((el) => {
    imgElements.push(...Array.from(el.getElementsByTagName("img")));
  });
  return imgElements;
};

/**
 * 生成所有的图片链接数组
 */
export const getAllImg = (imgElements: HTMLImageElement[]): string[] => {
  return imgElements.map((imgElement) => imgElement.src);
};

/**
 * 监听图片数组加载完成（通过 promise 完成）
 */
export interface LoadedImgResult {
  img: string;
  index: number;
}

export const onComplateImgs = (imgs: string[]): Promise<LoadedImgResult[]> => {
  const promiseAll: Promise<LoadedImgResult>[] = imgs.map((img, index) => {
    return new Promise((resolve) => {
      const imageObj = new Image();
      imageObj.src = img;
      imageObj.onload = () => {
        resolve({ img, index });
      };
    });
  });
  return Promise.all(promiseAll);
};

/**
 * 返回列高对象中的最小高度所在的列
 */
export const getMinHeightColumn = (
  columnHeightObj: Record<string, number>
): string | undefined => {
  const minHeight = getMinHeight(columnHeightObj);
  return Object.keys(columnHeightObj).find(
    (key) => columnHeightObj[key] === minHeight
  );
};

/**
 * 返回列高对象中的最小的高度
 */
export const getMinHeight = (
  columnHeightObj: Record<string, number>
): number => {
  const columnHeightArr = Object.values(columnHeightObj);
  return Math.min(...columnHeightArr);
};

/**
 * 返回列高对象中的最大的高度
 */
export const getMaxHeight = (
  columnHeightObj: Record<string, number>
): number => {
  const columnHeightArr = Object.values(columnHeightObj);
  return Math.max(...columnHeightArr);
};
