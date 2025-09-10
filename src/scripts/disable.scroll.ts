function blockScroll(event: Event): void {
  event.preventDefault();
  event.stopPropagation();
}

function globalDisableScroll(): void {
  document.body.addEventListener(
    'wheel',
    blockScroll,
    { passive: false }
  );

  document.body.addEventListener(
    'touchmove',
    blockScroll,
    { passive: false }
  );
}

function allowScroll(): void {
  document.body.removeEventListener(
    'wheel',
    blockScroll,
    { passive: false } as unknown as EventListenerOptions
  );

  document.body.removeEventListener(
    'touchmove',
    blockScroll,
    { passive: false } as unknown as EventListenerOptions
  );
}

const disableScroll = {
  on: (): void => globalDisableScroll(),
  off: (): void => allowScroll()
};

export default disableScroll;