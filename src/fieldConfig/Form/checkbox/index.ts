import { type CheckboxGroupProps } from '@zpcscc/components';
import { type FieldConfigType } from 'src/types';
import { checkboxOptionsConfig } from '../../commonConfig';
import { checkboxConfig } from './config';

// 多选框
const checkbox: FieldConfigType<CheckboxGroupProps> = {
  label: '多选',
  componentItem: {
    id: 'checkbox',
    type: 'CheckboxGroup',
    label: '多选',
    showLabel: true,
    props: {
      size: 'large',
      optionsConfig: checkboxOptionsConfig().props?.optionsConfig
    }
  },
  configPanel: checkboxConfig
};

export default checkbox;
