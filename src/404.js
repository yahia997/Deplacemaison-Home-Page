import { useRef, useEffect } from "react";
import { ReactComponent as Img } from "./images/404.svg";

const NotFound = () => {
  const notFound = useRef(null);

  useEffect(() => {
    notFound.current.style.height = `${window.innerHeight}px`;
  }, []);

  return <>
  <div className="top"></div>
      <div ref={notFound} className="d-flex align-items-center justify-content-center flex-wrap">
      <Img className="cacet" />
      <section className="container-fluid deplace-line-404-p">
                <div className="deplace-line deplace-line-404 d-flex align-items-center bg-transparent border-0">
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                        404
                        404
                    </p>
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                         404
                        
                        404
                    </p>
            </div>
                <div className="deplace-line deplace-line-404 d-flex align-items-center line-2 bg-transparent border-0">
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                         404
                        
                        404
                    </p>
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                         404
                        
                        404
                    </p>
            </div>
        </section>
      <div className="container mb-5">
        
      <p className="w-100 text-n m-0 fs-4 fw-normal text-center">Wrap the cassette up,</p>
      <p className="w-100 text-n fs-4 fw-normal text-center">and 
        <a href="/" className="text-n px-1">come back</a>
        to home
      </p>
      </div>
      </div>
  </>
}

export { NotFound };