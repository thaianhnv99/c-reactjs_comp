import HeaderSubTitle from './HeaderSubTitle';
import { menu } from 'src/shared/utils/constant';
import { useLocation, matchPath } from 'react-router-dom';

const WrapperHeaderSubTitle = () => {
  const { pathname } = useLocation();
  const links = menu.flatMap((item) => item.subItem);
  const getInforRouter = links.filter((link) => matchPath(link?.url || '', pathname))?.[0];
  if (!getInforRouter || !getInforRouter?.title) return null;
  return <HeaderSubTitle title={getInforRouter.title} description={getInforRouter.description} />;
};

export default WrapperHeaderSubTitle;
