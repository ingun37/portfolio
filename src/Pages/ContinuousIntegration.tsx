import globalTheme from '../global/GlobalTheme';
import Keywords, { KeywordProps } from '../components/Keywords';


function ContinuousIntegration() {
    const keywords: KeywordProps[] = [
        { title: "Capable of setting up virtual environment using Nix & Docker", color: globalTheme.palette.primary.light },
        { title: "Knowledgeable in Windows/Linux/MacOS and their shells", color: globalTheme.palette.primary.light },
        { title: "Jenkins/Gradle developer", color: globalTheme.palette.primary.light },
        { title: "Knowledgeable in Xcode/Unity3D settings", color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)
    );
}

export default ContinuousIntegration;