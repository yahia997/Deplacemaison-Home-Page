import React, { useState, useEffect } from "react";
import Logo from "./images/logo-lite.svg";
import Logo2 from "./images/logo-2.svg";
import LogoWhite from "./images/logo-white.svg";
import { Menu } from "./menu";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden");
    }, [openMenu]);

    function openCart() {
        document.getElementById("cart").classList.add("open-cart");
        document.getElementById("cart-2").classList.add("open-cart-2");
    }

    return <>
        <nav className="container-fluid">
            <div className="container-fluid">

            <div className="row py-3">
                <div className="col-4 mobile-rotate">
                    <img src={Logo} alt="logo" width={"35"} className="d-md-block d-none pointer" />
                    <img src={openMenu ? LogoWhite : Logo2} alt="logo" width={"100"} className="d-md-none d-block transition" />
                </div>
                <div className={`col-4 d-flex justify-content-center ${openMenu ? "open-ham" : ""}`}>
                    <button className={`ham border-0 bg-transparent d-sm-none d-flex ${openMenu ? "text-white": ""}`} onClick={() => setOpenMenu(!openMenu)}>
                        <span className={`${openMenu ? "bg-white": ""}`}></span>
                        <span className={`${openMenu ? "bg-white": ""}`}></span>
                        <span className={`${openMenu ? "bg-white": ""}`}></span>
                    </button>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-md-start align-items-center">
                    <button className="border-0 bg-transparent custom-hover-1 px-2"
                        onClick={() => openCart()}
                    >
                        <span className={`text-uppercase fs-6 ${openMenu ? "text-white": "text-n"}`}>cart</span>
                        <span className={`text-uppercase fs-6 ${openMenu ? "text-white": "text-n"}`}>cart</span>
                    </button>
                    <span className={`fs-5 fw-bold ${openMenu ? "text-white" : "text-n"}`} height={"24px"} id="cart-num">
                        {
                            localStorage.getItem("cart") ?
                            JSON.parse(localStorage.getItem("cart")).length
                                :
                                0
                            }
                    </span>
                </div>
            </div>
            </div>
        </nav>
        < Menu open={openMenu} />

        <section className="options d-sm-block d-none">
            <section className="container">
                <div className="row fit-content">
                    <a href="/shop" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1 " hef="/category">
                        <span className="text-uppercase fs-6 mix-blend text-n">shop</span>
                        <span className="text-uppercase fs-6 mix-blend text-n">shop</span>
                    </a>
                </div>
                <div className="row fit-content">
                    <a href="/collections" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1" hef="">
                        <span className="text-uppercase fs-6 mix-blend text-n">collections</span>
                        <span className="text-uppercase fs-6 mix-blend text-n">collections</span>
                    </a>
                </div>
                <div className="row fit-content">
                    <a href="/about" className="border-0 text-decoration-none bg-transparent custom-hover-1 my-1" hef="">
                        <span className="text-uppercase fs-6 mix-blend text-n">about</span>
                        <span className="text-uppercase fs-6 mix-blend text-n">about</span>
                    </a>
                </div>
            </section>
        </section>
    </>
}

export default Nav;