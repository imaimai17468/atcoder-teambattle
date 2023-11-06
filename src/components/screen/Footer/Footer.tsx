export const Footer: React.FC = () => {
  return (
    <footer className="flex items-center gap-1 border-t px-8 py-4 text-sm text-gray-400">
      <p>Build by</p>
      <a
        href="https://github.com/imaimai17468"
        rel="noreferrer noopener"
        className="border-b"
      >
        imaimai17468.
      </a>
      <p>The source code is available on </p>
      <a
        href="https://github.com/imaimai17468/atcoder-teambattle"
        rel="noreferrer noopener"
        className="border-b"
      >
        GitHub.
      </a>
    </footer>
  );
};

export default Footer;
