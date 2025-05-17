import React from "react";

const Home: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-indigo-50 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-600 mb-4 animate-fade-in-down">
                    Hi, I'm Dilsha Perera 👋
                </h1>

                <p className="text-gray-700 text-lg sm:text-xl max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-down animate-delay-100">
                    I'm a passionate Software Developer who loves building modern web applications with clean and scalable code.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animate-delay-200">
                    <a
                        href="#about"
                        className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm sm:text-base hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-200 flex items-center gap-2"
                    >
                        <span>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full text-sm sm:text-base hover:bg-indigo-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-200 flex items-center gap-2"
                    >
                        <span>Contact Me</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </a>
                </div>

                {/* Social icons or additional elements */}
                <div className="mt-12 flex justify-center space-x-6 animate-fade-in-up animate-delay-300">
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;