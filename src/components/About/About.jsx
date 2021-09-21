import React from 'react'
import Headline from './../Headline'
import { useInView } from 'react-hook-inview'

export const About = (props) => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className={'container mx-auto max-w-screen-sm transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                <Headline text={props.headline} />
                {props.body}
            </div>
        </>
    )
}

export default (About)
