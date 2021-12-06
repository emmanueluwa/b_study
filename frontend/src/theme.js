import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints =createBreakpoints({});

const alpha = '#2C3E50'
const beta = '#0A7ED2' 
const gamma = '#1D2730'
const delta = '#EDEDED'
const alert = '#FD5959'
const contrast = '#E84188'
const elements = '#C4C4C4'
const light = '#FFF'
const skills = '#e1e1e1'

const amber = '#ffc107'
const amberbg = '#fff8e1'

export default createTheme({
  typography: {
    fontFamily: 'OpenSans-Regular'
  },
  palette: {
    primary: {
      main: `${amber}`,
    },
    secondary: {
      main: `${amberbg}`,
    },
    error: {
      main: `${alert}`
    },
    common: {
      alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
      amber: `${amber}`,
      amberbg: `${amberbg}`,
    },
    background: {
      default: `${amberbg}`,
    }
  },
  fonts: {
    bold: {
      fontFamily: 'OpenSans-Bold',
    },
    extraBold:{
      fontFamily: 'OpenSans-extraBold'
    },
    light: {
      fontFamily: 'OpenSans-Light',
    }
  },
  container: {
    width: '900px',
    margin: '0 auto',
    [breakpoints.down('sm')]: {
      width: '100%',
    }
  }
});