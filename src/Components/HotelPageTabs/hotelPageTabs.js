import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function HotelPageTabs() {
  const [value, setValue] = React.useState('Overview')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className='hotel-tabs mt-4'>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          textColor='secondary'
          indicatorColor='secondary'
          scrollButtons
          aria-label='visible arrows tabs example'
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.9 },
            },
          }}
        >
          <Tab value='Overview' label='Overview' href='#hotel-description' />
          <Tab value='Room-Type' label='Room Type' href='#room-Type-Selector' />
          <Tab value='Facilities' label='Facilities' href='#hotel-facilities' />
          <Tab value='Reviews' label='Reviews' href='#hotel-review' />
          <Tab value='Location' label='Location' href='#hotel-location' />
        </Tabs>
      </Box>
    </div>
  )
}
