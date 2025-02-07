// import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="border-top text-muted text-center position-absolute bottom-0 w-100 py-3 footer">
        <div className="d-flex gap-3 justify-content-center py-2">
          <a
            href="https://www.linkedin.com/in/medina-fabricio-aa81741b5"
            target="blank"
          >
            {" "}
            <i class="bi bi-linkedin fs-2 text-dark-emphasis"></i>
          </a>
          <a href="https://github.com/MFabri31" target="blank">
            {" "}
            <i class="bi bi-github fs-2 text-dark-emphasis"></i>
          </a>
        </div>
        <p className="lead fst-italic">
          Desarrollado con <span className="fst-normal"> ❤️ </span>por
          <a href="" className="fw-semibold text-decoration-none text-dark">
            {" "}
            @MFabri31
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
