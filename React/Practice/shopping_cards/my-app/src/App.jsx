import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import garlicChopper from "./assets/garlic_chopper.webp";
import usbJuicer from "./assets/usb_juicer.jpg";
import miniFan from "./assets/mini_fan.jpeg";


const products = [
  {
    id: 1,
    title: "Mini Electric Garlic Chopper",
    description: "Chop veggies in seconds + USB Rechargeable",
    price: 2396,
    image: garlicChopper,
  },
  {
    id: 2,
    title: "Portable USB Juicer",
    description: "Blend anywhere on the go + USB powered | 400ml",
    price: 3196,
    image: usbJuicer,
  },
  {
    id: 3,
    title: "Mini Hand Fan",
    description: "Compact fan with 3 speeds | Rechargeable",
    price: 1196,
    image: miniFan,
  },
];

function App() {

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));

  return (
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={(product.price)*quantity}
            image={product.image}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
  );
}

export default App;
