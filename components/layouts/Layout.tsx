import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar';

interface Props {
    children: JSX.Element,
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon app'}</title>
                <meta name="author" content="Jose Angel Hdz Rda"></meta>
                <meta name="description" content={`Información sobre el pokemon ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
                 
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
