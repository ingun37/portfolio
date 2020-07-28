import globalTheme from '../global/GlobalTheme';
import Keywords, { KeywordProps } from '../components/Keywords';


export function Intro() {
    const keywords: KeywordProps[] = [
        { title: "FullStack/Game/Application Developer", color: globalTheme.palette.primary.light },
        { title: "CI Developer", color: globalTheme.palette.primary.light },
        { title: "Functional Programmer", color: globalTheme.palette.primary.light },
        { title: "Mathematics Enthusiast", color: globalTheme.palette.primary.light },
        { title: "Authentic Painter", color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)

    );
}
