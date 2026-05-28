import { useState } from "react";
import { Bio } from "./Bio";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { Projects } from "./Projects";
import { Games } from "./Games";
import { Dropdown, DropdownItem } from "flowbite-react"

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
        return 'rounded-[16px] p-2 hover:bg-gray-200'
    }
  }

  return (
    <div className='w-[96%] absolute top-4 left-1/2 -translate-x-1/2 text-lg flex items-center justify-center gap-4'>
      <div className='mr-auto text-blue-500 cursor-default'>Tim's website</div>

      {tabs.map(tab => {
        return (
          <div 
            key={tab}
            className={`cursor-default ${tabStyle(tab === selected)}`}
            onClick={() => onSelect(tab)}
          >
            {tab}
          </div>
        )
      })}

      <div className="ml-auto">
        <Dropdown
          className='text-blue-500'
          label="Account"
          arrowIcon={false}
          inline
          theme={{
            inlineWrapper: "text-blue-500 hover:text-blue-700 cursor-pointer",
          }}
        >
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem className="text-red-500">Logout</DropdownItem>
        </Dropdown>
      </div>
    </div>
  )
}

const tabs = ['Bio', 'Education', 'Work', 'Projects', 'Skills', 'Games'];

export function MainPage() {
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  function onSelect(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <div className='relative min-h-screen w-full'>
      <Tabs tabs={tabs} selected={selectedTab} onSelect={onSelect} />
      {selectedTab === 'Bio' && <Bio />}
      {selectedTab === 'Education' && <Education />}
      {selectedTab === 'Work' && <Work />}
      {selectedTab === 'Projects' && <Projects />}
      {selectedTab === 'Skills' && <Skills />}
      {selectedTab === 'Games' && <Games />}
    </div>
  )
}

