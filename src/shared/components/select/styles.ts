import colors from 'styles/variables';

export const styles = {
  select: {
    width: '100%',
    maxWidth: '100%'
  },
  icon: {
    '& .MuiSelect-icon': {
      top: '18px',
    },
  },
  selectPaper: {
    PaperProps: {
      sx: {
        marginTop: '10px',
        border: `1px solid ${colors.borderSelect}`,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
        '& .MuiMenu-list': {
          borderRadius: '20px',
          padding: '0',
          '& .MuiMenuItem-root': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 14px 14px 14px',
            color: colors.surfaceColor,
            fontWeight: '400',
            fontSize: '12px',
            background: colors.white,
            '&:hover': {
              color: colors.hoverSelect,
              background: colors.white,
              fontWeight: '700',
            },
            '&:last-of-type': {
              paddingBottom: '0px',
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '0.5px',
                background: 'white',
                marginTop: '14px',
              }
            },
            '&:first-of-type': {
              paddingTop: '14px',
            },
            '&.Mui-selected': {
              color: colors.hoverSelect,
              background: colors.white,
              fontWeight: 700,
              fontSize: '12px',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '100%',
              height: '0.5px',
              background: colors.colorBorderTable,
              marginTop: '14px',
            }
          },
        },
      },
    },
  }
};
