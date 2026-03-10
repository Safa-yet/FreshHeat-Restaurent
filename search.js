
// =============================================
// FOOD MENU DATA (তোমার menu থেকে নেওয়া)
// =============================================
const menuData = [
    {
        name: "Chinese Pasta",
        price: "$12.99",
        category: "Fast Food",
        image: "img/menuThumb1_1.png",
        description: "Delicious Chinese-style pasta with savory sauce, fresh vegetables, and tender noodles. A perfect blend of Eastern and Western flavors.",
        ingredients: ["Pasta", "Soy Sauce", "Bell Peppers", "Garlic", "Ginger", "Spring Onion"],
        calories: "450 kcal",
        time: "20 min",
        rating: 4.5
    },
    {
        name: "Grilled Chicken",
        price: "$14.99",
        category: "Main Course",
        image: "img/menuThumb1_2.png",
        description: "Juicy grilled chicken marinated with herbs and spices, served with fresh salad and garlic bread.",
        ingredients: ["Chicken Breast", "Herbs", "Garlic", "Lemon", "Olive Oil", "Spices"],
        calories: "380 kcal",
        time: "25 min",
        rating: 4.7
    },
    {
        name: "Veg Burger",
        price: "$8.99",
        category: "Burger",
        image: "img/menuThumb1_3.png",
        description: "Crispy veggie patty with fresh lettuce, tomato, cheese and our special sauce in a toasted bun.",
        ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Cheese", "Special Sauce", "Bun"],
        calories: "320 kcal",
        time: "15 min",
        rating: 4.3
    },
    {
        name: "Margherita Pizza",
        price: "$15.99",
        category: "Pizza",
        image: "img/menuThumb1_4.png",
        description: "Classic Italian Margherita with fresh mozzarella, tomato sauce and basil on crispy thin crust.",
        ingredients: ["Mozzarella", "Tomato Sauce", "Fresh Basil", "Olive Oil", "Thin Crust"],
        calories: "520 kcal",
        time: "30 min",
        rating: 4.8
    },
    {
        name: "Seafood Platter",
        price: "$22.99",
        category: "Seafood",
        image: "img/menuThumb1_5.png",
        description: "A generous platter of grilled shrimp, calamari, fish fillet and lobster with lemon butter sauce.",
        ingredients: ["Shrimp", "Calamari", "Fish Fillet", "Lobster", "Lemon Butter", "Herbs"],
        calories: "610 kcal",
        time: "35 min",
        rating: 4.9
    },
    {
        name: "BBQ Ribs",
        price: "$19.99",
        category: "Grill",
        image: "img/menuThumb1_6.png",
        description: "Slow-cooked tender pork ribs glazed with smoky BBQ sauce, served with coleslaw and fries.",
        ingredients: ["Pork Ribs", "BBQ Sauce", "Coleslaw", "Fries", "Pickles"],
        calories: "780 kcal",
        time: "40 min",
        rating: 4.6
    },
    {
        name: "Caesar Salad",
        price: "$9.99",
        category: "Salad",
        image: "img/menuThumb1_7.png",
        description: "Fresh romaine lettuce with caesar dressing, croutons, parmesan and grilled chicken strips.",
        ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan", "Chicken"],
        calories: "280 kcal",
        time: "10 min",
        rating: 4.4
    },
    {
        name: "Chocolate Cake",
        price: "$7.99",
        category: "Dessert",
        image: "img/menuThumb1_8.png",
        description: "Rich and moist chocolate cake with layers of chocolate ganache and vanilla cream frosting.",
        ingredients: ["Dark Chocolate", "Flour", "Eggs", "Butter", "Vanilla Cream", "Ganache"],
        calories: "420 kcal",
        time: "5 min",
        rating: 4.7
    },
    {
        name: "Lemon Cheesecake",
        price: "$8.49",
        category: "Dessert",
        image: "img/menuThumb1_9.png",
        description: "Creamy New York style cheesecake with fresh lemon zest on a buttery graham cracker crust.",
        ingredients: ["Cream Cheese", "Lemon Zest", "Graham Cracker", "Butter", "Sugar", "Eggs"],
        calories: "390 kcal",
        time: "5 min",
        rating: 4.5
    },
    {
        name: "Spicy Noodles",
        price: "$11.99",
        category: "Fast Food",
        image: "img/menuThumb1_1.png",
        description: "Fiery stir-fried noodles with chili, garlic, soy sauce and fresh vegetables for spice lovers.",
        ingredients: ["Noodles", "Chili", "Garlic", "Soy Sauce", "Vegetables", "Sesame Oil"],
        calories: "410 kcal",
        time: "18 min",
        rating: 4.4
    },
    {
        name: "Delicious Pizza",
        price: "$12.99",
        category: "Pizza",
        image: "img/dishes1_1.png",
        description: "Our signature pizza loaded with fresh toppings, premium cheese and homemade tomato sauce.",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Pepperoni", "Olives", "Oregano"],
        calories: "560 kcal",
        time: "30 min",
        rating: 4.8
    },
    {
        name: "Crispy Burger",
        price: "$9.99",
        category: "Burger",
        image: "img/dishes1_4.png",
        description: "Double beef patty burger with crispy bacon, cheddar cheese and fresh veggies.",
        ingredients: ["Beef Patty", "Bacon", "Cheddar", "Lettuce", "Tomato", "BBQ Sauce"],
        calories: "650 kcal",
        time: "20 min",
        rating: 4.6
    },
    {
        name: "Spicy Chicken",
        price: "$11.49",
        category: "Fast Food",
        image: "img/dishes1_3.png",
        description: "Hot and crispy fried chicken with spicy coating, served with honey mustard dipping sauce.",
        ingredients: ["Chicken", "Spice Mix", "Breadcrumbs", "Egg", "Honey Mustard"],
        calories: "480 kcal",
        time: "22 min",
        rating: 4.5
    },
    {
        name: "Fresh Pasta",
        price: "$13.99",
        category: "Italian",
        image: "img/dishes1_2.png",
        description: "Homemade fresh pasta in creamy alfredo sauce with mushrooms and grilled chicken.",
        ingredients: ["Fresh Pasta", "Alfredo Sauce", "Mushrooms", "Chicken", "Parmesan", "Herbs"],
        calories: "490 kcal",
        time: "25 min",
        rating: 4.6
    }
];


// =============================================
// MODAL HTML তৈরি করে body-তে append করো
// =============================================
const modalHTML = `
<div id="searchModal" class="fixed inset-0 z-[2000] hidden">
    <!-- Backdrop -->
    <div id="modalBackdrop" class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
    
    <!-- Modal Box -->
    <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div id="modalBox" class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl transform scale-90 opacity-0 transition-all duration-300">
            
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 class="text-xl font-bold text-gray-800">Search Results</h3>
                <button id="closeModal" class="w-9 h-9 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Search Input inside modal -->
            <div class="px-6 pt-4">
                <div class="relative">
                    <input type="text" id="modalSearchInput" placeholder="Search food items..." 
                        class="w-full border-2 border-gray-200 focus:border-red-400 rounded-xl px-5 py-3 pr-12 outline-none text-gray-700 transition-colors">
                    <i class="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
            </div>

            <!-- Results -->
            <div id="modalResults" class="p-6 max-h-[60vh] overflow-y-auto">
                <p class="text-center text-gray-400 py-8">
                    <i class="fa-solid fa-utensils text-4xl mb-3 block text-gray-200"></i>
                    Search for your favorite food...
                </p>
            </div>
        </div>
    </div>
</div>

<!-- Food Detail Modal -->
<div id="detailModal" class="fixed inset-0 z-[3000] hidden">
    <div id="detailBackdrop" class="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
    <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div id="detailBox" class="bg-white rounded-3xl shadow-2xl w-full max-w-lg transform scale-90 opacity-0 transition-all duration-300 overflow-hidden">
            <!-- Content will be injected here -->
        </div>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);


// =============================================
// SEARCH FUNCTIONS
// =============================================

// Search থেকে match করে ফেলো
function searchMenu(query) {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return menuData.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.ingredients.some(i => i.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q)
    );
}

// Stars render
function renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '<i class="fa-solid fa-star text-yellow-400 text-xs"></i>';
    if (half) stars += '<i class="fa-solid fa-star-half-stroke text-yellow-400 text-xs"></i>';
    return stars;
}

// Results render করো
function renderResults(query) {
    const results = searchMenu(query);
    const container = document.getElementById('modalResults');

    if (!query.trim()) {
        container.innerHTML = `<p class="text-center text-gray-400 py-8">
            <i class="fa-solid fa-utensils text-4xl mb-3 block text-gray-200"></i>
            Search for your favorite food...
        </p>`;
        return;
    }

    if (results.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-400 py-8">
            <i class="fa-solid fa-face-sad-tear text-4xl mb-3 block text-gray-200"></i>
            "<strong>${query}</strong>" পাওয়া যায়নি।<br>
            <span class="text-sm">অন্য কিছু search করো!</span>
        </p>`;
        return;
    }

    container.innerHTML = `
        <p class="text-sm text-gray-400 mb-4">"<strong class="text-gray-700">${query}</strong>" এর জন্য ${results.length}টি result পাওয়া গেছে</p>
        <div class="space-y-3">
            ${results.map((item, i) => `
                <div class="food-result-card flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-red-300 hover:bg-red-50 cursor-pointer transition-all group" 
                     data-index="${menuData.indexOf(item)}">
                    <div class="w-16 h-16 rounded-xl overflow-hidden bg-orange-50 flex-shrink-0 flex items-center justify-center">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain p-1"
                             onerror="this.outerHTML='<i class=\\'fa-solid fa-bowl-food text-brand-orange text-2xl\\'></i>'">
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="font-bold text-gray-900 group-hover:text-red-600 transition-colors">${item.name}</h4>
                            <span class="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">${item.category}</span>
                        </div>
                        <div class="flex items-center gap-1 mb-1">${renderStars(item.rating)} <span class="text-xs text-gray-400 ml-1">${item.rating}</span></div>
                        <p class="text-xs text-gray-400 truncate">${item.description.substring(0, 60)}...</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <p class="font-bold text-red-500 text-lg">${item.price}</p>
                        <p class="text-xs text-gray-400"><i class="fa-regular fa-clock mr-1"></i>${item.time}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Result card click → detail modal
    document.querySelectorAll('.food-result-card').forEach(card => {
        card.addEventListener('click', () => {
            const item = menuData[parseInt(card.dataset.index)];
            showDetailModal(item);
        });
    });
}

// Detail Modal দেখাও
function showDetailModal(item) {
    const box = document.getElementById('detailBox');
    box.innerHTML = `
        <div class="relative">
            <!-- Header bg -->
            <div class="bg-gradient-to-br from-red-500 to-orange-400 p-8 text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 20px 20px;"></div>
                <img src="${item.image}" alt="${item.name}" class="w-36 h-36 object-contain mx-auto mb-3 drop-shadow-2xl relative z-10"
                     onerror="this.outerHTML='<div class=\\'w-36 h-36 mx-auto mb-3 flex items-center justify-center\\'><i class=\\'fa-solid fa-bowl-food text-white text-6xl\\'></i></div>'">
                <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full relative z-10">${item.category}</span>
            </div>
            <!-- Close btn -->
            <button id="closeDetailModal" class="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors z-20">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        
        <div class="p-6">
            <!-- Name & Price -->
            <div class="flex items-start justify-between mb-3">
                <h2 class="text-2xl font-bold text-gray-900">${item.name}</h2>
                <span class="text-2xl font-bold text-red-500">${item.price}</span>
            </div>
            
            <!-- Rating & Info -->
            <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-1">${renderStars(item.rating)} <span class="text-sm text-gray-500 ml-1">${item.rating}/5</span></div>
                <span class="text-sm text-gray-400"><i class="fa-regular fa-clock mr-1 text-orange-400"></i>${item.time}</span>
                <span class="text-sm text-gray-400"><i class="fa-solid fa-fire mr-1 text-red-400"></i>${item.calories}</span>
            </div>

            <!-- Description -->
            <p class="text-gray-500 text-sm leading-relaxed mb-5">${item.description}</p>

            <!-- Ingredients -->
            <div class="mb-6">
                <h4 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">Ingredients</h4>
                <div class="flex flex-wrap gap-2">
                    ${item.ingredients.map(ing => `
                        <span class="bg-orange-50 border border-orange-200 text-orange-700 text-xs px-3 py-1 rounded-full">${ing}</span>
                    `).join('')}
                </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex gap-3">
                <button class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm uppercase tracking-wide">
                    <i class="fa-solid fa-cart-shopping mr-2"></i>Add to Cart
                </button>
                <button class="w-12 h-12 border-2 border-gray-200 hover:border-red-300 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-all">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('detailModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        box.style.transform = 'scale(1)';
        box.style.opacity = '1';
    }, 10);

    document.getElementById('closeDetailModal').addEventListener('click', hideDetailModal);
    document.getElementById('detailBackdrop').addEventListener('click', hideDetailModal);
}

function hideDetailModal() {
    const modal = document.getElementById('detailModal');
    const box = document.getElementById('detailBox');
    box.style.transform = 'scale(0.9)';
    box.style.opacity = '0';
    setTimeout(() => modal.classList.add('hidden'), 300);
}


// =============================================
// MODAL OPEN / CLOSE
// =============================================
function openSearchModal() {
    const modal = document.getElementById('searchModal');
    const box = document.getElementById('modalBox');
    modal.classList.remove('hidden');
    setTimeout(() => {
        box.style.transform = 'scale(1)';
        box.style.opacity = '1';
        document.getElementById('modalSearchInput').focus();
    }, 10);
}

function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    const box = document.getElementById('modalBox');
    box.style.transform = 'scale(0.9)';
    box.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('modalSearchInput').value = '';
        document.getElementById('modalResults').innerHTML = `
            <p class="text-center text-gray-400 py-8">
                <i class="fa-solid fa-utensils text-4xl mb-3 block text-gray-200"></i>
                Search for your favorite food...
            </p>`;
    }, 300);
}

// Search button click → modal open
document.querySelectorAll('#desktopSearchBtn, #searchBox, #mobileSearchBtn').forEach(btn => {
    if (btn) btn.addEventListener('click', (e) => {
        e.preventDefault();
        openSearchModal();
    });
});

document.getElementById('closeModal').addEventListener('click', closeSearchModal);
document.getElementById('modalBackdrop').addEventListener('click', closeSearchModal);

// Typing এ live search
document.getElementById('modalSearchInput').addEventListener('input', (e) => {
    renderResults(e.target.value);
});

// ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearchModal();
        hideDetailModal();
    }
});


// =============================================
// SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeSide();
        }
    });
});


// =============================================
// STICKY NAVBAR
// =============================================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('stickyNav');
    if (!nav) return;
    if (window.scrollY >= 136) {
        nav.style.top = '0';
        nav.style.opacity = '1';
    } else {
        nav.style.top = '-100px';
        nav.style.opacity = '0';
    }
});


// =============================================
// SIDE PANEL
// =============================================
function openSide() {
    document.getElementById('sidePanel').style.transform = 'translateX(0)';
    document.getElementById('sideOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeSide() {
    const panel = document.getElementById('sidePanel');
    const overlay = document.getElementById('sideOverlay');
    if (panel) panel.style.transform = 'translateX(100%)';
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

['openSideBtn', 'openSideBtn2', 'openSideBtnMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', openSide);
});


// =============================================
// HERO SLIDER
// =============================================
// const slides = document.querySelectorAll('.hero-slide');
// const dots = document.querySelectorAll('.slider-dot');
// let currentSlide = 0;

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.remove('active', 'prev');
        if (i === index) s.classList.add('active');
        else if (i === (index - 1 + slides.length) % slides.length) s.classList.add('prev');
    });
    dots.forEach((d, i) => {
        d.style.background = i === index ? 'white' : 'rgba(255,255,255,0.4)';
    });
}

dots.forEach((dot, i) => dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
}));

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

showSlide(0);


// =============================================
// PRELOADER
// =============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('preLoader');
        if (loader) loader.classList.add('hidden');
    }, 800);
});