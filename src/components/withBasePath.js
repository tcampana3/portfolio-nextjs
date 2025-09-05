export const withBasePath = (src) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src.startsWith('/') ? src : `/${src}`}`;
