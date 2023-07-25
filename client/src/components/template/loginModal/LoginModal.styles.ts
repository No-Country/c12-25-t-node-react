export const stylesLoginModal = {
  container: {
    marginTop: '14rem',
    minHeight: '80vh',
    maxWidth: '1200px',
    marginBottom: '4rem'
  },
  item: {
    display:
    {
      xs: 'none',
      md: 'flex'
    }
  },
  gridBox: {
    height: '90%',
    width: {
      xs: '300px',
      md: '800px',
      lg: '1000px'
    },
    borderRadius: 3,
  },
  box1: {
    backgroundColor: 'white',
    minHeight: '460px',
    width: { xs: '95%', sm: '80%', md: '90%' },
    margin: '0.25rem auto',
    padding: '0.75rem 0.75rem 2rem',
    borderRadius: 3,
    boxShadow: '2px 6px 12px grey'
  },
  box2: {
    display: {
      xs: 'none',
      md: 'flex'
    },
    alignItems: 'flex-start'
  },
  boxForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 2,
  },
  text: {
    fontSize: '1.5rem',
    paddingBottom: '0.75rem'
  },
  textSmall: {
    padding: '1rem 0.75rem',
    textAlign: 'center',
    lineHeight: '1.5',
    maxWidth: '600px'
  },
  rootFormControl: { 
    width: '90%', 
    maxWidth: '580px' 
  },
  formHelperText: {
    mt: 3,
    mb: 1,
    mx: 0,
    fontWeight: 'bold',
    color: 'black',
    fontSize: '1rem',
  },
  btn: {
    m: 2,
    padding: '1rem',
    borderRadius: '16px',
    minWidth: '238px'
  }
}