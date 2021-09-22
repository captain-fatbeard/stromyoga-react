import React from 'react'

export const NewsletterForm = () => {

    return (
        <>
            <h2 className="text-xl text-left inline-block font-semibold text-gray-800">Tilmeld nyhedsbrev</h2>
            <p className="text-gray-700 text-xs pl-px">Få direkte besked, omkring nyt</p>

            <form action="#" className="mt-2">
                <div className="flex items-center">
                    <input type="email" placeholder="email" className="w-full px-2 py-4 mr-2 bg-gray-50 rounded-md border border-gray-400 focus:outline-none" required />
                    <button className="bg-gray-900 text-gray-100 px-5 py-2 rounded" >Tilmeld</button>
                    {/* style="margin-left: -7.8rem;" */}
                </div>
            </form>
        </>
    )
}

export default NewsletterForm
