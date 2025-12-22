import { MenuCard } from "~/components/menu/MenuCard";
import { menus, menusList, menusPerSlug, productsPerCategoryId } from "~/mock/menu";
import { useSearchParams } from "react-router";
import type { TMenuCard } from "~/types/menu.type";
import { IoIosArrowForward } from "react-icons/io";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { MenuItemCard } from "~/components/menu/MenuItemCard";

export const MenuSection = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onCtaClick = (item: TMenuCard) => {
        setSearchParams({ menu_slug: item.slug }, { replace: true, preventScrollReset: true });
    };

    const onBackToMenu = () => {
        setSearchParams({}, { replace: true, preventScrollReset: true });
    };

    const selectedMenu = menusPerSlug.get(searchParams.get("menu_slug") || "");

    return (
        <section className="py-14">
            {selectedMenu ? (
                <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-20">
                    <div className="flex items-center justify-center gap-2">
                        <button type={"button"} className="font-light cursor-pointer" onClick={onBackToMenu}>
                            Menus
                        </button>
                        <IoIosArrowForward className={"text-gray-300"} />
                        <button type={"button"} className={"text-primary-500 font-light cursor-pointer"}>
                            {selectedMenu.title}
                        </button>
                    </div>
                    <div className={"text-center text-[40px] font-semibold mt-5"}>{selectedMenu.title}</div>

                    <div className="flex w-full justify-center px-4 mt-5">
                        <div className="w-full max-w-8xl">
                            <TabGroup>
                                <TabList className="flex flex-wrap justify-center gap-3">
                                    {menusList.categories.map(category => (
                                        <Tab
                                            key={category.id}
                                            className="rounded-full border cursor-pointer border-primary-300 px-4 py-1.5 text-primary-500 bg-white/70 data-[selected]:bg-primary-500 data-[selected]:text-white data-[selected]:font-semibold hover:bg-white"
                                        >
                                            {category.title}
                                        </Tab>
                                    ))}
                                </TabList>

                                <div className={"text-center text-sm font-semibold mt-5"}>
                                    *Η πρώτη τιμή απευθύνεται στο dining και η δεύτερη στο{" "}
                                    <span className="text-primary-500">take away</span>
                                </div>

                                <TabPanels className="mt-6">
                                    {menusList.categories.map(category => {
                                        const products = productsPerCategoryId.get(category.id) || [];
                                        return (
                                            <TabPanel key={category.id} className="focus:outline-none">
                                                {products.length === 0 ? (
                                                    <div className="rounded-xl bg-white/80 p-6 text-center text-sm ">
                                                        Δεν υπάρχουν προϊόντα σε αυτή την κατηγορία.
                                                    </div>
                                                ) : (
                                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                                        {products.map(product => (
                                                            <MenuItemCard product={product} key={product.id} menuSlug={selectedMenu.slug} />
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
                    <div className="text-center text-[40px]">Menus</div>
                    <div className="text-center">
                        <span className="text-primary-700 font-semibold">Επέλεξε</span> ποιον{" "}
                        <span className="text-primary-700 font-semibold">κατάλογο</span> θα δεις.
                    </div>

                    <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {menus.map(item => (
                            <MenuCard key={item.slug} item={item} onCtaClick={onCtaClick} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default MenuSection;
