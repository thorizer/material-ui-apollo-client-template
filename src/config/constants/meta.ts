import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Material UI Sample',
  description: 'Connected with Apollo Server',
  image: '/img/logo-192x192.png'
};

export const getCustomMeta = (path: string, t: any): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Material UI Sample')} | ${t('Home')}`
      };
    default:
      return null;
  }
};
