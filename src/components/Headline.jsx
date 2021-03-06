import React from 'react'
import { useInView } from 'react-hook-inview'

export const Headline = (props) => {
    const [ref, isVisible] = useInView({
        threshold: 1,
    })

    return (
        <>
            <h2 className={'uppercase font-bold text-2xl lg:text-4xl mb-8 transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'lg:-ml-24')} ref={ref}>{props.text}</h2>
        </>
    )
}

export default Headline
