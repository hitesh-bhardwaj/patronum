const Newsletter = () => {
    return (
        <div className="block lg:mt-[3vw] mt-[12vw] lg:mb-0 mb-[3vw] lg:w-full md:w-[80%] mx-auto">
            <h6 className="lg:text-[1.3vw] md:text-[4vw] text-[5vw] md:text-left text-center font-medium aeonik tracking-wide mb-[20px]">Subscribe to our Newsletter</h6>
            <form className="flex w-full items-center justify-between">
                <input className="text-white placeholder:text-white/75 lg:py-2 lg:px-4 md:py-4 md:px-6 py-2 px-4 fill-none bg-transparent border-b-2 border-white focus:ring-none focus:outline-none w-[70%] lg:text-xl md:text-2xl text-xl" data-news placeholder="Enter Your Email" type="email" id="email" name="email"/>
                <button className="bg-head text-white lg:py-2 lg:px-4 md:py-4 md:px-6 py-2 px-4  rounded-full hover:bg-white hover:text-head duration-200 autofill:bg-transparent lg:text-xl md:text-2xl text-xl" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Newsletter;