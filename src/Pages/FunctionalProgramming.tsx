import globalTheme from "../global/GlobalTheme";
import Keywords, { KeywordProps } from "../components/Keywords";

function FunctionalProgramming() {
  const keywords: KeywordProps[] = [
    {
      title: "Functional Programming",
      color: globalTheme.palette.primary.light,
    },

    { title: "Reactive Programming", color: globalTheme.palette.primary.light },
    { title: "Flux Architecture", color: globalTheme.palette.primary.light },
    { title: "Generic Programming", color: globalTheme.palette.primary.light },
    {
      title: "Imperative/Declarative Programming",
      color: globalTheme.palette.primary.light,
    },
    { title: "Algebraic Data Type", color: globalTheme.palette.primary.light },
    { title: "RAII", color: globalTheme.palette.primary.light },
  ];

  return Keywords(keywords);
}

export default FunctionalProgramming;
