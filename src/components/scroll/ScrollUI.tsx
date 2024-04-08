import { useEffect, useRef } from 'react';

const ScrollUI = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (div2Ref.current) {
        const { top } = div2Ref.current.getBoundingClientRect();
        const halfwayVisibleTop = window.innerHeight - div2Ref.current.clientHeight / 2;
        const isAboveBottom = top <= halfwayVisibleTop;
        const isBelowTop = top >= -div2Ref.current.clientHeight / 2;
        console.log(isAboveBottom && isBelowTop);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    const app = divRef.current;
    const handleScroll = () => {
      if (app) {
        /**
         * scrollTop: phần tử đầu tiên của phần tử gốc so với phần tử đầu tiên của viewport
         * scrollHeight: chiều cao của phần tử bao gồm cả phần tử ko được visible
         * clientHeight: chiều cao của phần tử bên trong (bao gồm cả scroll, đệm,...)
         * const isScrollBottom = app.scrollHeight - app.scrollTop === app.clientHeight
         */
      }
    };
    app?.addEventListener('scroll', handleScroll);

    return () => app?.removeEventListener('scroll', handleScroll);
  });

  return (
    <div>
      <div style={{ height: '100px', backgroundColor: 'Highlight' }}>Div 1</div>
      <div
        ref={div2Ref}
        style={{
          height: '100px',
          backgroundColor: 'GrayText',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            margin: 'auto',
          }}
        >
          Div 2
        </span>
      </div>
      <div
        ref={divRef}
        style={{
          height: '200px',
          width: '100px',
          overflowX: 'hidden',
        }}
      >
        Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of
        the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly
        ninety-two million miles is an utterly insignificant little blue green planet whose
        ape-descended life forms are so amazingly primitive that they still think digital watches
        are a pretty neat idea.
      </div>
      {/* <Example /> */}
    </div>
  );
};

export default ScrollUI;
