// Specific for a personal project called FinishProbation.

interface ColorGrouping {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
  text: string;
  disabled: string;
  hoverOver: string;
}

export interface Palette {
  type: 'normal' | 'dark';
  defaultText: string;
  contrastText: string;
  subtext: string;

  // Color Groupings
  primary: ColorGrouping;
  secondary: ColorGrouping;

  error: ColorGrouping;
  warning: ColorGrouping;
  info: ColorGrouping;
  success: ColorGrouping;

  // Random Color
  common: {
    [key: string]: string;
  };
}

export default {
  type: 'normal',
  defaultText: '#fff',
  contrastText: '#191919',
  subtext: '#d3d3d3',

  primary: {
    light: '',
    main: '#0DA1FC',
    dark: '#117afd',
    contrastText: '',
    text: '',
    disabled: '#708ea0',
    hoverOver: '',
  },
  // Use `warning` for secondary
  secondary: {
    light: '',
    main: '',
    dark: '',
    contrastText: '',
    text: '',
    disabled: '',
    hoverOver: '',
  },
  error: {
    light: '',
    main: '#ff0051',
    dark: '',
    contrastText: '',
    text: '#EB5050',
    disabled: '',
    hoverOver: '',
  },

  common: {
    white: '#fff',
    black: '#000',
    gray: '#d3d3d3',
    darkGray: '#303030',
    midnight: '#191919',
    phone: '#3c3c3c',
    purple: '#9e00ff',
  },

  // Reserved for theme architecture reference
  warning: {
    light: '#ffd73e',
    main: '#ffca00',
    dark: '',
    contrastText: '',
    text: '',
    disabled: '',
    hoverOver: '',
  },
  info: {
    light: '',
    main: '',
    dark: '',
    contrastText: '',
    text: '',
    disabled: '',
    hoverOver: '',
  },
  success: {
    light: '',
    main: '#4bff73',
    dark: '',
    contrastText: '',
    text: '',
    disabled: '',
    hoverOver: '',
  },
} as Palette;
