import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFavoriteBorder } from 'react-icons/md';
import { PiHandbag } from 'react-icons/pi';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { products } from "../../data/bestsellersData";

const BestSellers = () => {
    const navigate = useNavigate();
    const onProductDetails = (id: number) => {
        navigate(`/product/${id}`);
    }
    return (
        <section className='best-seller-section container'>
            <div className='best-seller-wrapper'>
                <div className='bs-title'><h2>{'Best Sellers'}</h2></div>
                <div className='bs-product-list'>
                    {products && products.map((product,index) => (
                    <div className='bs-product-card' key={product.id} onClick={() => onProductDetails(product.id)}>
                        <div className='bs-product-img-overlay'>
                            {product?.type && <div className={`bs-p-type ${product.type === 'New'? 'new-type': 'sold-out-type'}`}>{product.type}</div>}
                            {product?.onSale && <div className='bs-p-sale'>{"Sale"}</div>}
                            <div><img src={product.primary_img} alt="product-image" /></div>
                            <div className='icons-flex'>
                                <div><AiOutlineExpandAlt /></div>
                                <div><MdFavoriteBorder /></div>
                                <div><PiHandbag /></div>
                            </div>
                        </div>
                        <div className='bs-card-footer'>
                            <div className='bs-p-name'><h2>{product.name}</h2></div>
                            <div className='bs-p-rating'>{product?.ratings ? <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>: ''}</div>
                            <div className='bs-p-price'>{`Rs. ${product.price}`}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='bs-all-products-col'>
                <button>All Products</button>
            </div>
        </section>
    )
}

export default BestSellers;