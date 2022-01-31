import React from 'react';

const CategoriesChoiceBar = ({ additionalClass }) => {
    const tabs = [
        { name: 'Breakfast', href: '#', current: true },
        { name: 'Dinner', href: '#', current: false },
        { name: 'Dessert', href: '#', current: false },
        { name: 'Lunch', href: '#', current: false },
        { name: 'Snack', href: '#', current: false },
        { name: 'Vegan', href: '#', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <div className="w-full md:max-w-3xl flex justify-between mx-auto px-2 sm:px-6 lg:px-8">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300
                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full hidden sm:block">
                <div className="border-b border-primary/25 ">
                    <nav className="w-full -mb-px flex justify-between" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current
                                        ? 'border-primary !font-semibold'
                                        : 'border-transparent text-primary hover:text-gray-700 hover:border-gray-300',
                                    'whitespace-nowrap py-4 border-b-4 font-light text-lg',
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CategoriesChoiceBar;
