import { FC } from "react";
import { smallPokemon } from "../../interfaces"
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props {
    pokemon: smallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const onclick = ()=>{
        router.push(`pokemon/${pokemon.id}`)
    }

    return (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <Card 
                isHoverable 
                isPressable
                onClick={onclick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width='100%' height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                        <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
