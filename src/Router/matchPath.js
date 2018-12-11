function matchPath(pathname, options = {}) {

  const { path } = options;

  const regexp = new RegExp(path);
  const match = regexp.exec(pathname);

  if (!match) return null;
  const [url, ...values] = match;

  return {
    path,
    url: path === '/' && url === '' ? '/' : url,
    isExact: url === pathname,
    param: values[0]
  }
}

export default matchPath;
