const getCopyStyleVector = () => {
  const copyStyleVector = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7 5.65L18.35 3.3C17.95 2.9 17.35 2.9 16.95 3.3L13.8 6.4L11.9 4.5L10.5 5.9L11.9 7.3L3 16.25V21H7.75L16.65 12.1L18.05 13.5L19.45 12.1L17.55 10.2L20.7 7.05C21.1 6.65 21.1 6 20.7 5.65ZM6.9 19L5 17.1L13.05 9L14.95 10.9L6.9 19Z" fill="black"/>
    </svg>`;
  return `data:image/svg+xml;base64,${window.btoa(copyStyleVector)}`;
};

export const getCopyStyleCursor = () => {
  return `url(${getCopyStyleVector()}), crosshair`;
};
