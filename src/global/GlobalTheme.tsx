import { createMuiTheme } from '@material-ui/core/styles';
import { floor } from 'lodash';

const factor = 1.4;
const remNum = (n:number)=> floor(n*factor, 2)
const rem = (n:number)=>`${remNum(n)}rem`

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
        },
        body1: {
            fontSize: rem(0.83),
            fontFamily: [
                'Fjalla One', 'Do Hyeon',
            ].join(','),
        }
    },
});

export default globalTheme;