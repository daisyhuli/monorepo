import { Box, Button, ButtonProps, Collapse } from '@mui/material';
import { FC, useMemo, useRef } from 'react';

interface IFButtonProps extends ButtonProps {
  leftArrow?: boolean;
  rightArrow?: boolean;
  cancel?: boolean;
}

export const FButton: FC<IFButtonProps> = (props) => {
  const { leftArrow, rightArrow, cancel, children, sx = {}, ...rest } = props;
  const hoverRef = useRef<HTMLButtonElement>(null);

  const startIcon = leftArrow ? (
    <Collapse orientation="horizontal" timeout={300}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span>click</span>
      </Box>
    </Collapse>
  ) : (
    rest.startIcon
  );
  const rightIcon = rightArrow ? (
    <Collapse
      orientation="horizontal"
      timeout={300}
      sx={{ transform: 'rotate(180deg)' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span>click</span>
      </Box>
    </Collapse>
  ) : (
    rest.endIcon
  );

  const variant = useMemo(() => {
    if (rest.variant && !cancel) {
      switch (rest.variant) {
        case 'contained':
          return 'outlined';
        case 'outlined':
          return 'contained';
        default:
          return rest.variant;
      }
    } else if (!cancel) {
      return rest.variant;
    } else {
      return undefined;
    }
  }, [cancel, rest.variant]);

  return (
    <Button
      ref={hoverRef}
      {...rest}
      color={rest.color}
      startIcon={startIcon}
      endIcon={rightIcon}
      variant={variant}
      sx={{
        px: '16px',
        boxShadow: 'none',
        borderColor: cancel ? 'grey.500' : `${rest.color}.main`,
        ...(cancel && { backgroundColor: 'tertiary.light' }),
        '&:hover': {
          borderColor: cancel ? 'grey.500' : `${rest.color}.main`,
          ...(rest.variant === 'outlined' &&
            !cancel && { backgroundColor: `${rest.color}.main`, py: '5px' }),
          ...(cancel && { backgroundColor: 'tertiary.dark' }),
        },
        '&:disabled': {
          ...(rest.variant === 'outlined' &&
            !cancel && {
              color: `${rest.color}.main`,
              backgroundColor: `background.default`,
              borderColor: `${rest.color}.main`,
            }),
          ...(rest.variant === 'contained' && {
            color: `${rest.color}.contrastText`,
            backgroundColor: `${rest.color}.main`,
          }),
          opacity: 0.4,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default FButton;
