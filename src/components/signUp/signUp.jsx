import Img from '../../assets/Group143.png'

const SignUp = () => {
    const shadow='box-shadow: 4px 4px 15px 0px #C3C3C3 inset, -6px -4px 15px 0px #FFF inset;'
    return (
        <>
            <div className="login">
                <div className="flex justify-center">
                    <div className="container">
                        <div className='inputs max-w-md mx-auto mt-5 p-6 bg-white rounded-lg '>
                        <div className="flex justify-center mb-6">
                            <img src={Img} alt='search' />
                        </div>
                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                style={{boxShadow:shadow}}
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="phoneNumber">
                                    Phone Number
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email (Optional)"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="country">
                                    Country
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="country"
                                    type="text"
                                    placeholder="Country"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-[#1F5E7C] text-sm font-bold mb-2" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="appearance-none border bg-[#ECF0F3]  rounded-full w-full py-3 px-3 text-[#616161] leading-tight focus:outline-none focus:shadow-outline"
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                />
                            </div>

                            <button
                                className="bg-gradient-to-b from-blue-500 to-indigo-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default SignUp;