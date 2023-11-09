export const Footer: React.FC = () => {
  return (
    <footer className="sticky top-[100vh] flex flex-col items-start gap-1 border-t px-8 py-4 text-sm text-gray-400 sm:flex-row sm:items-center">
      <div className="flex gap-1">
        <p>Build by</p>
        <a
          href="https://github.com/imaimai17468"
          rel="noreferrer noopener"
          className="border-b"
        >
          imaimai17468.
        </a>
      </div>
      <div className="flex gap-1">
        <p>The source code is available on </p>
        <a
          href="https://github.com/imaimai17468/atcoder-teambattle"
          rel="noreferrer noopener"
          className="border-b"
        >
          GitHub.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
