import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Box,
  Divider,
  Tab,
  Tabs,
  useTheme, 
  useMediaQuery
} from '@mui/material'
import Selector from './molecule/Selector'
import SearchIcon from '@mui/icons-material/Search'
import { City, Type } from '../model/estate-detail'
import PrimaryButton from './atom/PrimaryButton'


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
      hidden={ value !== index }
      id={ `tabpanel-${ index }` }
      aria-labelledby={ `tab-${ index }` }
      { ...other }
    >
      { value === index && (
        <Box
          sx={ {
            p: 1,
            width: isMd ? 'auto' : '800px',
            display: 'flex',
            flexDirection: isMd ? 'column' : 'row',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            borderTopRightRadius: isSm ? 0 : '15px',
          } }
        >
          <>{ children }</>
        </Box>
      ) }
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
    id: `indicator-${ index }`,
    'aria-controls': `indicator-${ index }`,
  }
}

export default function BasicTabs() {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(0)
  

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
    console.log(`value: ${ newValue }`)
  }

  useEffect(() => {
    setValue(0)
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
    }
  ]

  const locationArray: City[] = [
    City.agromonia,
    City.almagro,
    City.balvanera,
    City.barracas,
    City.belgrano,
    City.boedo,
    City.caballito,
    City.palermo,
    City.villaUrquiza,
  ]

  const estatesArray: Type[] = [
    Type.casa,
    Type.departamento,
    Type.ph
  ]
  
  return (
    <Box
      sx={ {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        maxWidth: '800px',
      } }
    >
      <Tabs
        value={ value }
        onChange={ handleChange }
        aria-label="indicator example"
        TabIndicatorProps={ {
          title: 'indicator',
          hidden: true,
        } }
        sx={ {
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
        } }
      >
        { tabArray.map((tab) => (
          <Tab
            key={ tab.index }
            label={ tab.label }
            wrapped
            sx={ {
              fontSize: isSm ? '0.8rem' : '1rem',
              padding: '0.50rem 0.75rem',
              borderTopLeftRadius: tab.borderTopLeftRadius,
              borderTopRightRadius: tab.borderTopRightRadius,
              background: '#b5aeae'
            } }
            { ...a11yProps(tab.index) }
          />
        )) }
      </Tabs>
      { tabArray.map((tab) => (
        <TabPanel key={ tab.index } value={ value } index={ tab.index }>
          <Selector
            longPlaceholder="Selecciona tus zonas de preferencia"
            shortPlaceholder="Zonas de preferencia"
            label="Ubicación"
            selectOptions={ locationArray }
          />
          <Divider />
          <Selector
            longPlaceholder="Selecciona tus viviendas de preferencia"
            shortPlaceholder="Viviendas de preferencia"
            label="Tipo de propiedad"
            selectOptions={ estatesArray }
          />
          <IconButton
            sx={ {
              backgroundColor: { xs: 'transparent', md: 'blue' },
              color: 'white',
              borderRadius: 3,
              height: '50px',
              width: isMd ? '70%' : '50px',
              margin: '1rem 0rem'
            } }
          >
            { isMd ? (
              <PrimaryButton
                text='Buscar'
                sx={ {
                  display: 'inline-block',
                  width: '100%',
                } }
              />
            ) : (
              <SearchIcon />
            ) }
          </IconButton>
        </TabPanel>
      )) }
    </Box>
  )
}
