import globalTheme from '../global/GlobalTheme';
import Keywords, { KeywordProps } from '../components/Keywords';


function MathAreas() {
    const keywords: KeywordProps[] = [
        { title: "Category Theory", color: globalTheme.palette.primary.light },
        { title: "Abstract Algebra", color: globalTheme.palette.primary.light },
        { title: "Linear Algebra", color: globalTheme.palette.primary.light },
        { title: "Topology", color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)
    );
}

export default MathAreas;