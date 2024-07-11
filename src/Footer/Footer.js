import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <footer>
       <hr className="hr hr-blurry" />
        <div className="social-icon-container">
          <a href="https://github.com/Kevrev/algoVisualizer" target="_blank">
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-small-a77152285/"
            target="_blank"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
