import { ReactComponent as Logo } from "./images/logomark.svg";

const Loader = () => {

  return <>
    <section className="loader container-fluid">
      <div className="row justify-content-center py-2">
        <Logo/>
      </div>
      <div className="counter d-flex justify-content-center align-items-center">
        <div className="w-100">
          <p className="fs-1 text-white text-center">Loading ...</p>
        </div>
      </div>
    </section>
  </>
}

export { Loader };