import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
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
                'Bebas Neue', 'Do Hyeon',
            ].join(','),
        }
    },
});

export default globalTheme;