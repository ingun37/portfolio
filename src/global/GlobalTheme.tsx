import { createMuiTheme } from '@material-ui/core/styles';

const factor = 1.4;
const rem = (n:number)=>(n*factor).toPrecision(3) + "rem"

const globalTheme = createMuiTheme({
    typography: {
        h2: {
            fontSize: rem(1.5),
            fontFamily: [
                'Anton',
            ].join(','),
        },
        h4: {
            fontSize: rem(1),
            fontFamily: [
                'Bebas Neue',
            ].join(','),
        },
        h5: {
            fontSize: rem(0.83),
            fontFamily: [
                'Fjalla One', 'Do Hyeon',
            ].join(','),
        }
    },
});

export default globalTheme;