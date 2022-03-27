/**
 * 项目初始化总线
 */
import { initRem } from '@/utils/calcRem';

export const initialize = async (): Promise<boolean> => {
  // 初始化rem
  initRem(window, document.documentElement);
  window.calcRem(1080);
  console.trace('rem初始化完成...');

  return Promise.resolve(true);
};
