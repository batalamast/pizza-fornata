export const container: any = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05
        }
    }
};

export const fadeUp: any = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const card: any = {
    hidden: { opacity: 0, y: 22, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } }
};
