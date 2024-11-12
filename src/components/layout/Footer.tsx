const Footer = () => {
  return (
    <footer className="flex w-full justify-center text-balance bg-blue-main py-1 text-center text-white">
      <span>
        © 2024 Made with 🧡 by Charae
        <span className="hidden md:inline">{' | '}</span>
        <a
          href="https://github.com/CharaeKeow/charae-dot-my"
          target="_blank"
          rel="noreferrer"
          className="block hover:underline md:inline"
        >
          View source code
        </a>
      </span>
    </footer>
  );
};

export default Footer;
