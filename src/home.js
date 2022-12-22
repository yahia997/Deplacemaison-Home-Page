import React, { useEffect, useRef} from "react";
import man from "./images/home-man.jpeg";
import women from "./images/home-women.jpeg";
import arrow from "./images/arrow.svg";
import EqualSign from "./images/=.svg";


setInterval(() => {
    if (document.getElementById("h4")) {
        document.getElementById("h4").classList.toggle("up-down");
    }
    if (document.getElementById("h3")) {
        document.getElementById("h3").classList.toggle("up-down");
        document.querySelectorAll("#h3 h3")[0].classList.toggle("fade");
        document.querySelectorAll("#h3 h3")[1].classList.toggle("fade");
    }
}, 5000);

const Home = () => {
    const noItems = useRef(null);

    useEffect(() => {
        const animateOnScrolling = () => {
            let distance = noItems.current.getBoundingClientRect().y;
            if (distance <= window.innerHeight/2) {
                noItems.current.classList.add("no-items-show");
            }
        }

        window.addEventListener("scroll", animateOnScrolling);

        return _ => {
            window.removeEventListener("scroll", animateOnScrolling);
        }
    });

    return <>
        <div className="top"></div>
        
        <section className="container">
            <div className="row animate-scroll">
                <h1 className="text-uppercase text-end col-12 m-0 p-0">spring</h1>
            </div>
            <div className="row flex-nowrap animate-scroll">
                <h1 className="text-uppercase text-end col-md-10 col-10 m-0 p-0">SUMMER</h1>
                <p className="text-uppercase col-1 fs-lg-1 fs-md-2 fs-3 d-flex justify-content-center align-items-center ms-4 m-0 text-center ff-3 coll-2022">coll. 2022</p>
            </div>
            <div className="row justify-content-end flex-nowrap">
                <div className="d-flex fit-content justify-content-center align-items-center">
                <div className="col-lg-4 col-5 justify-content-end d-flex home-img-p overflow-hidden flex-wrap p-0">
                    <img src={man} alt="man" className="home-img" />
                    <figure className="d-flex flex-nowrap w-100">
                        <p className="w-50">(01)</p>
                        <p className="text-uppercase w-50">man</p>
                    </figure>
                </div>
                <div className="col-lg-4 col-5 justify-content-end d-flex home-img-p overflow-hidden flex-wrap p-0 ms-3">
                    <img src={women} alt="women" className="home-img"/>
                    <figure className="d-flex flex-nowrap w-100">
                        <p className="w-50">(02)</p>
                        <p className="text-uppercase w-50">women</p>
                    </figure>
                </div>
                    <img src={EqualSign} alt="equal" className="position-absolute equal-sign"/>
                </div>
            </div>
            <div className="d-flex w-100 justify-content-end">
                <p className="text-uppercase m-0 d-flex align-items-center custom-hover-2">explore</p>
                <a className="explore d-flex justify-content-center align-items-center" href="/shop">
                    <img src={arrow} alt="arrow" width={"25px"}/>
                </a>
            </div>
        </section>
        <section className="container-fluid my-5">
                <div className="deplace-line d-flex align-items-center">
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                        <small className="fs-6 px-2">&#9679;</small> deplace shop
                        <small className="fs-6 px-2">&#9679;</small>
                        do not scroll
                    </p>
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                        <small className="fs-6 px-2">&#9679;</small> deplace shop
                        <small className="fs-6 px-2">&#9679;</small>
                        do not scroll
                    </p>
            </div>
                <div className="deplace-line d-flex align-items-center line-2">
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                        <small className="fs-6 px-2">&#9679;</small> deplace shop
                        <small className="fs-6 px-2">&#9679;</small>
                        do not scroll
                    </p>
                    <p className="text-uppercase m-0 d-flex align-items-center py-1 flex-nowrap justify-content-center">
                        <small className="fs-6 px-2">&#9679;</small> deplace shop
                        <small className="fs-6 px-2">&#9679;</small>
                        do not scroll
                    </p>
            </div>
        </section>
        <section className="container my-5 py-5">
            <div className="row justify-content-end py-5 my-5">
                <p className="d-flex flex-wrap fs-2 align-items-center col-lg-7 col-md-9 col-12"><p className="fs-6 text-decoration-underline text-uppercase m-0 w-100 py-3">who we are</p>
                    An independent <p className="px-2 text-decoration-underline d-flex align-items-center p-0 m-0">brand</p>
                    urban trekking shoes and accessories
                    that comes from a convergence of 
                    arts and personalities.
                </p>
            </div>
            <p className="text-uppercase no-items p-2 fs-6" ref={noItems}>no items found</p>
            <div className="w-100 d-flex justify-content-end mt-5 pt-5">
                <p className="text-uppercase m-0 d-flex align-items-center custom-hover-2">shop all</p>
                <a className="explore d-flex justify-content-center align-items-center" href="/shop">
                    <img src={arrow} alt="arrow" width={"25px"}/>
                </a>
            </div>
        </section>
        <section className="container">
            <div className="row justify-content-end my-5">
                <div className="fit-content d-flex justify-content-end virgolette overflow-hidden">
                    <div className="h3 d-flex flex-wrap me-4" id="h3">
                        <h3 className="m-0 ff-3 text-nowrap d-flex justify-content-center align-items-center w-100 text-end">JAmiE K. CoHen</h3>
                        <h3 className="m-0 ff-3 text-nowrap d-flex justify-content-center align-items-center fade w-100 text-end">WiLLiAm GIbSoN</h3>
                    </div>
                    <div className="h4 d-flex flex-wrap" id="h4">
                        <h4 className="m-0 d-flex justify-content-center align-items-center">Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally.   </h4>
                        <h4 className="m-0 d-flex justify-content-center align-items-center">Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened.  </h4>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home;
