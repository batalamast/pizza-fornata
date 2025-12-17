import { StatisticsCard } from "~/components/statistics/StatisticsCard";
import { MenuCard } from "~/components/menu/MenuCard";
import { menus } from "~/mock/menu";

const MenuSection = () => {
    return (
        <section className="py-14">
            <div className={"mx-auto px-4 md:px-8 lg:px-20 max-w-7xl"}>
                <div className={"text-center text-[40px]"}>Menus</div>
                <div className={"text-center"}>
                    <span className="text-primary-700 font-semibold">Επέλεξε</span> ποιον{" "}
                    <span className={"text-primary-700 font-semibold"}>κατάλογο</span> θα δεις.
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 justify-center gap-8 my-8"}>
                    {menus.map((item, index) => (
                        <MenuCard item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
