// Module imports
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';

/**
 * Footer component
 * @component
 * @return {object} - The UI DOM object
 */
const Footer = () => (
  <footer>
    <div className="container">
      <div className="d-flex shadow bg-white p-3">
        <div className="flex-grow-1">amjedidiah &copy; 2021</div>
        <div className="text-right">
          <a
            href="https://github.com/amjedidiah"
            className="mr-3 large text-primary--custom-2"
          >
            <span aria-label="Github" className="text-primary--custom-2">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/am-jedidiah/"
            className="mr-3 large text-primary--custom-2"
          >
            <span aria-label="LinkedIn" className="text-primary--custom-2">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Footer export
export default Footer;
