import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


/**
 * @param px input px as per 1920 * 1080 resolution
 */
export const pxToRem = (px) => {
    return `${px}px`;
};

export default createMuiTheme({
    palette: {
        primary: {
            main: '#FFA400',
            light: '#FFBC44',
            dark: 'rgb(93,175,240,0.2)',
            hover: '#FFBC44'
        },
        secondary: {
            main: '#004987'
        },
        error: {
            main: '#FF7E7E'
        },
        common: {
            white: "#FFFFFF",
            black: "rgb(0,0,0)"
        },
        text: {
            // primary: '#FFFFFF',
            // secondary: "#5DAAE0"
        },
        divider: "rgb(255,255,255,0.5)",
        grey: {
            50: "rgb(255,255,255,0.5)",
            100: "rgb(255,255,255,0.65)",
            200: "rgb(255,255,255,0.85)",
            300: "rgb(255,255,255)",
            400: "rgb(0,0,0,0.5)",
            500: "rgb(0,0,0,0.65)",
            600: "rgb(0,0,0,0.85)",

        },
        background: {
            main: 'radial-gradient(#58687E, #39495E)',
            paper: '#273D49',
            default: 'rgba(39, 61, 73, .75)',
        },
        cardBackground: {
            main: 'rgba(39, 61, 73, .75)',
            color: '#FFFFFF'
        },
        solidBackground: {
            main: '#273D49'
        },
        chatHeadBackground: {
            main: '#FC7500',
            color: '#FFFFFF'
        },
        chatWindowBackground: {
            main: '#39495E'
        },
        popOver: {
            main: '#273d49'
        }
    },
    shadows: [
        'none',
        '0px 3px 6px rgba(0,0,0,.20)'
    ],
    spacing: {
        unit: 4
    },
    typography: {
        useNextVariants: true,
        h1: {
            fontSize: pxToRem(50)
        },
        //used MWB
        h2: {
            fontSize: pxToRem(40),
            color: "#5DAAE0",
            lineHeight: '2.05rem'

        },
        //used
        h3: {
            fontSize: pxToRem(30),

        },
        h4: {
            fontSize: pxToRem(26),
        },
        //used
        h5: {
            fontSize: pxToRem(24),
            color: "rgb(255,255,255,0.65)",
            lineHeight: "normal"
        },
        h6: {
            fontSize: pxToRem(22),
        },
        //used MWD 
        subtitle1: {
            fontSize: pxToRem(20),
            color: "#000000",
            lineHeight: "normal"
        },
        //used call prep 
        subtitle2: {
            fontSize: pxToRem(17),
            color: "#003A64",
        },
        body1: {
            fontSize: pxToRem(12),
            color: "#000000",
        },
        //used call prep
        body2: {
            fontSize: pxToRem(20),
            color: "rgb(255,255,255,0.65)",
            lineHeight: "normal"


        },
        caption: {
            fontSize: pxToRem(16),
            color: "#FFFFFF"

        },
        overline: {
            fontSize: pxToRem(14),
            color: "#FFFFFF"
        },

        fontFamily: "'Roboto'"

    },
    status: {
        // My business variables
        safe: '#5FC32C',
        safe2: "#CFFFB5",
        warning: "#FF8888"
    },

    overrides: {
        MuiFormLabel: {
            root: {
                "&$focused": {
                    color: "#F7B500 !important",
                    fontWeight: "bold"
                }
            },

            focused: {}
        },
        MuiInput: {
            underline: {
                '&:after': {
                    backgroundColor: '#F7B500',
                }
            },
        },
        MuiIconButton: {
            root: {
                color: 'white'
            },
            // disabled: {
            //   color: "red"
            //}
        },
        MuiPickersToolbar: {
            toolbar: {
                // backgroundColor: blue.A200,
                // height: '13vh'
            }
        },

        MuiFormHelperText: {
            error: {
                color: '#FF7E7E !important',
                // marginBottom: '.8vh'
            }
        },
        MuiPickersModal: {
            dialogAction: {
                // color: blue['400']
            }
        }
    }

});
