import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const globalTheme = responsiveFontSizes(createMuiTheme({
    typography: {
        h2: {
            fontFamily: [
                'Anton',
            ].join(','),
        },
        h4: {
            fontFamily: [
                'Bebas Neue',
            ].join(','),
        },
        h5: {
            fontFamily: [
                'Fjalla One', 'Do Hyeon',
            ].join(','),
        },
        body1: {
            fontFamily: [
                'Fjalla One', 'Do Hyeon',
            ].join(','),
        }
    },
}));

export default globalTheme;