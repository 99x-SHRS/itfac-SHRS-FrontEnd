import * as React from 'react'
import TextField from '@mui/material/TextField'
import DateRangePicker from '@mui/lab/DateRangePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'

const DatepickerModal = ({ setDateRange }) => {
  const today = new Date()
  const [dateRange, setDateRanges] = React.useState([today, today])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={dateRange}
        onChange={(newValue) => {
          setDateRange(newValue)
          setDateRanges(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}

export default DatepickerModal
