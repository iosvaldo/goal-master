import { FaGithub } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <ul>
        <div style={{ display: "flex", alignItems:"center" }}>
          <li>
            <a
              className="git_link" style={{color:"#fff",}}
              rel="noreferrer"
              href="https://www.github.com/iosvaldo"
              target="_blank"
            >
              <FaGithub  />
              
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer