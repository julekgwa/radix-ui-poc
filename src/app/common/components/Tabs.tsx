import * as RUTabs from '@radix-ui/react-tabs';

interface Props {
  tabs: string[];
  children: React.ReactNode;
}

interface PanelProps {
  name: string;
  children: React.ReactNode;
}

export const Panel = (props: PanelProps) => <RUTabs.Content value={props.name}>{props.children}</RUTabs.Content>

export function Tabs({ tabs,children }: Props) {
  return (
    <RUTabs.Root className='flex flex-col flex-1' defaultValue={tabs[0]}>
      <RUTabs.List className='flex shrink-0'>
        {tabs.map((tab, idx) => (
          <RUTabs.Trigger className='shadow-[inset_0_-1px_0_0,0_1px_0_0] pb-3 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] text-base data-[state=active]:text-white text-gray-400 font-semibold flex-1 flex items-center justify-center hover:text-violet11 uppercase tracking-wide' value={tab} key={idx}>
            {tab}
          </RUTabs.Trigger>
        ))}
      </RUTabs.List>
      {children}
    </RUTabs.Root>
  );
}
