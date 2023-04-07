import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <div className="fixed left-0 bottom-0 w-full bg-[#333] opacity-90 p-1">
      <ul className="flex justify-center ">
        <div className="flex items-center">
          <li className="">
            <a
              className=" hover:bg-[#0072ff] rounded-lg text-[#fff] p-1 items-center  w-[3px]"
              rel="noreferrer"
              href="https://www.github.com/iosvaldo"
              target="_blank"
            >
              <FaGithub className="svg-icon" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer