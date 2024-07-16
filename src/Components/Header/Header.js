import { MDBIcon } from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <header>
      <div className="header-content-container">
        <div className="web-logo">
          <div className="web-title">AlgoVisualizer</div>
          <div className="web-array">
            <div className="web-block" style={{
                height: '12px',
                backgroundColor: 'white',
              }}></div>
            <div
              className="web-block"
              style={{
                height: '22px',
                backgroundColor: 'red',
              }}
            ></div>
            <div className="web-block" style={{
                height: '10px',
                backgroundColor: 'white',
              }}></div>
            <div className="web-block" style={{
                height: '18px',
                backgroundColor: 'white',
              }}></div>
            <div className="web-block" style={{
                height: '7px',
                backgroundColor: 'white',
              }}></div>
          </div>
        </div>
        <div className="social-icon-container">
          <a href="https://github.com/Kevrev/algoVisualizer" target="_blank" rel="noreferrer">
            <MDBIcon fab icon="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-small-a77152285/"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
