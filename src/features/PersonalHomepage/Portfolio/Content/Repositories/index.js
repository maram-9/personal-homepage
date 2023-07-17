import { Description, Tile, Link, Links, LinksRow, List, Name, LinksValue } from "./styled";

export const Repositories = ({ repositories }) => (
    <List>
        {repositories.map(({ id, name, description, homepage, html_url }) => (
            <Tile key={id}>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Links>
                    {!!homepage && (
                        <LinksRow>
                            <dt>Demo:</dt>
                            <LinksValue>
                            <Link href={homepage} target="_blank" rel="noreferrer noopener">{homepage}
                            </Link>
                            </LinksValue>
                        </LinksRow>
                    )}
                    <LinksRow>
                        <dt>Code:</dt>
                        <LinksValue>
                        <Link href={html_url} target="_blank" rel="noreferrer noopener">{html_url}
                        </Link>
                        </LinksValue>
                    </LinksRow>
                </Links>
            </Tile>
        ))}
    </List>
);