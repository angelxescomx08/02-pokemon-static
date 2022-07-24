import { FC } from "react";

import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props{
    id: number;
}

export const FavoriteCardPokemon: FC <Props>= ({id}) => {

    const router = useRouter();

    const handleClick = () =>{
        router.push(`pokemon/${id}`);
    }

    return (
        <Grid xs={6} sm={3} xl={1} key={id} onClick={handleClick}>
            <Card isHoverable={true} isPressable={true} css={{
                padding: 10
            }}>
                <Card.Image
                    width={'100%'}
                    height={140}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
            </Card>
        </Grid>
    )
}
