import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const Categories = () => {
    return (
        <section className='categories-wrapper container'>
            <div className='categories-flex'>
                <div className='flex-section'>
                    <div className='category-main'>
                        <div><h2>Furnishing Your Dreams</h2></div>
                        <div><p>We’re got everything to help you create a living room that’s ready for entertaining</p></div>
                    </div>
                    <div className='category-img-side'>
                        <div><img src={"https://i.pinimg.com/564x/30/18/af/3018af214bdb400a812651f4b6e05cb1.jpg"} alt="hand-loom-saree-pic" /></div>
                        <div className='flex-overlay'>
                            <div className='flex-overlay-inner'>
                                <div>Hand Loom Sarees</div>
                                <div><span><SlArrowRight /></span>Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-section'>
                    <div className='category-img-side'>
                        <div><img src={"https://i.pinimg.com/564x/c4/f7/29/c4f7297bfdba67474a56640208d974b2.jpg"} alt="hand-loom-saree-pic" /></div>
                        <div className='flex-overlay'>
                            <div className='flex-overlay-inner'>
                                <div>Pavadas</div>
                                <div><span><SlArrowRight /></span>Shop Now</div>
                            </div>
                        </div>
                    </div>
                    <div className='category-img-side'>
                        <div className='blouses'><img src={"https://i.pinimg.com/564x/0e/c4/e1/0ec4e1bf14e95408d71d003ade6a1d62.jpg"} alt="hand-loom-saree-pic" /></div>
                        <div className='flex-overlay'>
                            <div className='flex-overlay-inner'>
                                <div>Blouses</div>
                                <div><span><SlArrowRight /></span>Shop Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;