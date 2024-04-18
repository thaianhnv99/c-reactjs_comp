import { Main } from './Main';
import { type ComponentProps } from 'react';

type MainTemplateProps = ComponentProps<typeof Main>;

const MainTemplate = ({ children, headerTitle }: MainTemplateProps) => {
  return <Main headerTitle={headerTitle}>{children}</Main>;
};

export default MainTemplate;
