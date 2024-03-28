import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  color: {
    bg: `#FFFFFF`,
    text: `#000000`,
    hint: `#999999`,
    link: `#2381CC`,
    btn: `#2381CC`,
    btnText: `#FFFFFF`,
    bgSecondary: `#EFEFF3`,
    success: '#62c56d',
    redAlert: '#f00',
  },
  gradient: {
    g1: 'linear-gradient(312deg, #82d3ff 0.46%, #ffa1ec 100%)',
    g2: 'linear-gradient(45deg, #fb73e0 0%, #0092e0 100%)',
  },
}

export const darkTheme: DefaultTheme = {
  color: {
    bg: `#000000`,
    text: `#FFFFFF`,
    hint: `#999999`,
    link: `#2381CC`,
    btn: `#2381CC`,
    btnText: `#FFFFFF`,
    bgSecondary: `#464646`,
    success: '#62c56d',
    redAlert: '#f00',
  },
  gradient: {
    g1: 'linear-gradient(312deg, #82d3ff 0.46%, #ffa1ec 100%)',
    g2: 'linear-gradient(45deg, #fb73e0 0%, #0092e0 100%)',
  },
}
