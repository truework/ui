import * as React from 'react';
import styled, { css } from 'styled-components';
import { Icon, P } from '@truework/ui';

type SharedProps = {
  active?: boolean;
  showInfoAsTooltip?: boolean;
};

const StyledInfo = styled(P)<SharedProps>(
  ({ theme, showInfoAsTooltip, active }) => css`
    font-size: ${theme.fontSizes[1]};
    line-height: ${theme.lineHeights[1]};
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.space.xs};

    ${showInfoAsTooltip &&
    css`
      @media (min-width: ${theme.breakpoints[1]}) {
        position: absolute;
        top: 0;
        right: 0;
        width: 270px;
        padding: ${theme.space.sm};
        background: white;
        box-shadow: ${theme.shadows.medium};
        border-radius: ${theme.radii[1]};
        transform: translateX(50%) translateX(-10px) translateY(-100%)
          translateY(-20px);

        &::before {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          height: 20px;
          width: 20px;
          background: white;
          transform: translateY(10px) rotate(45deg);
          box-shadow: ${theme.shadows.medium};
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 10px;
          background: white;
          border-radius: ${theme.radii[1]};
        }

        ${showInfoAsTooltip &&
        !active &&
        css`
          display: block;
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          position: absolute;
        `}
      }
    `}
  `
);

type InfoProps = {
  content: React.ReactNode;
};

const Info = React.forwardRef((props: SharedProps & InfoProps, ref: any) => {
  return (
    <StyledInfo {...props} ref={ref}>
      {props.content}
    </StyledInfo>
  );
});

Info.displayName = 'Info';

const StyledInfoButton = styled.button<SharedProps>(
  ({ theme, active }) => css`
    display: none;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    padding: 0;
    color: ${theme.colors.primary};
    transition: background ${theme.transitionDurations.fast}
      ${theme.transitionTimingFunctions.ease};

    &:focus,
    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors['primary-alpha01']};
      outline: 0;
    }

    @media (min-width: ${theme.breakpoints[1]}) {
      display: block;
    }

    ${active &&
    css`
      color: ${theme.colors.primary};
      background: ${theme.colors['primary-alpha01']};
    `}
  `
);

const InfoButton = React.forwardRef(
  ({ active, onClick }: { onClick: () => void } & SharedProps, ref: any) => {
    return (
      <StyledInfoButton
        ref={ref}
        type="button"
        active={active}
        onClick={() => {
          if (onClick) onClick();
          // tracker.clickEvent('form-field-tooltip-toggle');
        }}
      >
        <Icon name="Info" width="20px" height="20px" />
      </StyledInfoButton>
    );
  }
);

InfoButton.displayName = 'InfoButton';

export { Info, InfoButton };
