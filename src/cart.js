import { useEffect, useState, useRef} from "react";
import {ReactComponent as X} from "./images/x.svg";

const CartItem = ({ name, img, price, num, size, color, index }) => {
  const [n, setN] = useState(num);
  const input = useRef(null);
  
  function remove() {
    let arr = JSON.parse(localStorage.getItem("cart")) || [];
    arr.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(arr));
  }

  useEffect(() => {
    if (Math.round(Number(n)) === Number(n) && 
      /\d/gi.test(n.toString()) && 
      n.toString().includes("-") === false && 
      n.toString().includes(".") === false && 
      Number(n) >= 1 && 
      Number(n) <= 10
      ) {
      
      input.current.classList.remove("wrong-format");
      let arr = JSON.parse(localStorage.getItem("cart")) || [];
      var a = arr[index];
      a.num = n;
      arr[index] = a;
      localStorage.setItem("cart", JSON.stringify(arr));
    }else {
      input.current.classList.add("wrong-format");
    }

  }, [n, index]);


  return <div className="w-100 cart-item d-flex justify-conent-between align-items-start align-content-start my-1 py-2">
    <img src={require(`./images/${img}`)} alt={name} />
    <div className="w-50 px-3">
      <p className="text-uppercase m-0 fs-3 fw-bold text-nowrap s-2">{name}</p>
      <p className="text-uppercase m-0 fs-5 fw-normal text-nowrap s-3">€ {price} EUR</p>
      <p className="text-uppercase m-0 s text-nowrap">size: {size}</p>
      <p className="text-uppercase m-0 s text-nowrap">color: {color}</p>
    </div>
    <div className="w-25">
      <input type="number"
      className="w-100 count-input"
        value={n}
        ref={input}
        min="1"
        max="10"
        maxLength="2"
        onChange={(event) => {
          setN(event.target.value);
        }}
      />
        <button className="text-uppercase text-decoration-underline mt-3 border-0 bg-transparent fs-6"
        onClick={() => remove()}
        >remove</button>
    </div>
  </div>
}

const Cart = () => {
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    document.getElementById("cart").style.height = `${window.innerHeight}px`;
    document.getElementById("cart-2").style.height = `${window.innerHeight}px`;

    const originalSetItem = localStorage.setItem;

    localStorage.setItem = function(key, value) {
      const event = new Event('itemInserted');
    
      document.dispatchEvent(event);
    
      originalSetItem.apply(this, arguments);
    };

    const localStorageSetHandler = function(e) {
      setChange(change + 1);
    };

    document.addEventListener("itemInserted", localStorageSetHandler, false);
    }, [change]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setItems(JSON.parse(localStorage.getItem("cart")));
      document.getElementById("cart-num").textContent = JSON.parse(localStorage.getItem("cart")).length;
    }
  }, [change]);

  useEffect(() => {
    var t = 0;
    for (let i = 0; i < items.length; i++) {
      t += parseInt(items[i].price) * items[i].num;
    }
    setTotal(t);
  }, [items]);
  
  function closeCart() {
    document.getElementById("cart").classList.remove("open-cart");
    document.getElementById("cart-2").classList.remove("open-cart-2");
  }

  return <>
    <div id="cart">
      <div className="h-25 w-100 d-flex align-items-center justify-content-evenly">
        <div>
          <h2 className="text-uppercase fs-1 m-0">your</h2>
          <h2 className="text-uppercase ps-5 fs-1 m-0">cart</h2>
        </div>
        <button onClick={() => closeCart()} className="border-0 bg-transparent">
          <X/>
        </button>
      </div>
      <div className="body d-flex justify-content-center align-items-center h-50 overflow-auto px-3 flex-wrap">
        {
          items.length === 0 ?
            <p>Add to cart first, commit later!</p>
            :
            items.map((obj, index) => {
              return <CartItem
                name={obj.name}
                price={obj.price}
                color={obj.color}
                size={obj.size}
                num={obj.num}
                img={obj.img}
                index={index}
                key={`crat-item-${index}`}
              />
            })
        }
      </div>
      {
         items.length !== 0 ? 
       
        <div className="h-25 w-100 subtotal p-3">
          <div className="w-100 d-flex justify-content-between">
            <p className="text-uppercase text-white w-50 m-0 fw-normal">subtotal</p>    
            <p className="text-uppercase text-white w-50 text-end m-0 fw-normal">€   
            &#160;{total}&#160;
               EUR</p>    
            </div>
            <a href="/checkout" className="fw-normal text-uppercase checkout w-100 text-center text-decoration-none text-n py-2 mt-3">continuse to checkout</a>
        </div>
      : null
      }
    </div>
    <div className="shadow" id="cart-2" onClick={() => closeCart()}></div>
  </>
}

export default Cart;