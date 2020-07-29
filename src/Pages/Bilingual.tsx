import toefl from "../images/toefl.svg";
import {ProjectCards, ProjectProp} from "../components/ProjectCards";

function Bilingual() {
    const games: ProjectProp[] = [
        new ProjectProp("Toefl Score", toefl, null, null, "MyBestScore 102/120"),
    ];
    return (
        ProjectCards(games)
    );
}

export default Bilingual;