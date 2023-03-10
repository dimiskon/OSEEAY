import React from 'react'

import { Paper, Button } from '@mui/material';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const FormFooter = () => {
  return (
    <Paper variant='filled' sx={{
      display: 'flex',
      justifyContent: 'center',
      mt: 2,
      height: '65px',
      borderRadius: '2px',
      bgcolor: '#d9d9d96b'
    }}>

      <Button variant='contained' color='success' sx={{ p: 4, m: 1 }}
        startIcon={<SaveAsIcon/>}
      >
        Save
      </Button>
    </Paper>
  )
}

export default FormFooter;