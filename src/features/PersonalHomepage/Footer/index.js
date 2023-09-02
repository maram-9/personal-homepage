import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragrah, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`} title={email} rel="noopener noreferrer">{email}</EmailLink>
            </EmailWrapper>
            <Paragrah>
            I am always open to a new project and very excited about the opportunity to be considered for a new role. If you have a&nbsp;website, dashboard or mobile app in mind and need some help to&nbsp;make your ideas come to life, feel free to contact me.🤞
            </Paragrah>
            <SocialIcons />
        </Address>
    </Wrapper>
);