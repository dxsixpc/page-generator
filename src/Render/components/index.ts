import * as FormComponents from '@zpcscc/components';
import { type FC } from 'react';
import ErrorAlertWidget from './ErrorAlertWidget';

export type ComponentMapType = Record<string, FC<any>>;
export { default as ErrorAlertWidget, type ErrorAlertWidgetProps } from './ErrorAlertWidget';

// 组件库中的所有组件
export const componentsMap = {
  ...FormComponents
};

/**
 * @name 通过组件type获取对应的组件实例
 * @param componentType 组件类型
 * @param componentMap 外部传入的组件map
 * @returns
 */
export const getComponent = (componentType?: string, componentMap?: ComponentMapType): FC<any> => {
  if (!componentType) return ErrorAlertWidget;
  return Reflect.get({ ...componentsMap, ...componentMap }, componentType) || ErrorAlertWidget;
};
