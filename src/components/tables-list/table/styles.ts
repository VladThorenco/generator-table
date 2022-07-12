import colors from 'styles/variables';

export const styles = {
  containerTable: {
    boxShadow: 'none',
  },
  tableHead: {
    background: colors.darkBlue,
  },
  tableCell: {
    lineHeight: '0',
    fontSize: '12px',
    borderBottom: 'none',
    padding: '15px 12px',
  },
  tableCellBody: {
    lineHeight: '14px',
    fontSize: '0',
    borderBottom: 'none',
    padding: '6px 12px',
    borderRight: `1px solid ${colors.colorBorderTable}`,
    boxShadow: `0px 1px 0px ${colors.colorBorderTable}`,
  },
  tableCellText: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '0',
    color: colors.white,
    opacity: 0.5
  },
  wrapperTableActions: {
    width: '100%',
    gap: '5px',
    display: 'flex',
    justifyContent: 'space-around'
  },
  actionsEdit: {
    cursor: 'pointer',
    textDecorationLine: 'underline',
    color: colors.actionEdit,
  },
  actionsDelete: {
    cursor: 'pointer',
    textDecorationLine: 'underline',
    color: colors.actionDelete,
  },
  clearLastBorder: {
    '.MuiTableCell-root:last-child': {
      borderRight: 'none',
    }
  }
};
