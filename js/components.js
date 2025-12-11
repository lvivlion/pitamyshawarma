function loadFooter() {
    const footerHTML = `
    <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                <!-- Brand -->
                <div class="md:col-span-1">
                    <a href="index.html"><img src="img/pita-my-shawarma-logo.png" class="h-12 mb-4 mx-auto md:mx-0"
                            alt="Pita My Shawarma Logo" loading="lazy"></a>
                    <p class="text-gray-400">Authentic Lebanese Street Food in Pittsburgh, PA.</p>
                </div>
                <!-- Quick Links -->
                <div>
                    <h3 class="font-bold text-lg mb-4 uppercase tracking-wider">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="story.html" class="text-gray-300 hover:text-brand-teal">Our Story</a></li>
                        <li><a href="menu.html" class="text-gray-300 hover:text-brand-teal">Menu</a></li>
                        <li><a href="catering.html" class="text-gray-300 hover:text-brand-teal">Catering</a></li>
                        <li><a href="patio.html" class="text-gray-300 hover:text-brand-teal">Patio</a></li>
                        <li><a href="events.html" class="text-gray-300 hover:text-brand-teal">Events</a></li>
                        <li><a href="jobs.html" class="text-gray-300 hover:text-brand-teal">Jobs</a></li>
                        <li><a href="wine-mezze.html" class="text-gray-300 hover:text-purple-400">Wine & Mezze</a></li>
                        <li><a href="locations.html" class="text-gray-300 hover:text-brand-teal">Contact Us</a></li>
                    </ul>
                </div>
                <!-- Contact -->
                <div>
                    <h3 class="font-bold text-lg mb-4 uppercase tracking-wider">Contact</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><i class="fas fa-map-marker-alt fa-fw mr-2"></i><a href="https://www.google.com/maps/search/?api=1&query=Pita+My+Shawarma+3716+Butler+St+Pittsburgh+PA+15201" target="_blank" class="hover:text-brand-teal">3716 Butler St, PGH</a></li>
                        <li><i class="fas fa-phone fa-fw mr-2"></i><a href="tel:4122543471"
                                class="hover:text-brand-teal">(412) 254-3471</a></li>
                    </ul>
                </div>
                <!-- Social Media -->
                <div>
                    <h3 class="font-bold text-lg mb-4 uppercase tracking-wider">Follow Us</h3>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="https://instagram.com/pitamyshawarma" target="_blank"
                            class="text-2xl text-gray-300 hover:text-brand-teal"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/pitamyshawarma" target="_blank"
                            class="text-2xl text-gray-300 hover:text-brand-teal"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/pitamyshawarma/" target="_blank"
                            class="text-2xl text-gray-300 hover:text-brand-teal"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm flex flex-col items-center">
                <p>&copy; ${new Date().getFullYear()} Pita My Shawarma LLC. All Rights Reserved.</p>
                <p class="mt-2 text-xs text-gray-500">
                    <a href="https://ost4p.com/website" target="_blank" class="hover:text-gray-300 transition-colors">
                        Website Design by OL Web Services based in Pittsburgh
                    </a>
                </p>
            </div>
        </div>
    </footer>
    `;

    document.getElementById('global-footer').innerHTML = footerHTML;
}

function loadHeader(activePage, theme = 'standard') {
    const isNight = theme === 'night';

    // Theme-specific styles
    const headerClasses = isNight
        ? 'nav-gradient shadow-lg shadow-purple-900/20 sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-opacity-90'
        : 'nav-gradient shadow-md sticky top-0 z-50 transition-all duration-300';

    const linkBaseClasses = isNight
        ? 'text-gray-300 hover:text-white transition-colors tracking-wide'
        : 'text-gray-200 hover:text-white transition-colors';

    const activeLinkClasses = isNight
        ? 'text-neon-teal font-bold' // Night active
        : 'text-white font-bold border-b-2 border-white'; // Standard active

    const mobileMenuClasses = isNight
        ? 'hidden md:hidden px-6 pb-4 border-t border-purple-900/30 bg-[#0f0518]'
        : 'hidden md:hidden px-6 pb-4 border-t border-white/20';

    // Helper to determine class for a link
    const getLinkClass = (page) => activePage === page ? activeLinkClasses : linkBaseClasses;

    // Special handling for Wine Bar link in Standard mode (it has purple text usually)
    const getWineLinkClass = () => {
        if (activePage === 'wine-mezze.html') return activeLinkClasses;
        if (isNight) return linkBaseClasses; // In night mode it's standard gray unless active
        return 'text-purple-200 hover:text-white transition-colors font-semibold'; // Standard mode special style
    };

    // Button Styles
    const buttonClasses = isNight
        ? 'bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 transform shadow-[0_0_15px_rgba(168,85,247,0.5)]'
        : 'bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 transform animate-pulse-glow';

    const mobileButtonClasses = isNight
        ? 'block w-full mt-6 bg-purple-600 text-white text-center font-semibold px-5 py-3 rounded-full hover:scale-105 animate-pulse-glow'
        : 'block w-full mt-4 bg-transparent border-2 border-white text-white text-center font-semibold px-5 py-2 rounded-full hover:scale-105 animate-pulse-glow';

    const headerHTML = `
    <header id="header" class="${headerClasses}">
        <nav class="container mx-auto px-6 py-2 flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html">
                <img src="img/pita-my-shawarma-logo.png" alt="Pita My Shawarma Logo" class="logo-standard">
            </a>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="story.html" class="${getLinkClass('story.html')}">Our Story</a>
                <a href="menu.html" class="${getLinkClass('menu.html')}">Menu</a>
                <a href="catering.html" class="${getLinkClass('catering.html')}">Catering</a>
                <a href="locations.html" class="${getLinkClass('locations.html')}">Visit Us</a>
                <a href="patio.html" class="${getLinkClass('patio.html')}">Patio</a>
                <a href="events.html" class="${getLinkClass('events.html')}">Events</a>
                <a href="jobs.html" class="${getLinkClass('jobs.html')}">Jobs</a>
                
                <!-- Wine Bar Link -->
                <a href="wine-mezze.html" class="${getWineLinkClass()}">
                    <i class="fas fa-wine-glass-alt mr-1"></i>Wine Bar
                </a>

                <a href="https://pitamyshawarma.square.site/?location=J952PZN8F5KTY#DBDUDSBS4DE42IHGR6ZKKAPY"
                    target="_blank"
                    class="${buttonClasses}">
                    Order Now
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden text-white text-2xl cursor-pointer ${isNight ? 'hover:text-neon-purple transition-colors' : ''}">
                <button id="mobile-menu-button" class="text-white focus:outline-none">
                     <i class="fas fa-bars fa-lg"></i>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="${mobileMenuClasses}">
            <a href="story.html" class="block py-2 ${getLinkClass('story.html')}">Our Story</a>
            <a href="menu.html" class="block py-2 ${getLinkClass('menu.html')}">Menu</a>
            <a href="catering.html" class="block py-2 ${getLinkClass('catering.html')}">Catering</a>
            <a href="locations.html" class="block py-2 ${getLinkClass('locations.html')}">Visit Us</a>
            <a href="patio.html" class="block py-2 ${getLinkClass('patio.html')}">Patio</a>
            <a href="events.html" class="block py-2 ${getLinkClass('events.html')}">Events</a>
            <a href="jobs.html" class="block py-2 ${getLinkClass('jobs.html')}">Jobs</a>
            <a href="wine-mezze.html" class="block py-2 ${getWineLinkClass()}">Wine & Mezze Bar</a>
            <a href="https://pitamyshawarma.square.site/?location=J952PZN8F5KTY#DBDUDSBS4DE42IHGR6ZKKAPY"
                target="_blank"
                class="${mobileButtonClasses}">
                Order Now
            </a>
        </div>
    </header>
    `;

    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;

        // Attach Mobile Menu Event Listener
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', loadFooter);
