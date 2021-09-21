import React from 'react'
import Headline from './../Headline'
import { useInView } from 'react-hook-inview'

export const About = () => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className={'container mx-auto max-w-screen-sm transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                <Headline text="Om Strømyoga" />
                <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                <p>Praesent in semper magna. Morbi placerat odio risus, sit amet tempus leo egestas sed. Nam feugiat vitae nisi a maximus. Duis a nisi elit. In hac habitasse platea dictumst. Aliquam sed ligula diam. Mauris placerat magna ut lorem bibendum commodo. Nunc laoreet purus sit amet nulla blandit, eu euismod odio laoreet. Sed suscipit nunc quis nunc scelerisque, eget malesuada felis mattis. Morbi volutpat ante ac accumsan pretium. Proin cursus sollicitudin sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi iaculis ex eget diam congue, a finibus neque molestie.</p>
            </div>
        </>
    )
}

export default (About)
