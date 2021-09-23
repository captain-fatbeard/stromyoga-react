import React from 'react'

export const ShopItem = ({cartTitle, priceTag}) => {
    return (
        <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
                <article className="overflow-hidden rounded-lg shadow-lg">
                        <h1 className="text-lg">
                            {cartTitle}
                        </h1>
    
                            {priceTag}
                </article>
       
            </div>
        </>
    )
}

export default ShopItem
