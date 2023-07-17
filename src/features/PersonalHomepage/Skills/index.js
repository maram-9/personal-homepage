import { StyledHeader, Item, List, Section, Bullet } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyledHeader>{title}</StyledHeader>
        <List>
            {skills.map((skill) => (
                <Item kex={skill}>
                    <Bullet />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);