export default function Footer() {
  return (
    <footer className="text-center text-gray-600 dark:text-gray-300">
      <hr className="my-4" />
      <div className="flex justify-center">
        {/* github */}
        <a
          href="https://github.com/osmaoguzhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:scale-110 transition duration-300"
        >
          <span className="sr-only">Github</span>
          <img
            src="../github.svg"
            alt="github"
            className="dark:invert"
            height={48}
            width={48}
          />
        </a>
        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/osmaoguzhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 text-gray-600 dark:text-gray-300 hover:scale-110 transition duration-300"
        >
          <span className="sr-only">LinkedIn</span>
          <img src="../linkedin.svg" alt="linkedin" />
        </a>
        {/* twitter */}
        <a
          href="https://twitter.com/osma_oguzhan"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 text-gray-600 dark:text-gray-300 hover:scale-110 transition duration-300"
        >
          <span className="sr-only">Twitter</span>
          <img src="../twitter.svg" alt="twitter" />
        </a>
        {/* instagram */}
        <a
          href="https://www.instagram.com/osmaoguzhann/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 text-gray-600 dark:text-gray-300 hover:scale-110 transition duration-300"
        >
          <span className="sr-only">Instagram</span>
          <img src="../instagram.svg" alt="instagram" />
        </a>
      </div>
      <div className="mt-4">
        <span>© 2023</span>
        <span className="mx-1">·</span>
        <span>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/osmaoguzhan/"
            className="hover:text-red-300"
          >
            Oğuzhan Osma
          </a>
        </span>
      </div>
    </footer>
  );
}
