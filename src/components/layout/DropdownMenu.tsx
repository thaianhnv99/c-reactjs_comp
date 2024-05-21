import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { type ReactNode, useState } from 'react';

export const ShiftingDropDown = () => {
  return (
    <div className="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      // onMouseLeave={() => handleSetSelected(null)}
      style={{
        position: 'relative',
        height: 'fit-content',
      }}
    >
      <Stack direction="row" gap={2}>
        {TABS.map((t) => {
          return (
            <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
              {t.title}
            </Tab>
          );
        })}
      </Stack>
      {selected ? <Content dir={dir} selected={selected} /> : null}
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab ? ' bg-neutral-800 text-neutral-100' : 'text-neutral-400'
      }`}
    >
      <span>{children}</span>
      (1)
    </button>
  );
};

const Content = ({ selected, dir }: { selected: number | null; dir: null | 'l' | 'r' }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'gray',
          position: 'absolute',
          top: 'calc(100% + 24px)',
          padding: 1,
          left: 0,
          right: 0,
          width: '100%',
        }}
      >
        <Bridge />
        {TABS.map((t) => {
          return (
            <Box key={t.id} overflow="hidden">
              {selected === t.id ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                >
                  <t.Component />
                </motion.div>
              ) : null}
            </Box>
          );
        })}
      </Box>
    </motion.div>
  );
};

const Bridge = () => (
  <div
    style={{
      position: 'absolute',
      top: '-24px',
      right: 0,
      left: 0,
      height: '24px',
    }}
  />
);

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">Startup</h3>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        (2)
      </button>
    </div>
  );
};

const Pricing = () => {
  return <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700"></div>;
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2"></div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        (6)
      </button>
    </div>
  );
};

const TABS = [
  {
    title: 'Products',
    Component: Products,
  },
  {
    title: 'Pricing',
    Component: Pricing,
  },
  {
    title: 'Blog',
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
