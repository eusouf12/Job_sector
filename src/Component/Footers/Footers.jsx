

const Footers = () => {
    return (
        <footer className=" bg-[#1A1919] text-[#FFFFFFB2] py-20">
            <div className="footer container lg:max-w-6xl mx-auto">
                <nav className="">
                    <h2 className="text-white font-extrabold text-3xl">CareerHub</h2>
                    <p className=" leading-6">Your gateway to professional growth, <br /> offering and opportunities for <br />skill development and advancement</p>
                    <img src="" alt="" />
                </nav>

                <nav>
                    <h2 className="footer-title text-white ">Company</h2>
                    <p>About Us</p>
                    <p>Works</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </nav>

                <nav>
                    <h6 className="footer-title text-white">Support</h6>
                    <p>Help Desk</p>
                    <p>Developers</p>
                    <p>Become a Partner</p>
                    <p>Developer</p>
                </nav>

                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>

                </nav>

            </div>

        </footer>
    );
};

export default Footers;