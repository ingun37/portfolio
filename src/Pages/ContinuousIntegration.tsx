import React from 'react'

import globalTheme from '../global/GlobalTheme';
import Keywords, { KeywordProps } from '../components/Keywords';
import { Box, Typography } from '@material-ui/core';


function ContinuousIntegration() {
    const span = (title: string) => (<span style={{ color:'lightcoral' }}>{title}</span>);


    const title1 = (
        <Box>Capable of setting up virtual environment using {span('Nix')} & {span('Docker')}</Box>
    );
    const title2 = (
        <Box>Knowledgeable in {span('Windows')}/{span('Linux')}/{span('MacOS')} and their shells</Box>
    );
    const title3 = (
        <Box>{span('Jenkins')}/{span('Gradle')} developer</Box>
    );
    const title4 = (
        <Box>Knowledgeable in {span('Xcode')}/{span('Unity3D')} settings</Box>
    );
    const keywords: KeywordProps[] = [
        { title: title1, color: globalTheme.palette.primary.light },
        { title: title2, color: globalTheme.palette.primary.light },
        { title: title3, color: globalTheme.palette.primary.light },
        { title: title4, color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)
    );
}

export default ContinuousIntegration;