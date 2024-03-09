import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRuler } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { PiHandbag } from 'react-icons/pi';
import { BsPlus } from 'react-icons/bs';
import { HiMinusSmall } from 'react-icons/hi2';
import "./productdetails.component.scss";
import { products } from "../../data/bestsellersData";
import RelatedProducts from "./relatedproducts.component";

const ProductDetails = () => {
    // const [productData, setProductData] = useState<any>([]);
    const [range, setRange] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<string>('desc');
    let { id } = useParams();
    let productDetailsData: any;
    useEffect(() => {
        console.log("onload")
    }, [])
    useEffect(() => {
        productDetailsData = products.filter((product: any) => product.id == id)
        console.log("productDetailsData", productDetailsData)
        // setProductData(productDetailsData ? productDetailsData[0]: productDetailsData)
    }, []);

    const onDecreaseRange = () => {
        if(range > 1){
            setRange((range: number) => range  - 1)
        }
    }
    // const onRangeChange = (event: any) => {
    //     const value = event.target.value;
    //     if(value >= 1 || value){
    //         setRange(value)
    //     }
    // }
    const productData = products.filter((product: any) => product.id == id)[0];
    console.log("id", productData, products, products.filter((product: any) => product.id == id))
    
    return (
        <section className='product-details-section'>
            <div className='pd-container-main-flex'>
                <article className='container'>
                <article className='pd-links'></article>
                <article className='pd-card-details'>
                    <section className='sm-img-previews-section'>
                        <div className='active'><img src={productData?.primary_img} alt="product-preview-1" /></div>
                        <div><img src={productData?.primary_img} alt="product-preview-2" /></div>
                        <div><img src={productData?.primary_img} alt="product-preview-3" /></div>
                    </section>
                    <section className='product-img-section'>
                        {/* <div className='product-type'><p>New</p></div> */}
                        {productData?.type && <div className={`product-type ${productData.type === 'New'? 'new-type': 'sold-out-type'}`}><p>{productData.type}</p></div>}
                        <div className='primary-img'><img src={productData?.primary_img} alt="product-image" /></div>
                    </section>
                    <section className='product-ratings-price-section'>
                        <div className='product-name'><h2>{productData?.name}</h2></div>
                        <div className='ratings-stars'>
                            <div className='star'>{productData?.ratings ? <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>: ''}</div>
                            <div className='cust-review'>(3 customer reviews)</div>
                        </div>
                        <div className='price'>{`Rs. ${productData?.price}`}</div>
                        <div className='desc'><p>{productData?.desc}</p></div>
                        <div className='size-guide'>
                            <div><FaRuler /><p>Size guide</p></div>
                        </div>
                        <div className='size-types-section'>
                            <div className='size-box'>Size</div>
                            <div className='size-types-inner'>
                                <div>M</div>
                                <div>S</div>
                            </div>
                        </div>
                        <div className='add-to-cart-range-section'>
                            <div className='range-section'>
                                <div><button onClick={onDecreaseRange}><HiMinusSmall /></button></div>
                                <div><input type='number' min={1} value={range} /></div>
                                <div><button onClick={() => setRange((range: number) => range  + 1)}><BsPlus /></button></div>
                            </div>
                            <div className='add-to-cart-btn'>
                                <button disabled><PiHandbag />Add To Cart</button>
                            </div>
                        </div>
                        <div className='wishlist-section'>
                            {/* <div className='wishlist-icon'></div> */}
                            <div className='wishlist-text'>
                                <p><MdFavoriteBorder />Add To Wishlist</p>
                            </div>
                        </div>
                        <div className='buy-now-section'>
                            <button disabled><PiHandbag />Buy Now</button>
                        </div>
                        <div className='product-tags-category-section'>
                            <div className='product-addtional-section'>
                                <h4>SKU:</h4>
                                <span>DN58282</span>
                            </div>
                            <div className='product-addtional-section'>
                                <h4>Category:</h4>
                                <span>Handloom</span>
                            </div>
                            <div className='product-addtional-section'>
                                <h4>Tags:</h4>
                                <span>minimal, green</span>
                            </div>
                        </div>
                    </section>
                </article>
                </article>
                <article className='pd-desc-details'>
                    <section className='pd-inner'>
                        <section className='pd-tabs'>
                            <div className={`${activeTab === 'desc' ? 'active': 'not'}`} onClick={() => setActiveTab('desc')}>Description</div>
                            <div className={`${activeTab !== 'desc' ? 'active': 'not'}`} onClick={() => setActiveTab('review')}>Reviews<span>(3)</span></div>
                        </section>
                        <section className='pd-tab-info-section'>
                            {activeTab === 'desc' ? 
                            <div className='desc-section'>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu. Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.
                            </div>
                            :
                            <div>
                                <div className='review-container'>
                                    <div className='review-img-section'><img src="http://1.gravatar.com/avatar/a88fc8d338d5a2ded3f7cee1f7294138?s=60&d=mm&r=g" alt="reviewer-img" /></div>
                                    <div className='review-content-section'>
                                        <div className='r-rartings'><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
                                        <div className='r-person-details'>
                                            <div className='r-pname'>Judith Roberston</div>
                                            <div className='r-pdate'>January 3, 2019</div>
                                        </div>
                                        <div className='review-desc'>
                                            <p>Etiam a laoreet justo, laoreet blandit arcu. Vestibulum lacinia, lacus vitae dignissim tempor
                                            mi tellus imperdiet dolor, quis consectetur tortor magna id enim. Vestibulum ac vestibulum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-container'>
                                    <div className='review-img-section'><img src="http://1.gravatar.com/avatar/a88fc8d338d5a2ded3f7cee1f7294138?s=60&d=mm&r=g" alt="reviewer-img" /></div>
                                    <div className='review-content-section'>
                                        <div className='r-rartings'><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
                                        <div className='r-person-details'>
                                            <div className='r-pname'>Judith Roberston</div>
                                            <div className='r-pdate'>January 3, 2019</div>
                                        </div>
                                        <div className='review-desc'>
                                            <p>Etiam a laoreet justo, laoreet blandit arcu. Vestibulum lacinia, lacus vitae dignissim tempor
                                            mi tellus imperdiet dolor, quis consectetur tortor magna id enim. Vestibulum ac vestibulum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-container'>
                                    <div className='review-img-section'><img src="http://1.gravatar.com/avatar/a88fc8d338d5a2ded3f7cee1f7294138?s=60&d=mm&r=g" alt="reviewer-img" /></div>
                                    <div className='review-content-section'>
                                        <div className='r-rartings'><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>
                                        <div className='r-person-details'>
                                            <div className='r-pname'>Judith Roberston</div>
                                            <div className='r-pdate'>January 3, 2019</div>
                                        </div>
                                        <div className='review-desc'>
                                            <p>Etiam a laoreet justo, laoreet blandit arcu. Vestibulum lacinia, lacus vitae dignissim tempor
                                            mi tellus imperdiet dolor, quis consectetur tortor magna id enim. Vestibulum ac vestibulum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </section>
                    </section>
                </article>
                <RelatedProducts />
            </div>
        </section>
    )
}

export default ProductDetails;