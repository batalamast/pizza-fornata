import type { TMenuCard } from "~/types/menu.type";
import type { TProduct } from "~/types/product.type";
import type { TCategory } from "~/types/category.types";

export const menus: TMenuCard[] = [
    {
        id: 1,
        title: "Dine In",
        slug: "dine-in",
        imageUrl: "/images/menu/dine-in.png"
    },
    {
        id: 2,
        title: "Take Away / Delivery",
        slug: "take-away-delivery",
        imageUrl: "/images/menu/take-away.png"
    }
];

export const menusPerSlug = new Map<string, TMenuCard>();
menus.forEach(menu => {
    menusPerSlug.set(menu.slug, menu);
});

export const menusList: { categories: TCategory[]; products: TProduct[] } = {
    categories: [
        {
            id: 1,
            title: "Premium Γεύσεις",
            slug: "premium-geuseis"
        },
        {
            id: 2,
            title: "Καλτσόνε",
            slug: "kaltzone"
        },
        {
            id: 3,
            title: "Πέννε",
            slug: "penne"
        },
        {
            id: 4,
            title: "Αναψυκτικά",
            slug: "anapsyktika"
        },
        {
            id: 5,
            title: "Μπύρες - Ποτά",
            slug: "mpyres-pota"
        }
    ],
    products: [
        {
            id: 1,
            categoryId: 1,
            title: "Italian Pizza",
            description:
                "Με σάλτσα ντομάτας, gouda, μοτσαρέλα, baby ρόκα, prosciutto, τριμμένη παρμεζάνα και εξαιρετικά παρθένο ελαιόλαδο.",
            imageUrl: "/images/menu/pizza.png",
            prices: [
                { size: "30cm", dineIn: 17, takeAway: 15 },
                { size: "38cm", dineIn: 21, takeAway: 19 }
            ],
            tags: ["Pizza", "Premium"]
        },
        {
            id: 2,
            categoryId: 1,
            title: "Truffle Pizza",
            description: "Κρέμα τρούφας, mozzarella, μανιτάρια, prosciutto cotto και flakes παρμεζάνας.",
            imageUrl: "/images/menu/pizza.png",
            prices: [
                { size: "30cm", dineIn: 18, takeAway: 16 },
                { size: "38cm", dineIn: 23, takeAway: 21 }
            ],
            tags: ["Pizza", "Truffle"]
        },
        {
            id: 3,
            categoryId: 1,
            title: "Diavola",
            description: "Σάλτσα ντομάτας, mozzarella, πικάντικο σαλάμι, καυτερή πιπεριά και ελαιόλαδο.",
            imageUrl: "/images/menu/pizza.png",
            prices: [
                { size: "30cm", dineIn: 16, takeAway: 14 },
                { size: "38cm", dineIn: 20, takeAway: 18 }
            ],
            tags: ["Pizza", "Spicy"]
        },

        {
            id: 4,
            categoryId: 2,
            title: "Classic Calzone",
            description: "Mozzarella, σάλτσα ντομάτας, ζαμπόν και μανιτάρια σε αφράτη ζύμη.",
            imageUrl: "/images/menu/pizza.png",
            prices: [{ size: "1pc", dineIn: 10, takeAway: 9 }],
            tags: ["Calzone"]
        },
        {
            id: 5,
            categoryId: 2,
            title: "Chicken Calzone",
            description: "Κοτόπουλο, mozzarella, πιπεριές και σάλτσα BBQ.",
            imageUrl: "/images/menu/pizza.png",
            prices: [{ size: "1pc", dineIn: 11, takeAway: 10 }],
            tags: ["Calzone", "BBQ"]
        },

        {
            id: 6,
            categoryId: 3,
            title: "Penne Arrabbiata",
            description: "Πικάντικη σάλτσα ντομάτας, σκόρδο, βασιλικός και παρμεζάνα.",
            imageUrl: "/images/menu/pizza.png",
            prices: [{ size: "1portion", dineIn: 9, takeAway: 8 }],
            tags: ["Pasta", "Spicy"]
        }
    ]
};

export const productsPerCategoryId = new Map<number, TProduct[]>();
menusList.categories.forEach(category => {
    const products = menusList.products.filter(p => p.categoryId === category.id);
    productsPerCategoryId.set(category.id, products);
});
