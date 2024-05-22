import { ReactNode, useState } from "react";
import { cx } from "class-variance-authority";

type Tab = { title: string; children: ReactNode };

type Props = {
  tabs: Tab[];
};

// TODO: Make it like the MUI Tab component (https://mui.com/material-ui/react-tabs)
const Tab = ({ tabs }: Props) => {
  const _tabs = tabs.map((tab, index) => ({ ...tab, id: index }));
  const [activeTab, setActiveTab] = useState<Tab & { id: number }>(_tabs[0]);

  return (
    <div>
      <div className="flex">
        {_tabs.map((tab, index) => (
          <div
            className="cursor-pointer flex-grow text-center border-b border-gray-200 relative"
            onClick={() => setActiveTab(_tabs[index])}
            key={index}
          >
            <div
              className={cx([
                "mb-3 font-semibold",
                activeTab.id === _tabs[index].id && "text-violet-700",
              ])}
            >
              {tab.title}
            </div>
            {activeTab.id === _tabs[index].id && (
              <div className="absolute translate-x-1/2 right-1/2 h-0.5 bg-violet-700 w-4/5"></div>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-6">{activeTab.children}</div>
    </div>
  );
};

export default Tab;
