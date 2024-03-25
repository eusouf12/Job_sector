

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 items-center">
            <div className=" lg:col-span-2 ">
                <div className="w-full lg:w-[70%] space-y-10">
                    <h2 className="text-7xl font-extrabold">One Step Closer To Your <span className="text-blue-500"> Dream Job</span></h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn bg-blue-300 ">Get Started</button>
                </div>
            </div>
            <div className=" lg:col-span-1">
                <img src="/image/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;