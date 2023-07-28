import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Tab, Tabs, useTheme, useMediaQuery } from '@mui/material'
import Selector from './molecule/Selector'
import SearchIcon from '@mui/icons-material/Search'
import PrimaryButton from './atom/PrimaryButton'
import { useEstateDetails } from '../store/database'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { uniqueCities, uniqueTypeOfEstate } from '../utils/selectOptions'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 1,
            width: isMd ? 'auto' : '800px',
            display: 'flex',
            flexDirection: isMd ? 'column' : 'row',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            borderTopRightRadius: isSm ? 0 : '15px',
          }}
        >
          <>{children}</>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index: number) {
  return {
    id: `indicator-${index}`,
    'aria-controls': `indicator-${index}`,
  }
}

export default function BasicTabs() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const [operationTab, setOperationTab] = useState(0) //seteo de valores para definir la pestaña de operaciones (compra o alquiler) en el buscador principal. 0 es compra, 1 es alquiler.
  let operation = ''

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setOperationTab(newValue)
    console.log(`value: ${newValue}`)
  }

  useEffect(() => {
    setOperationTab(0)
  }, [])

  const tabArray = [
    {
      label: 'COMPRAR',
      index: 0,
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '0px',
    },
    {
      label: 'ALQUILAR',
      index: 1,
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '15px',
    },
  ]
  const [searchZoneParams, setSearchZoneParams] = useState<string[]>([])
  const [searchEstateParams, setSearchEstateParams] = useState<string[]>([])
  const handleClick = () => {
    if (operationTab === 0) operation = 'for_sale'
    else operation = 'for_rent'
    if (searchEstateParams.length === 0 || searchZoneParams.length === 0) {
      enqueueSnackbar('¡Debes elegir zona y tipo de propiedad!', {
        variant: 'error',
      })
      return
    }
    navigate(
      `/search/?operation=${operation}&type=${searchEstateParams.join(
        ','
      )}&city=${searchZoneParams.join(',')}`
    )
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        maxWidth: '800px',
      }}
    >
      <Tabs
        value={operationTab}
        onChange={handleChange}
        aria-label="indicator example"
        TabIndicatorProps={{
          title: 'indicator',
          hidden: true,
        }}
        sx={{
          paddingX: 0,
          '& button': { color: 'white' },
          '& button:focus': {
            backgroundColor: '#f1f1f9',
            color: '#1daeff',
          },
          '& button.Mui-selected': {
            backgroundColor: '#f1f1f9',
            color: '#1daeff',
          },
        }}
      >
        {tabArray.map((tab) => (
          <Tab
            key={tab.index}
            label={tab.label}
            wrapped
            sx={{
              fontSize: isSm ? '0.8rem' : '1rem',
              padding: '0.50rem 0.75rem',
              borderTopLeftRadius: tab.borderTopLeftRadius,
              borderTopRightRadius: tab.borderTopRightRadius,
              background: '#b5aeae',
            }}
            {...a11yProps(tab.index)}
          />
        ))}
      </Tabs>
      {tabArray.map((tab) => (
        <TabPanel key={tab.index} value={operationTab} index={tab.index}>
          <Selector
            longPlaceholder="Selecciona tus zonas de preferencia"
            shortPlaceholder="Zonas de preferencia"
            label="Ubicación"
            selectOptions={uniqueCities}
            setSearchParams={setSearchZoneParams}
          />
          <Selector
            longPlaceholder="Selecciona tus viviendas de preferencia"
            shortPlaceholder="Viviendas de preferencia"
            label="Tipo de propiedad"
            selectOptions={uniqueTypeOfEstate}
            setSearchParams={setSearchEstateParams}
          />
          <PrimaryButton
            text="Buscar"
            aria-label="Buscar propiedad"
            icon={<SearchIcon />}
            textDisplay={{ xs: 'flex', md: 'none' }}
            sx={{
              margin: '1rem auto',
              padding: { xs: '0.5rem 1rem', md: '6px 12px' },
              width: { xs: '260px', sm: '350px', md: '20px' },
            }}
            onClick={handleClick}
          />
        </TabPanel>
      ))}
    </Box>
  )
}
