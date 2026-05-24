import { useState } from "react";

interface TabProps {
  tabs: string[],
  selected: string,
  onSelect: (tab: string) => void,
}

function Tabs(props: TabProps) {
  const { tabs, selected, onSelect } = props;

  function tabStyle(is_selected: boolean) {
    switch (is_selected) {
      case true:
        return 'rounded-[16px] border border-gray-200 p-2 bg-blue-200'
      default:
        return ''
    }
  }

  return (
    <div className='absolute top-4 left-1/2 -translate-x-1/2 text-lg flex items-center justify-center gap-4'>
      {tabs.map(tab => {
        return (
          <div 
            className={tabStyle(tab === selected)}
            onClick={() => onSelect(tab)}
          >
              {tab}
          </div>
        )
      })}
    </div>
  )
}

const tabs = ['Bio', 'Education', 'Work', 'Skills'];

export function MainPage() {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  function onSelect(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <div className='relative min-h-screen w-full'>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={onSelect} />
    </div>
  )
}

