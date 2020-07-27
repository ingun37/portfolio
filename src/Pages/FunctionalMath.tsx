import globalTheme from '../global/GlobalTheme';
import Keywords, { KeywordProps } from '../components/Keywords';


function FunctionalMath() {
    const keywords: KeywordProps[] = [
        { title: "Functor", color: globalTheme.palette.primary.light },
        { title: "Applicative", color: globalTheme.palette.primary.light },
        { title: "Monad", color: globalTheme.palette.primary.light },
        { title: "Adjunction", color: globalTheme.palette.primary.light },
    ]

    return (
        Keywords(keywords)
    );
}

export default FunctionalMath;