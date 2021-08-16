import globalTheme from "../global/GlobalTheme";
import Keywords, { KeywordProps } from "../components/Keywords";

const langs = `
Haskell,
Typescript,
C#,
C++,
Swift,
ObjC,
Python,
GO,
Groovy,
Ruby,
Java,
Kotlin,
Scala,
Etc
`
  .split(",")
  .map((x) => x.trim());

function FunctionalMath() {
  const keywords: KeywordProps[] = langs.map((l) => ({
    title: l,
    color: globalTheme.palette.primary.light,
  }));

  return Keywords(keywords);
}

export default FunctionalMath;
