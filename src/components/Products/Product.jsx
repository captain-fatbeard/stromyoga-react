import React from 'react'

export const Product = ({productTitle, productText, priceTag, itemInRow}) => {
    return (
        <>
            <div className={'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/'+itemInRow}>  
                <article className="overflow-hidden rounded-lg shadow-lg bg-pink-100 p-2 text-center">
                        <div className="text-3xl font-bold m-1">
                            {productTitle}
                        </div>

                        <div className="m-1">
                            {productText}
                        </div>
    
                        <div className="inline-block m-1 py-2 px-6 border-2">
                            {priceTag}
                        </div>
                            
                </article>
       
            </div>
        </>
    )
}

export default Product
