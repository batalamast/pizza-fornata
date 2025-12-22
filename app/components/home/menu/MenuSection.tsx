import { MenuCard } from "~/components/home/menu/MenuCard";
import { menus, menusList, menusPerSlug, productsPerCategoryId } from "~/mock/menu";
import { useSearchParams } from "react-router";
import type { TMenuCard } from "~/types/menu.type";
import { IoIosArrowForward } from "react-icons/io";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MenuItemCard } from "~/components/home/menu/MenuItemCard";

export const MenuSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onCtaClick = (item: TMenuCard) => {
        setSearchParams({ menu_slug: item.slug }, { replace: true, preventScrollReset: true });
    };

    const onBackToMenu = () => {
        setSearchParams({}, { replace: true, preventScrollReset: true });
    };

    const selectedMenu = menusPerSlug.get(searchParams.get("menu_slug") || "");
    const categoryParam = Number(searchParams.get("category"));
    const categories = menusList.categories;

    const activeCategoryId = categories.some(c => c.id === categoryParam) ? categoryParam : categories[0]?.id;
    const selectedIndex = Math.max(
        0,
        categories.findIndex(c => c.id === activeCategoryId)
    );

    const setCategory = (categoryId: number) => {
        setSearchParams(
            prev => {
                const next = new URLSearchParams(prev);
                next.set("category", String(categoryId));
                return next;
            },
            { replace: true, preventScrollReset: true }
        );
    };

    return (
        <section className="py-14" id="menus" aria-labelledby="menus-title">
            {selectedMenu ? (
                <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-20">
                    {/* Breadcrumbs (a11y) */}
                    <nav className="flex items-center justify-center gap-2" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2">
                            <li>
                                <button
                                    type="button"
                                    className="font-light cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                    onClick={onBackToMenu}
                                >
                                    Menus
                                </button>
                            </li>
                            <li aria-hidden="true">
                                <IoIosArrowForward className="text-gray-300" />
                            </li>
                            <li>
                                <span className="text-primary-500 font-light" aria-current="page">
                                    {selectedMenu.title}
                                </span>
                            </li>
                        </ol>
                    </nav>

                    {/* Proper heading */}
                    <h2 id="menus-title" className="text-center text-[40px] font-semibold mt-5">
                        {selectedMenu.title}
                    </h2>

                    <div className="flex w-full justify-center px-4 mt-5">
                        <div className="w-full max-w-8xl">
                            <TabGroup
                                selectedIndex={selectedIndex}
                                onChange={index => {
                                    const id = categories[index]?.id;
                                    if (id) setCategory(id);
                                }}
                            >
                                <TabList className="flex flex-wrap justify-center gap-3" aria-label="Menu categories">
                                    {menusList.categories.map(category => (
                                        <Tab
                                            key={category.id}
                                            className="rounded-full border cursor-pointer border-primary-300 px-4 py-1.5 text-primary-500 bg-white/70 data-[selected]:bg-primary-500 data-[selected]:text-white data-[selected]:font-semibold hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                        >
                                            {category.title}
                                        </Tab>
                                    ))}
                                </TabList>

                                <p className="text-center text-sm font-semibold mt-5">
                                    *Η πρώτη τιμή απευθύνεται στο dining και η δεύτερη στο{" "}
                                    <span className="text-primary-500">take away</span>
                                </p>

                                <TabPanels className="mt-6">
                                    {menusList.categories.map(category => {
                                        const products = productsPerCategoryId.get(category.id) || [];
                                        return (
                                            <TabPanel
                                                key={category.id}
                                                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                                            >
                                                {products.length === 0 ? (
                                                    <div className="rounded-xl bg-white/80 p-6 text-center text-sm">
                                                        Δεν υπάρχουν προϊόντα σε αυτή την κατηγορία.
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3" role="list">
                                                        {products.map(product => (
                                                            <div role="listitem" key={product.id}>
                                                                <MenuItemCard product={product} menuSlug={selectedMenu.slug} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </TabPanel>
                                        );
                                    })}
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-20">
                    {/* Proper heading for section */}
                    <h2 id="menus-title" className="text-center text-[40px]">
                        Menus
                    </h2>

                    <p className="text-center">
                        <span className="text-primary-700 font-semibold">Επέλεξε</span> ποιον{" "}
                        <span className="text-primary-700 font-semibold">κατάλογο</span> θα δεις.
                    </p>

                    <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2" role="list">
                        {menus.map(item => (
                            <div role="listitem" key={item.slug}>
                                <MenuCard item={item} onCtaClick={onCtaClick} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default MenuSection;
