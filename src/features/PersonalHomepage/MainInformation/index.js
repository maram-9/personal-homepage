import myPhoto from "./images/profile.jpg";
import { About, Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={myPhoto} alt="Marzena Malka" />
        <About>
            <ThisIs>This is</ThisIs>
            <Name>Marzena Malka</Name>
            <Summary>
            👧💻 I am an enthusiastic Junior Frontend Developer who is looking for development opportunities.
            I love to learn new things and expand my horizons. I want impove my skills. 
            </Summary>
            <StyledButtonLink 
                href={`mailto:${email}`} 
                title={email} 
                rel="noopener noreferrer">
                <ButtonIcon />
                Hire Me
            </StyledButtonLink>
        </About>
    </Wrapper>
);
