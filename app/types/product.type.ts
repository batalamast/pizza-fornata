export type TProduct = {
    id: number;
    categoryId: number;
    title: string;
    description: string;
    imageUrl: string;
    prices: TProductPrice[];
    tags: string[];
};

export type TProductPrice = {
    size: string;
    dineIn: number;
    takeAway: number;
};
