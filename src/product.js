import { useParams } from "react-router-dom";
import { useEffect, useState, useRef} from "react";
import { ReactComponent as Unisex } from "./images/unisex.svg";
import {  Item as Item2 } from "./shop-all";

const AddToCart = ({sizes, colors, img, name, price}) => {
  const [added, setAdded] = useState(false);
  const color = useRef(null);
  const size = useRef(null);

  function add() {
    let arr = JSON.parse(localStorage.getItem("cart")) || [];
    arr.push({
      name: name,
      size: size.current.value,
      color: color.current.value,
      img: img,
      price: price,
      num: 1
    });
    localStorage.setItem("cart", JSON.stringify(arr));
    setAdded(true);
  }

  return <div className="add-to-cart p-4 d-flex justify-content-between flex-wrap">
    <select className="w-100 p-1" ref={color}>
      {
        colors.map((value, index) => <option value={value} key={`color-${index}`}>{value}</option>)
      }
    </select>
    <select className="w-100 my-sm-3 p-1" ref={size}>
      {
        sizes.map((value, index) => <option value={value} key={`size-${index}`}>{value}</option>)
      }
    </select>
    {
      JSON.parse(localStorage.getItem("cart")) ?
        
      JSON.parse(localStorage.getItem("cart")).some(obj => obj.img === img && obj.name === name) || added? 
        
      <p className="text-uppercase text-decoration-underline border-0 bg-transparent fw-normal fs-3 mt-1">item added to the cart !</p>
      :
      <button className="text-uppercase text-decoration-underline border-0 bg-transparent fw-normal fs-3 mt-1"
      id="add"
      onClick={() => add()}
        >add to cart</button>
        :
        <button className="text-uppercase text-decoration-underline border-0 bg-transparent fw-normal fs-3 mt-1"
      id="add"
      onClick={() => add()}
        >add to cart</button>
    }
  </div>
}

const Item = () => {
  const [data, setData] = useState(false);
  const [alsoLove, setAlsoLove] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/products/${id}`)
      .then(res => res.json())
      .then(d => setData(d))
      .catch(err => console.log(err));
    
    fetch("/products")
      .then(res => res.json())
      .then(d => setAlsoLove(Array.from(new Set([
        d[Math.floor(Math.random() * d.length)],
        d[Math.floor(Math.random() * d.length)],
        d[Math.floor(Math.random() * d.length)],
        d[Math.floor(Math.random() * d.length)],
        d[Math.floor(Math.random() * d.length)]
      ]))))
      .catch(err => console.log(err));
  }, [id]);

  if (data) {
  return <>
    <div className="top"></div>
    <section className="container single-item">
      <div className="row justify-content-center">
        <div className="col-md-8 col-10 d-flex justify-content-center flex-wrap">
          <div className="title-price">
            <h2 className="text-uppercase text-nowrap fw-bold position-absolute">{data.name}</h2>
            <p className="text-center fs-4 text-nowrap position-absolute">€ {data.price} EUR</p>
          </div>
          <img src={require(`./images/${data.img}`)} alt={data.name} className="w-100" />
          <span className="text-uppercase w-100 fs-6 m-0 d-block">side</span>
        </div>
        <div className="col-md-8 col-10 my-5">
          <p className="w-75 fs-5 my-5 fw-normal">{data.description}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-10 d-flex justify-content-center flex-wrap">
          <div className="made-in-italy">
            <h2 className="text-uppercase fw-bold m-0 text-center">made in, </h2>
            <h2 className="text-uppercase fw-bold m-0 text-center">ITALY © </h2>
          </div>
          {
            data.images.map((path, index) => {
              return <div className="w-100 my-4 d-flex justify-content-end flex-wrap" key={`img-${index}`}>
                <Unisex className="position-absolute unisex-2" />
                <img src={require(`./images/${path}`)} alt={data.name} className="w-100" />
                <div className="w-100 d-flex flex-nowrap">
                  <span className="text-uppercase w-50 fs-6 m-0 d-block">view</span>
                  <span className="text-uppercase w-50 fs-6 m-0 d-block">({index > 9 ? index+1 : `0${index+1}`})</span>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-md-8 col-10 my-5">
          <p className="w-75 fs-5 my-0 fw-normal">Shipping worldwide </p>
          <p className="w-75 fs-5 my-0 fw-normal">Free shipping on all orders</p>
        </div>
      </div>
    </section>
    <section className="container-fluid you-may-love">
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-10 my-5">

            <h3 className="fs-1 text-uppercase">you may</h3>
            <h3 className="fs-1 text-uppercase d-flex flex-nowrap">also
            <p className="ff-3 px-2">love</p>
            </h3>
          </div>
        </div>
        {/* <div className="w-100"> */}

        <div className="row you-may-love-slide pb-5">
          {
            alsoLove.map((obj, index) => {
              return <Item2 name={obj.name} key={index} img={obj.img} price={obj.price} id={obj._id} />
            })
          }
        {/* </div> */}
        </div>
      </section>
    </section>
    <AddToCart
      sizes={data.size}
      colors={data.color}
      name={data.name}
      price={data.price}
      img={data.img}
    />
  </>
  }
}

export default Item;