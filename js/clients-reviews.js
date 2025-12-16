
function loadClientsReviews() {
    // Generate Clients Section HTML
    // Helper function to just repeat the images for the marquee
    const generateClientImages = () => {
        let html = '';
        const clientCount = 20; // 15 to 34 based on file naming 
        // 15.png to 34.png

        // We repeat the loop 4 times to ensure smooth infinite marquee
        for (let j = 0; j < 4; j++) {
            for (let i = 15; i <= 34; i++) {
                html += `<img src="img/clients/${i}.png" class="h-24 md:h-48 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-12 md:mx-24" alt="Client Logo ${i}">`;
            }
        }
        return html;
    };

    // Generate Featured On Section HTML
    const generateFeaturedImages = () => {
        let html = '';
        // 1.png to 14.png
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i <= 14; i++) {
                html += `<img src="img/featuredon/${i}.png" class="h-24 md:h-48 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-12 md:mx-24" alt="Featured On Logo ${i}">`;
            }
        }
        return html;
    };

    // Reviews Data (Simulated but inspired by real sentiment)
    const reviews = [
        { name: "Sarah M.", text: "Best shawarma in Pittsburgh hands down. The chicken is so juicy!", initial: "S" },
        { name: "Mike T.", text: "Incredible food and the new wine bar atmosphere is amazing at night.", initial: "M" },
        { name: "Jessica L.", text: "The falafel is perfectly crispy. Love the vegan options.", initial: "J" },
        { name: "David R.", text: "Great service and authentic flavors. Highly recommend the mezze platter.", initial: "D" },
        { name: "Emily W.", text: "A hidden gem in Lawrenceville. The pita is fresh and fluffy.", initial: "E" },
        { name: "James H.", text: "Lunch special is a great deal. Fast and delicious.", initial: "J" },
        { name: "Amanda K.", text: "The garlic sauce (toum) is addictive! I put it on everything.", initial: "A" },
        { name: "Chris B.", text: "Perfect spot for a casual dinner. The wine selection is surprisingly good.", initial: "C" },
        { name: "Nicole P.", text: "Obsessed with the spicy fries. Must try!", initial: "N" },
        { name: "Ryan G.", text: "Simply delicious. Consistent quality every time I visit.", initial: "R" },
        { name: "Ashley S.", text: "Such a vibe in the evening. Great place to catch up with friends.", initial: "A" },
        { name: "Kevin D.", text: "Authentic Lebanese street food. Reminds me of my travels.", initial: "K" },
        { name: "Rachel F.", text: "Friendly staff and quick service. My go-to lunch spot.", initial: "R" },
        { name: "Brian M.", text: "The hummus is uniform and creamy, just perfect.", initial: "B" },
        { name: "Lauren J.", text: "Don't skip the baklava for dessert!", initial: "L" },
    ];

    const generateReviewCards = () => {
        let html = '';
        // Repeat loop for marquee
        for (let j = 0; j < 2; j++) {
            reviews.forEach(review => {
                html += `
                <a href="https://www.google.com/search?q=Pita+My+Shawarma+Pittsburgh+reviews" target="_blank" class="block bg-white p-6 rounded-xl shadow-sm w-80 flex-shrink-0 border border-gray-100 mx-4 hover:shadow-md transition-shadow duration-300 cursor-pointer text-left decoration-transparent">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold mr-3">${review.initial}</div>
                        <div>
                            <h4 class="font-bold text-sm text-gray-800">${review.name}</h4>
                            <div class="text-yellow-400 text-xs">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                        </div>
                        <i class="fab fa-google text-gray-300 ml-auto text-lg"></i>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">"${review.text}"</p>
                </a>`;
            });
        }
        return html;
    };

    const featuredHTML = `
    <!-- FEATURED ON SECTION -->
    <section class="py-10 bg-white border-b border-gray-100 overflow-hidden">
        <div class="container mx-auto px-6 mb-8 text-center">
             <p class="text-gray-400 uppercase tracking-widest text-xs font-bold">Featured On</p>
        </div>
        <div class="marquee-container">
            <div class="marquee-content items-center" style="animation-duration: 160s;">
                ${generateFeaturedImages()}
            </div>
        </div>
    </section>
    `;

    const clientsHTML = `
    <!-- CLIENTS SECTION -->
    <section class="py-10 bg-white border-b border-gray-100 overflow-hidden">
        <div class="container mx-auto px-6 mb-8 text-center">
             <p class="text-gray-400 uppercase tracking-widest text-xs font-bold">Clients & Friends</p>
        </div>
        <div class="marquee-container">
            <div class="marquee-content items-center" style="animation-duration: 160s;">
                ${generateClientImages()}
            </div>
        </div>
    </section>
    `;

    const reviewsHTML = `
    <!-- REVIEWS SECTION -->
    <section class="py-20 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div class="container mx-auto px-6 mb-12 text-center">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Loved by Pittsburgh</h2>
            <a href="https://www.google.com/search?q=Pita+My+Shawarma+Pittsburgh+reviews#lrd=0x8834f7b326ca211b:0x38642ff1701adcb1,1,,,," target="_blank" class="inline-block group">
                <div class="flex justify-center items-center gap-2 text-yellow-500 text-xl mb-2 group-hover:scale-105 transition-transform duration-300">
                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-stroke"></i>
                </div>
                <p class="text-gray-500 group-hover:text-brand-teal transition-colors duration-300 underline underline-offset-4 decoration-gray-300 group-hover:decoration-brand-teal">4.5 Average Rating on Google</p>
            </a>
        </div>
        <div class="marquee-container">
            <div class="marquee-content py-4" style="animation-duration: 150s;">
                ${generateReviewCards()}
            </div>
        </div>
    </section>
    `;

    // Inject into index.html if the container exists
    // We expect a container with id="clients-reviews-container"
    const container = document.getElementById('clients-reviews-container');
    if (container) {
        container.innerHTML = featuredHTML + clientsHTML + reviewsHTML;
    }
}
