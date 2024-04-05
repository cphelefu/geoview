import { Theme } from '@mui/material/styles';

export const getSxClasses = (theme: Theme) => ({
 
  rightGridContent: {
    border: `2px solid ${theme.palette.geoViewColor.primary.main}`,
    borderRadius: '5px',
    backgroundColor: theme.palette.geoViewColor.white,
    width: '100%', 
    overflow: 'auto',
    maxHeight: '600px',

    '&.is-fullscreen': {
      paddingTop: '20px',
      maxHeight: 'unset',
    },

    '& .MuiTableContainer-root': {
      maxHeight: 'unset',
    }
  },

});