// components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Company Name</h3>
                        <p className="text-gray-400">
                            Providing innovative solutions since 2023.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400">Email: info@company.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;