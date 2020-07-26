import globalTheme from './GlobalTheme';
import Keywords, { KeywordProps } from './Keywords';


function Functional() {
    const keywords: KeywordProps[] = [
        { title: "Monad", color: globalTheme.palette.primary.light },
        { title: "Applicative", color: globalTheme.palette.primary.light },
        { title: "Algebraic Data Type", color: globalTheme.palette.primary.light },
        { title: "Generic Programming", color: globalTheme.palette.primary.light },
        { title: "Adjunction", color: globalTheme.palette.primary.light },
        { title: "Declarative Programming", color: globalTheme.palette.primary.light },

    ]

    return (
        Keywords(keywords)
    );
}

export default Functional;