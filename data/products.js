const products = [
    {
        id: 1,
        name: "MacBook Air M3",
        category: "laptop",
        categoryLabel: "لپ‌ تاپ",
        brand: "Apple",
        price: 58900000,
        oldPrice: 62900000,
        discount: 6,
        rating: 4.8,
        reviewCount: 124,
        image: "/products/macbook-air-m3.jpg",
        badge: "پرفروش",
        stock: 8,
        specifications: [
            {
                label: "پردازنده",
                value: "Apple M3",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "13.6 اینچ Liquid Retina",
            },
            {
                label: "رزولوشن",
                value: "2560 × 1664",
            },
            {
                label: "پردازنده گرافیکی",
                value: "Apple M3 GPU",
            },
            {
                label: "سیستم‌عامل",
                value: "macOS",
            },
            {
                label: "وزن",
                value: "1.24 کیلوگرم",
            },
        ],
    },

    {
        id: 2,
        name: "ASUS ROG Strix G16",
        category: "laptop",
        categoryLabel: "لپ‌ تاپ",
        brand: "ASUS",
        price: 74900000,
        oldPrice: 79900000,
        discount: 6,
        rating: 4.7,
        reviewCount: 86,
        image: "/products/asus-rog-strix-g16.jpg",
        badge: "ویژه",
        stock: 5,
        specifications: [
            {
                label: "پردازنده",
                value: "Intel Core i7-13650HX",
            },
            {
                label: "حافظه رم",
                value: "16GB DDR5",
            },
            {
                label: "حافظه داخلی",
                value: "1TB NVMe SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "16 اینچ IPS",
            },
            {
                label: "رزولوشن",
                value: "1920 × 1200",
            },
            {
                label: "نرخ نوسازی",
                value: "165Hz",
            },
            {
                label: "پردازنده گرافیکی",
                value: "NVIDIA GeForce RTX 4060",
            },
            {
                label: "سیستم‌عامل",
                value: "Windows 11",
            },
        ],
    },

    {
        id: 3,
        name: "Lenovo IdeaPad Slim 3",
        category: "laptop",
        categoryLabel: "لپ‌ تاپ",
        brand: "Lenovo",
        price: 32900000,
        oldPrice: 35900000,
        discount: 8,
        rating: 4.5,
        reviewCount: 64,
        image: "/products/lenovo-ideapad-slim-3.jpg",
        badge: null,
        stock: 12,
        specifications: [
            {
                label: "پردازنده",
                value: "Intel Core i5-13420H",
            },
            {
                label: "حافظه رم",
                value: "8GB DDR5",
            },
            {
                label: "حافظه داخلی",
                value: "512GB SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "15.6 اینچ IPS",
            },
            {
                label: "رزولوشن",
                value: "1920 × 1080",
            },
            {
                label: "پردازنده گرافیکی",
                value: "Intel UHD Graphics",
            },
            {
                label: "سیستم‌عامل",
                value: "Windows 11",
            },
            {
                label: "وزن",
                value: "1.62 کیلوگرم",
            },
        ],
    },

    {
        id: 4,
        name: "HP Victus 15",
        category: "laptop",
        categoryLabel: "لپ‌ تاپ",
        brand: "HP",
        price: 52900000,
        oldPrice: 56900000,
        discount: 7,
        rating: 4.6,
        reviewCount: 51,
        image: "/products/hp-victus-15.jpg",
        badge: null,
        stock: 7,
        specifications: [
            {
                label: "پردازنده",
                value: "Intel Core i5-13420H",
            },
            {
                label: "حافظه رم",
                value: "16GB DDR4",
            },
            {
                label: "حافظه داخلی",
                value: "512GB SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "15.6 اینچ IPS",
            },
            {
                label: "رزولوشن",
                value: "1920 × 1080",
            },
            {
                label: "نرخ نوسازی",
                value: "144Hz",
            },
            {
                label: "پردازنده گرافیکی",
                value: "NVIDIA GeForce RTX 3050",
            },
            {
                label: "سیستم‌عامل",
                value: "Windows 11",
            },
        ],
    },

    {
        id: 5,
        name: "Microsoft Surface Laptop 5",
        category: "laptop",
        categoryLabel: "لپ‌ تاپ",
        brand: "Microsoft",
        price: 67900000,
        oldPrice: null,
        discount: 0,
        rating: 4.7,
        reviewCount: 38,
        image: "/products/surface-laptop-5.jpg",
        badge: "جدید",
        stock: 4,
        specifications: [
            {
                label: "پردازنده",
                value: "Intel Core i7-1255U",
            },
            {
                label: "حافظه رم",
                value: "16GB LPDDR5",
            },
            {
                label: "حافظه داخلی",
                value: "512GB SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "13.5 اینچ PixelSense",
            },
            {
                label: "رزولوشن",
                value: "2256 × 1504",
            },
            {
                label: "پردازنده گرافیکی",
                value: "Intel Iris Xe",
            },
            {
                label: "سیستم‌عامل",
                value: "Windows 11",
            },
            {
                label: "وزن",
                value: "1.29 کیلوگرم",
            },
        ],
    },

    {
        id: 6,
        name: "iPhone 16 Pro",
        category: "mobile",
        categoryLabel: "موبایل",
        brand: "Apple",
        price: 89900000,
        oldPrice: 94900000,
        discount: 5,
        rating: 4.9,
        reviewCount: 218,
        image: "/products/iphone-16-pro.jpg",
        badge: "پرفروش",
        stock: 6,
        specifications: [
            {
                label: "پردازنده",
                value: "Apple A18 Pro",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "6.3 اینچ Super Retina XDR OLED",
            },
            {
                label: "دوربین اصلی",
                value: "48MP + 48MP + 12MP",
            },
            {
                label: "دوربین سلفی",
                value: "12MP",
            },
            {
                label: "باتری",
                value: "Li-Ion",
            },
            {
                label: "سیستم‌عامل",
                value: "iOS",
            },
        ],
    },

    {
        id: 7,
        name: "Samsung Galaxy S25 Ultra",
        category: "mobile",
        categoryLabel: "موبایل",
        brand: "Samsung",
        price: 82900000,
        oldPrice: 87900000,
        discount: 6,
        rating: 4.9,
        reviewCount: 193,
        image: "/products/galaxy-s25-ultra.jpg",
        badge: "ویژه",
        stock: 9,
        specifications: [
            {
                label: "پردازنده",
                value: "Snapdragon 8 Elite",
            },
            {
                label: "حافظه رم",
                value: "12GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "6.9 اینچ Dynamic AMOLED 2X",
            },
            {
                label: "دوربین اصلی",
                value: "200MP + 50MP + 50MP + 10MP",
            },
            {
                label: "دوربین سلفی",
                value: "12MP",
            },
            {
                label: "باتری",
                value: "5000mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 8,
        name: "Xiaomi 15",
        category: "mobile",
        categoryLabel: "موبایل",
        brand: "Xiaomi",
        price: 42900000,
        oldPrice: 45900000,
        discount: 7,
        rating: 4.6,
        reviewCount: 77,
        image: "/products/xiaomi-15.jpg",
        badge: null,
        stock: 15,
        specifications: [
            {
                label: "پردازنده",
                value: "Snapdragon 8 Elite",
            },
            {
                label: "حافظه رم",
                value: "12GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "6.36 اینچ LTPO OLED",
            },
            {
                label: "دوربین اصلی",
                value: "50MP + 50MP + 50MP",
            },
            {
                label: "دوربین سلفی",
                value: "32MP",
            },
            {
                label: "باتری",
                value: "5240mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 9,
        name: "Google Pixel 9 Pro",
        category: "mobile",
        categoryLabel: "موبایل",
        brand: "Google",
        price: 67900000,
        oldPrice: 71900000,
        discount: 6,
        rating: 4.8,
        reviewCount: 91,
        image: "/products/pixel-9-pro.jpg",
        badge: "جدید",
        stock: 5,
        specifications: [
            {
                label: "پردازنده",
                value: "Google Tensor G4",
            },
            {
                label: "حافظه رم",
                value: "16GB",
            },
            {
                label: "حافظه داخلی",
                value: "128GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "6.3 اینچ LTPO OLED",
            },
            {
                label: "دوربین اصلی",
                value: "50MP + 48MP + 48MP",
            },
            {
                label: "دوربین سلفی",
                value: "42MP",
            },
            {
                label: "باتری",
                value: "4700mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 10,
        name: "Samsung Galaxy A56",
        category: "mobile",
        categoryLabel: "موبایل",
        brand: "Samsung",
        price: 28900000,
        oldPrice: 30900000,
        discount: 6,
        rating: 4.5,
        reviewCount: 112,
        image: "/products/galaxy-a56.jpg",
        badge: null,
        stock: 20,
        specifications: [
            {
                label: "پردازنده",
                value: "Exynos 1580",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "128GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "6.7 اینچ Super AMOLED",
            },
            {
                label: "دوربین اصلی",
                value: "50MP + 12MP + 5MP",
            },
            {
                label: "دوربین سلفی",
                value: "12MP",
            },
            {
                label: "باتری",
                value: "5000mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 11,
        name: "AirPods Pro 2",
        category: "earbuds",
        categoryLabel: "هدفون",
        brand: "Apple",
        price: 12900000,
        oldPrice: 14500000,
        discount: 11,
        rating: 4.8,
        reviewCount: 176,
        image: "/products/airpods-pro-2.jpg",
        badge: "پرفروش",
        stock: 14,
        specifications: [
            {
                label: "نوع",
                value: "True Wireless",
            },
            {
                label: "درایور",
                value: "Apple Custom High-Excursion",
            },
            {
                label: "حذف نویز",
                value: "Active Noise Cancellation",
            },
            {
                label: "اتصال",
                value: "Bluetooth 5.3",
            },
            {
                label: "مقاومت",
                value: "IP54",
            },
            {
                label: "باتری هدفون",
                value: "تا ۶ ساعت",
            },
            {
                label: "باتری با کیس",
                value: "تا ۳۰ ساعت",
            },
            {
                label: "سازگاری",
                value: "iOS و Android",
            },
        ],
    },

    {
        id: 12,
        name: "Sony WF-1000XM5",
        category: "earbuds",
        categoryLabel: "هدفون",
        brand: "Sony",
        price: 11900000,
        oldPrice: 13200000,
        discount: 10,
        rating: 4.8,
        reviewCount: 102,
        image: "/products/sony-wf-1000xm5.jpg",
        badge: "ویژه",
        stock: 8,
        specifications: [
            {
                label: "نوع",
                value: "True Wireless",
            },
            {
                label: "درایور",
                value: "8.4mm Dynamic Driver",
            },
            {
                label: "حذف نویز",
                value: "Active Noise Cancellation",
            },
            {
                label: "اتصال",
                value: "Bluetooth 5.3",
            },
            {
                label: "کدک صوتی",
                value: "LDAC / AAC / SBC",
            },
            {
                label: "باتری هدفون",
                value: "تا ۸ ساعت",
            },
            {
                label: "باتری با کیس",
                value: "تا ۲۴ ساعت",
            },
            {
                label: "مقاومت",
                value: "IPX4",
            },
        ],
    },

    {
        id: 13,
        name: "Samsung Galaxy Buds3 Pro",
        category: "earbuds",
        categoryLabel: "هدفون",
        brand: "Samsung",
        price: 7900000,
        oldPrice: 8900000,
        discount: 11,
        rating: 4.6,
        reviewCount: 69,
        image: "/products/galaxy-buds3-pro.jpg",
        badge: null,
        stock: 11,
        specifications: [
            {
                label: "نوع",
                value: "True Wireless",
            },
            {
                label: "درایور",
                value: "Dual Driver",
            },
            {
                label: "حذف نویز",
                value: "Active Noise Cancellation",
            },
            {
                label: "اتصال",
                value: "Bluetooth 5.4",
            },
            {
                label: "کدک صوتی",
                value: "Samsung Seamless Codec",
            },
            {
                label: "باتری هدفون",
                value: "تا ۷ ساعت",
            },
            {
                label: "باتری با کیس",
                value: "تا ۳۰ ساعت",
            },
            {
                label: "مقاومت",
                value: "IP57",
            },
        ],
    },

    {
        id: 14,
        name: "Nothing Ear",
        category: "earbuds",
        categoryLabel: "هدفون",
        brand: "Nothing",
        price: 6900000,
        oldPrice: null,
        discount: 0,
        rating: 4.5,
        reviewCount: 44,
        image: "/products/nothing-ear.jpg",
        badge: "جدید",
        stock: 10,
        specifications: [
            {
                label: "نوع",
                value: "True Wireless",
            },
            {
                label: "درایور",
                value: "11mm Ceramic Driver",
            },
            {
                label: "حذف نویز",
                value: "Active Noise Cancellation",
            },
            {
                label: "اتصال",
                value: "Bluetooth 5.3",
            },
            {
                label: "کدک صوتی",
                value: "LDAC / AAC / SBC",
            },
            {
                label: "باتری هدفون",
                value: "تا ۸.۵ ساعت",
            },
            {
                label: "باتری با کیس",
                value: "تا ۴۰.۵ ساعت",
            },
            {
                label: "مقاومت",
                value: "IP54",
            },
        ],
    },

    {
        id: 15,
        name: "JBL Live Pro 2",
        category: "earbuds",
        categoryLabel: "هدفون",
        brand: "JBL",
        price: 6100000,
        oldPrice: 6900000,
        discount: 12,
        rating: 4.5,
        reviewCount: 57,
        image: "/products/jbl-live-pro-2.jpg",
        badge: null,
        stock: 13,
        specifications: [
            {
                label: "نوع",
                value: "True Wireless",
            },
            {
                label: "درایور",
                value: "11mm Dynamic Driver",
            },
            {
                label: "حذف نویز",
                value: "Adaptive Noise Cancellation",
            },
            {
                label: "اتصال",
                value: "Bluetooth 5.2",
            },
            {
                label: "کدک صوتی",
                value: "AAC / SBC",
            },
            {
                label: "باتری هدفون",
                value: "تا ۱۰ ساعت",
            },
            {
                label: "باتری با کیس",
                value: "تا ۴۰ ساعت",
            },
            {
                label: "مقاومت",
                value: "IPX5",
            },
        ],
    },

    {
        id: 16,
        name: "iPad Pro M4",
        category: "tablet",
        categoryLabel: "تبلت",
        brand: "Apple",
        price: 75900000,
        oldPrice: 79900000,
        discount: 5,
        rating: 4.9,
        reviewCount: 83,
        image: "/products/ipad-pro-m4.jpg",
        badge: "پرفروش",
        stock: 5,
        specifications: [
            {
                label: "پردازنده",
                value: "Apple M4",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "11 اینچ Ultra Retina XDR OLED",
            },
            {
                label: "رزولوشن",
                value: "2420 × 1668",
            },
            {
                label: "دوربین اصلی",
                value: "12MP",
            },
            {
                label: "باتری",
                value: "تا ۱۰ ساعت",
            },
            {
                label: "سیستم‌عامل",
                value: "iPadOS",
            },
        ],
    },

    {
        id: 17,
        name: "Samsung Galaxy Tab S10 Ultra",
        category: "tablet",
        categoryLabel: "تبلت",
        brand: "Samsung",
        price: 64900000,
        oldPrice: 69900000,
        discount: 7,
        rating: 4.8,
        reviewCount: 71,
        image: "/products/galaxy-tab-s10-ultra.jpg",
        badge: "ویژه",
        stock: 7,
        specifications: [
            {
                label: "پردازنده",
                value: "MediaTek Dimensity 9300+",
            },
            {
                label: "حافظه رم",
                value: "12GB",
            },
            {
                label: "حافظه داخلی",
                value: "256GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "14.6 اینچ Dynamic AMOLED 2X",
            },
            {
                label: "رزولوشن",
                value: "2960 × 1848",
            },
            {
                label: "دوربین اصلی",
                value: "13MP + 8MP",
            },
            {
                label: "باتری",
                value: "11200mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 18,
        name: "Xiaomi Pad 7",
        category: "tablet",
        categoryLabel: "تبلت",
        brand: "Xiaomi",
        price: 24900000,
        oldPrice: 26900000,
        discount: 7,
        rating: 4.6,
        reviewCount: 49,
        image: "/products/xiaomi-pad-7.jpg",
        badge: null,
        stock: 16,
        specifications: [
            {
                label: "پردازنده",
                value: "Snapdragon 7+ Gen 3",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "128GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "11.2 اینچ IPS LCD",
            },
            {
                label: "رزولوشن",
                value: "3200 × 2136",
            },
            {
                label: "نرخ نوسازی",
                value: "144Hz",
            },
            {
                label: "باتری",
                value: "8850mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "HyperOS",
            },
        ],
    },

    {
        id: 19,
        name: "Lenovo Tab P12",
        category: "tablet",
        categoryLabel: "تبلت",
        brand: "Lenovo",
        price: 21900000,
        oldPrice: 23900000,
        discount: 8,
        rating: 4.4,
        reviewCount: 36,
        image: "/products/lenovo-tab-p12.jpg",
        badge: null,
        stock: 9,
        specifications: [
            {
                label: "پردازنده",
                value: "MediaTek Dimensity 7050",
            },
            {
                label: "حافظه رم",
                value: "8GB",
            },
            {
                label: "حافظه داخلی",
                value: "128GB",
            },
            {
                label: "صفحه‌نمایش",
                value: "12.7 اینچ LTPS LCD",
            },
            {
                label: "رزولوشن",
                value: "2944 × 1840",
            },
            {
                label: "دوربین اصلی",
                value: "13MP",
            },
            {
                label: "باتری",
                value: "10200mAh",
            },
            {
                label: "سیستم‌عامل",
                value: "Android",
            },
        ],
    },

    {
        id: 20,
        name: "Microsoft Surface Pro 11",
        category: "tablet",
        categoryLabel: "تبلت",
        brand: "Microsoft",
        price: 71900000,
        oldPrice: null,
        discount: 0,
        rating: 4.8,
        reviewCount: 31,
        image: "/products/surface-pro-11.jpg",
        badge: "جدید",
        stock: 4,
        specifications: [
            {
                label: "پردازنده",
                value: "Snapdragon X Elite",
            },
            {
                label: "حافظه رم",
                value: "16GB",
            },
            {
                label: "حافظه داخلی",
                value: "512GB SSD",
            },
            {
                label: "صفحه‌نمایش",
                value: "13 اینچ PixelSense Flow OLED",
            },
            {
                label: "رزولوشن",
                value: "2880 × 1920",
            },
            {
                label: "نرخ نوسازی",
                value: "120Hz",
            },
            {
                label: "باتری",
                value: "تا ۱۴ ساعت وب‌گردی",
            },
            {
                label: "سیستم‌عامل",
                value: "Windows 11",
            },
        ],
    },
];

export default products;