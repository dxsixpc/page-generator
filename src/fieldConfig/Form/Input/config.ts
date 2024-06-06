import { type ComponentItemType } from 'src/types';
import { labelSpaceConfig, placeholderConfig, showCountConfig } from '../../commonConfig';

// 输入框配置项
export const inputConfig = (): ComponentItemType[] => {
  return [labelSpaceConfig(), placeholderConfig(), showCountConfig()];
};
