import { useEffect, useRef } from "react";

const Menu = ({ open }) => {
    const menuContent = useRef(null);

    useEffect(() => {
        if (open) {
            menuContent.current.style.top = `${window.scrollY + 100}px`;
        }
    }, [open]);

    return <>
        <section className={`${open ? "menu-open" : ""} menu-default d-sm-none`}>
            <div className="top"></div>
            {open ?

            <div className="container menu-content" ref={menuContent}>
                <div className="row">
                    <div className={`col-12 ${open? "menu-text-animate" : "menu-text-animate-2"}`}>
                        <p className="text-uppercase text-white m-0">tabs</p>
                        <span className="line"></span>
                    </div>
                    </div>
                    <ul className="list-unstyled my-4">
                        <li className={`${open ? "menu-text-animate delay" : "menu-text-animate-2"} my-3 pointer`}
                            onClick={() => window.location.pathname = "/shop"}>
                            <p href="" className="text-uppercase text-decoration-none text-white fs-2 fw-bold">shop</p>
                        </li>
                        <li className={`${open? "menu-text-animate delay-1" : "menu-text-animate-2"} my-3 pointer`}
                        onClick={() => window.location.pathname = "/collections"}>
                            <p href="" className="text-uppercase text-decoration-none text-white fs-2 fw-bold">collections</p>
                        </li>
                        <li className={`${open? "menu-text-animate delay-2" : "menu-text-animate-2"} my-3 pointer`}
                        onClick={() => window.location.pathname = "/about"}>
                            <p href="" className="text-uppercase text-decoration-none text-white fs-2 fw-bold">about</p>
                        </li>
                    </ul>
                    <div className="row">
                        <div className={`pointer col-6 ${open? "menu-text-animate delay-3" : "menu-text-animate-2"}`}>
                            <p className="text-uppercase text-white m-0 fs-3 ">faq</p>
                        </div>
                        <div className={`pointer col-6 ${open? "menu-text-animate delay-3" : "menu-text-animate-2"}`}>
                            <p className="text-uppercase text-white m-0 fs-3 ">returns</p>
                        </div>
                        <div className={`pointer col-6 ${open? "menu-text-animate delay-3" : "menu-text-animate-2"}`}>
                            <p className="text-uppercase text-white m-0 fs-3 ">terms</p>
                        </div>
                        <div className={`pointer col-6 ${open? "menu-text-animate delay-3" : "menu-text-animate-2"}`}>
                            <p className="text-uppercase text-white m-0 fs-3 ">privacy</p>
                        </div>
                    </div>
            </div>
            : null
            }
        </section>
    </>
}

export { Menu };