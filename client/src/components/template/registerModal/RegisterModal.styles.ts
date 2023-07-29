// export const stylesRegisterModal = {
//   modal: {
//     display: 'flex',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   box: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     pl: 2,
//   },
//   box2: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     mt: 3,
//     height: '50%',
//   },
//   box3: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '95%',
//   },
//   text: {
//     fontSize: '1.5rem',
//     padding: '0.5rem 0.25rem',
//   },
//   text2: {
//     margin: '0.5rem 0.5rem 0.25rem',
//     maxWidth: '500px',
//     textAlign: 'center',
//     lineHeight: '1.5',
//   },
//   helperText: {
//     marginTop: '0.50rem',
//     marginBottom: '0.50rem',
//     marginLeft: '6px',
//     fontWeight: 'bold',
//     color: 'black',
//     fontSize: '1rem',
//   },
//   labelError: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'baseline',
//   },
// }
export const stylesRegisterModal = {
  container: {
    marginTop: '14rem',
    minHeight: '80vh',
    maxWidth: '1200px',
    marginBottom: '4rem',
  },
  item: {
    display: {
      xs: 'none',
      md: 'flex',
    },
  },
  gridBox: {
    height: '90%',
    width: {
      xs: '300px',
      md: '800px',
      lg: '1000px',
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
    boxShadow: '2px 6px 12px grey',
  },
  box2: {
    display: {
      xs: 'none',
      md: 'flex',
    },
    alignItems: 'flex-start',
  },
  box3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
  },
  boxForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 2,
  },
  text: {
    fontSize: '1.5rem',
    paddingBottom: '0.75rem',
  },
  text2: {
    fontSize: '1.2rem',
    margin: '0.5rem 0.5rem 0.25rem',
    maxWidth: '500px',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  textSmall: {
    padding: '1rem 0.75rem',
    textAlign: 'center',
    lineHeight: '1.5',
    maxWidth: '600px',
  },
  rootFormControl: {
    width: '90%',
    maxWidth: '580px',
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
    minWidth: '238px',
  },
  labelError: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
}
