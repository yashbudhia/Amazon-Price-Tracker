import React from "react";
import Product from "./../lib/models/product.model";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product._id}`} passHref>
      <div className="product-card">
        <div className="product-card_img-container">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="product-card_img"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="product-title">{product.title}</h2>

          <div className="flex justify-between">
            <p className="text-black opacity-50 text-lg capitalize">
              {product.category}
            </p>
            <p className="text-black text-lg font-semibold">
              <span>{product?.currency}</span>
              <span>{product?.currentPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
