import { useState, useEffect} from "react";
import unisex from "./images/unisex.svg";

const Item = ({name, price, img, id}) => {
  return <>
    <div className="item d-flex align-items-center justify-content-center flex-wrap pointer my-2"
    onClick={() => window.location = `/product/${id}`}
    >
      <img src={require(`./images/${img}`)} alt={name} />
      <div className="w-100 d-flex align-items-center justify-content-center">
        <img src={unisex} alt="unisex" className="unisex" />
      </div>
      <h3 className="ff-2 w-100 text-center fs-2 text-uppercase fw-bold text-nowrap">{name}</h3>
      <p className="w-100 text-center fs-4 text-nowrap">€ {price} EUR</p>
    </div>
  </>
}

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.log(err));
  }, []);

  return <>
    <div className="top"></div>
    <section className="container">
      <div className="row justify-content-center overflow-auto" id="all"
      >
        <div className="col-6 p-0 d-flex justify-content-end flex-wrap align-items-start left align-content-start pe-2"
        id="left"
        >
        {
          data.slice(0, Math.floor(data.length/2)).map((obj, index) => {
            return <Item name={obj.name} key={index} img={obj.img} price={obj.price} id={obj._id} />
          })
        }
        </div>
        <div className="col-6 p-0 d-flex justify-content-start flex-wrap align-items-start right align-content-start ps-2"
        id="right"
        >
        {
          data.slice(Math.floor(data.length/2)).map((obj, index) => {
            return <Item name={obj.name} key={index} img={obj.img} price={obj.price} id={obj._id} />
          })
        }
        </div>
      </div>
    </section>
  </>
}

export default Shop;
export { Item };