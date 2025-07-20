
import logo1 from '../assets/logo1.png';

const SiteHeader = () => (
    <header className="relative bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 p-8 text-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent pointer-events-none"></div>
        {/* Top bar with logo and WhatsApp button */}
        <div className="relative z-20 flex justify-between items-center mb-6 max-w-5xl mx-auto">
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo1} alt="Logo" className="h-12 w-auto" />
            </div>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/916230605497"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                >
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 5.01 4.27.7.24 1.25.38 1.68.49.71.18 1.36.16 1.87.1.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                +91 6230605497
            </a>
        </div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Welcome to Our Website
        </h1>
        <p className="relative z-10 mt-4 text-xl md:text-2xl text-indigo-100 font-medium drop-shadow">
            Your one-stop solution for all your needs
        </p>
        <div className="relative z-10 mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-100 transition">
                Get Started
            </button>
            <button className="px-6 py-2 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-indigo-700 transition">
                Learn More
            </button>
        </div>
    </header>
);

export default SiteHeader;