const Footer = () => {
    return (
        <footer className="bg-amber-900 text-amber-100 py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-amber-200">DmitrieCoffee</h3>
                        <p className="text-amber-300">
                            Brewing happiness since 2023.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-amber-200">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-amber-300 hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-amber-300 hover:text-white transition">Our Story</a></li>
                            <li><a href="#" className="text-amber-300 hover:text-white transition">Menu</a></li>
                            <li><a href="#" className="text-amber-300 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-amber-200">Contact Us</h3>
                        <p className="text-amber-300">Email: info@dmitriecoffee.com</p>
                        <p className="text-amber-300">Phone: (123) 456-7890</p>
                        <p className="text-amber-300">Address: 123 Coffee St, Java City</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-400">
                    <p>&copy; {new Date().getFullYear()} DmitrieCoffee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;