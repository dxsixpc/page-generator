import { MonacoEditor, Title } from '@zpcscc/components';
import { Render, type AnyObject, type ComponentItemType } from '@zpcscc/generator';
import { toData, toString } from '@zpcscc/utils';
import { useEffect, useState, type FC } from 'react';
import { EditorSpace, RenderSpace, SpaceWrapper } from './Styled';
import { pageData } from './mock';

// 渲染器
const RenderPanel: FC = () => {
  const [value, setValue] = useState<ComponentItemType[]>(pageData);

  const onChange = (value?: string) => {
    const newValueData = toData(value);
    // 是正确的数组，再更新数据
    if (Array.isArray(newValueData)) {
      setValue(newValueData);
    }
  };

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    console.log('changeValue:', changeValue);
    console.log('values:', values);
  };

  useEffect(() => {
    const sidebar = document.querySelectorAll('.dumi-default-sidebar')[0] as HTMLElement;
    sidebar.style.display = 'none';
    return () => {
      sidebar.style.display = 'block';
    };
  }, []);

  return (
    <SpaceWrapper align='start'>
      <EditorSpace direction='vertical'>
        <Title>代码编辑器</Title>
        <MonacoEditor
          defaultValue={toString(value, null, 2)}
          height={500}
          width={500}
          language='json'
          onChange={onChange}
        />
      </EditorSpace>
      <RenderSpace direction='vertical'>
        <Title>实时预览渲染效果</Title>
        <Render componentItems={value} onChange={onValuesChange} />
      </RenderSpace>
    </SpaceWrapper>
  );
};

export default RenderPanel;
