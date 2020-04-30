import * as React from 'react';

type Props = {
  enabled?: boolean;
};

function disableContext(context: HTMLElement) {
  if (!context) return;
  [].slice
    .call(context.querySelectorAll('a, button'))
    .forEach((node: HTMLElement) => {
      node.setAttribute('tabindex', '-1');
    });
}

function enableContext(context: HTMLElement) {
  if (!context) return;
  [].slice
    .call(context.querySelectorAll('a, button'))
    .forEach((node: HTMLElement) => {
      node.removeAttribute('tabindex');
    });
}

export default function useTooltip(options: Props = {}) {
  const opts = {
    enabled: true,
    ...options,
  };

  const [active, setActive] = React.useState(false);
  const tooltipRef: React.RefObject<HTMLElement> = React.createRef();
  const toggleRef: React.RefObject<HTMLElement> = React.createRef();

  React.useEffect(() => {
    const tooltip = tooltipRef.current as HTMLElement;

    function handleEvent(e: MouseEvent | KeyboardEvent) {
      const target = e.target as HTMLElement;
      const tool = tooltipRef.current;
      const toggle = toggleRef.current;

      if (
        toggle &&
        tool &&
        !toggle.contains(target) &&
        toggle !== target &&
        !tool.contains(target) &&
        tool !== target
      ) {
        setActive(false);
      }
    }

    function cleanup() {
      window.removeEventListener('click', handleEvent);
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('focusin', handleEvent);
    }

    if (opts.enabled) {
      enableContext(tooltip);

      if (active) {
        window.addEventListener('click', handleEvent);
        window.addEventListener('keydown', handleEvent);
        window.addEventListener('focusin', handleEvent);
      } else {
        cleanup();
        disableContext(tooltip);
      }
    } else {
      cleanup();
      enableContext(tooltip);
    }

    return cleanup;
  }, [active, opts.enabled]);

  return {
    active,
    setActive,
    toggleActive: () => setActive(!active),
    tooltipRef,
    toggleRef,
  };
}
