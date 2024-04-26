// import html2canvas from 'html2canvas';
// import { MAIN_CONTAINER, TOP_CONTAINER } from '../constants/id';

// const exportAsImage = async (
//   imageFileName: string,
//   type: 'download' | 'copy',
//   background: string
// ) => {
//   const textarea = document.getElementsByTagName('textarea')[0];
//   const main = document.getElementById(MAIN_CONTAINER);
//   const mainWidth = main?.clientWidth as number;
//   const mainHeight = main?.clientHeight as number;
//   textarea.style.display = 'none';

//   const canvas = await html2canvas(main as HTMLElement, {
//     allowTaint: true,
//     useCORS: true,
//     logging: false,
//     backgroundColor: null,
//     width: mainWidth,
//     height: mainHeight,
//     removeContainer: true,
//     ignoreElements(element) {
//       if (element.id === TOP_CONTAINER) {
//         return true;
//       }
//       return false;
//     },
//   });

//   if (type === 'download') {
//     const image = canvas.toDataURL('image/png', 1.0);
//     downloadImage(image, imageFileName);
//   } else {
//     captureImage(canvas, background);
//   }
//   textarea.style.display = 'block';
// };

// const downloadImage = (blob: string, fileName: string) => {
//   const fakeLink = window.document.createElement('a');
//   fakeLink.style.display = 'none';
//   fakeLink.download = fileName;

//   fakeLink.href = blob;

//   document.body.appendChild(fakeLink);
//   fakeLink.click();
//   document.body.removeChild(fakeLink);

//   fakeLink.remove();
// };

// const captureImage = (canvas: HTMLCanvasElement, background: string) => {
//   canvas.toBlob((blob) => {
//     const item = new ClipboardItem({ 'image/png': blob as Blob });
//     navigator.clipboard.write([item]);
//     showAlert('Copied', 1000, background);
//   });
// };

// const showAlert = (message: string, duration: number, background: string) => {
//   const el = document.createElement('div');
//   el.setAttribute(
//     'style',
//     `position:fixed;top:10%;left:50%;background-image:${background};transform:translateX(-50%);color:white;border-radius:4px;padding: 4px 6px;font-weight:500;transition: all 0.1s ease;z-index:100;`
//   );
//   el.innerHTML = message;
//   setTimeout(function () {
//     el.parentNode?.removeChild(el);
//   }, duration);
//   document.body.appendChild(el);
// };

// export default exportAsImage;
