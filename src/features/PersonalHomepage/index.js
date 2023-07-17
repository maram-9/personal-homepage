import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import { skills, nextSkills } from "./Skills/skillsList";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import toolsIcon from "./toolsIcon.png";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />
            <Skills title={(
                <>
                My skillset includes <Icon src={toolsIcon} alt="" />
                </>
            )}
            skills={skills}
            />

            <Skills title={(
                <>
                What I want to learn next 🚀</>
            )}
            skills={nextSkills}
            />

            <Portfolio />
        <Footer />
    </Container>
);