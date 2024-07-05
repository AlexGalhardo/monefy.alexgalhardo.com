import { ExpensesType } from "@/types/brand";

const brandData: ExpensesType[] = [
    {
        description: "expense one",
        amount: 3.5,
        category: "FOOD",
        created_at: "2024-10-09",
    },
    {
        description: "expense two",
        amount: 2.2,
        category: "HOUSE",
        created_at: "2024-10-09",
    },
    {
        description: "expense threee",
        amount: 2.1,
        category: "SHOP",
        created_at: "2024-10-09",
    },
    {
        description: "expense four",
        amount: 1.5,
        category: "RENT",
        created_at: "2024-10-09",
    },
    {
        description: "expense five",
        amount: 3.5,
        category: "SERVICES",
        created_at: "2024-10-09"
    },
];

const TableOne = () => {
    return (
        <div className="w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h2 className="mb-6 text-xl font-semibold text-black dark:text-white">Expenses</h2>

            <div className="flex flex-col">
                {brandData.map((brand, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${
                            key === brandData.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"
                        }`}
                        key={key}
                    >
						<div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-meta-3">{brand.category}</p>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            {/* <div className="flex-shrink-0">
                                <Image src={brand.logo} alt="Brand" width={48} height={48} />
                            </div> */}
                            <p className="hidden text-black dark:text-white sm:block">{brand.description}</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">R$ {brand.amount}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{brand.created_at}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableOne;
