import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"

interface Props{
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({id,name}) => {

  const router = useRouter();

  return (
    <Layout>
        <h1>#{id} {name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  //const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=121')
  return {
    props: {
      id:  1,
      name: 'bulbasor'
    }
  }
}

export default PokemonPage