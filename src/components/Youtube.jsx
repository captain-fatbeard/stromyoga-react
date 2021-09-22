import React from 'react'

export const Cart = ({videoTitle, videoSrc}) => {

    return (
        <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
            
                    <iframe 
                        width="375" height="210" 
                        src={videoSrc+'?controls=0'}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>

                    {/* <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                            {videoTitle}
                        </h1>
                    </header> */}
                </article>
            </div>
        </>
    )
}

export default Cart
