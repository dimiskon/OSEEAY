import React from 'react'

import { Paper, Button, Typography } from '@mui/material';
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
      <Button
        type='submit'
        variant='contained'
        color='success'
        fullWidth
        sx={{ p: 3, m: 1 }}
        startIcon={
          <SaveAsIcon style={{ fontSize: '1.7rem' }}/>
        }>
        <Typography fontSize='1.5rem' fontWeight='bold' >Save</Typography>
      </Button>
    </Paper>
  )
}

export default FormFooter;