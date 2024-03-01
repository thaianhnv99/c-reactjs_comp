import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useRef, useState } from 'react';

const CardSlider1 = () => {
  const dataSlider = [
    { id: 1, title: 'Title 1', conent: 'name' },
    { id: 2, title: 'Title 2', conent: 'name' },
    { id: 3, title: 'Title 3', conent: 'name' },
    { id: 4, title: 'Title 3', conent: 'name' },
  ];

  const [listChild, setListChild] = useState<NodeListOf<ChildNode>>();
  const [activeCount, setActiveCount] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setListChild(sliderRef.current?.childNodes);
    }
  }, []);

  const loadShow = useCallback(() => {
    if (!listChild) return;
    let stt = 0;
    const itemTopActive = listChild[activeCount] as HTMLElement;
    itemTopActive.style.transform = `unset`;
    itemTopActive.style.zIndex = '1';
    itemTopActive.style.filter = 'none';
    itemTopActive.style.opacity = '1';
    for (let i = activeCount + 1; i < listChild.length; i++) {
      stt++;
      const sliderForAs = listChild[i] as HTMLElement;
      sliderForAs.style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      sliderForAs.style.zIndex = '0';
      sliderForAs.style.filter = 'blur(5px)';
      sliderForAs.style.opacity = (stt > 2 ? 0 : 0.6).toString();
    }
    stt = 0;
    for (let i = activeCount - 1; i >= 0; i--) {
      stt++;
      (listChild[i] as HTMLElement).style.transform = `translateX(${
        -120 * stt
      }px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      (listChild[i] as HTMLElement).style.zIndex = '0';
      (listChild[i] as HTMLElement).style.filter = 'blur(5px)';
      (listChild[i] as HTMLElement).style.opacity = (stt > 2 ? 0 : 0.6).toString();
    }
  }, [activeCount, listChild]);

  useEffect(() => {
    if (!!listChild && listChild.length > 0) loadShow();
  }, [loadShow, listChild]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1rem',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '370px',
          overflow: 'hidden',
        }}
        ref={sliderRef}
      >
        {dataSlider.map((slider) => {
          return (
            <Box
              key={slider.id}
              sx={{
                border: '1px solid gray',
                position: 'absolute',
                width: '200px',
                height: '320px',
                textAlign: 'justify',
                borderRadius: '10px',
                padding: '20px',
                left: 'calc(50% - 110px)',
                transform: 'translateX(120px) scale(0.8) perspective(16px) rotateY(-1deg)',
                transition: 'all 1s',
                top: 0,
                backgroundColor: 'aliceblue',
              }}
            >
              <Typography>{slider.title}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Button
          onClick={() => {
            setActiveCount((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
            loadShow();
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            setActiveCount((prev) => (prev + 1 < (listChild?.length || 0) ? prev + 1 : prev));
            loadShow();
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CardSlider1;
