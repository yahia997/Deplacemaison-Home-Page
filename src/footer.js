import mail from "./images/newsletter.svg";
import arrow from "./images/arrow.svg";

const Footer = () => {
  return <>
    <footer className="container-fluid py-5">
      <section className="container">
        <div className="row">
          <div className="col-md-4 d-md-block d-none">
            <h6 className="w-100 fs-6">SUBSCRIBE TO NEWSLETTER</h6>
            <div className="w-100 mb-5">
              <img src={mail} alt="mail" width={"42px"} />
            </div>
            <h6 className="w-100 fs-6 mt-5">SUBSCRIBE TO NEWSLETTER</h6>
            <form>
            <div className="d-flex justify-content-end align-items-center">
              <input type="email"
                className="newsletter-input w-100 px-3 py-2 pe-5"
                  placeholder="email address"
                  autoComplete="off"
              />
              <button className="text-uppercase border-0 bg-transparent" type="submit">submit</button>
            </div>
            </form>
          </div>
          <div className="col-md-3 col-5 ps-md-5 ps-0">
            <small className="w-100">INFO</small>
            <div className="overflow-hidden h-24px my-2">
              <a href="/faq" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">f{`&`}q</span>
               <span className="text-uppercase fs-6 text-n fw-bold">f{`&`}q</span>
              </a>
            </div>
            <div className="overflow-hidden h-24px my-2">
              <a href="/returns" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">returns</span>
               <span className="text-uppercase fs-6 text-n fw-bold">returns</span>
              </a>
            </div>
            <div className="overflow-hidden h-24px my-2">
              <a href="/contact" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">contact</span>
               <span className="text-uppercase fs-6 text-n fw-bold">contact</span>
              </a>
            </div>
            <small className="w-100 mt-5 text-uppercase">credits</small>
          </div>
          <div className="col-md-3 col-5">
            <small className="w-100">POLICY</small>
            <div className="overflow-hidden h-24px my-2">
              <a href="/faq" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">terms</span>
               <span className="text-uppercase fs-6 text-n fw-bold">terms</span>
              </a>
            </div>
            <div className="overflow-hidden h-24px my-2">
              <a href="/returns" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">privacy</span>
               <span className="text-uppercase fs-6 text-n fw-bold">privacy</span>
              </a>
            </div>
            <div className="overflow-hidden h-24px my-2">
              <a href="/contact" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1">
                <span className="text-uppercase fs-6 text-n fw-bold">cookie</span>
               <span className="text-uppercase fs-6 text-n fw-bold">cookie</span>
              </a>
            </div>
            <small className="w-100 mt-5 text-uppercase text-nowrap">© 2020 déplacé maison.</small>
          </div>
          <div className="col-2">
            <button onClick={() => window.scrollTo(0, 0)} className="border-0 bg-transparent to-top">
              <div className="explore d-flex justify-content-center align-items-center">
                <img src={arrow} alt="arrow" width={"25px"}/>
              </div>
            </button>
          </div>
        </div>
      </section>
    </footer>
  </>
}

export default Footer;