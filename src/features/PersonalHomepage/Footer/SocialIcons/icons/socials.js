import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as FacebookIcon } from "..facebook.svg";
import { ReactComponent as LinkedInIcon } from "..linkedin.svg";
import { ReactComponent as InstagramIcon } from "..instagram.svg";

export const socials = [
    {
        name: "Github",
        url: "http://github.com",
        Icon: "styleIcon(GithubIcon)",
    },
    {
        name: "Facebook",
        url: "http://facebook.com",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Linedn",
        url: "http://linkedin.com",
        Icon: "styleIcon(LinkedInIcon)",
    },
    {
        name: "Instagram",
        url: "http://instagram.com",
        Icon: "styleIcon(InstagramIcon)",
    },
]