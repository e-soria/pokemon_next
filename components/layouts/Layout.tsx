import React, { ReactNode } from 'react'
import { FC } from "react"
import Head from "next/head"

import { Navbar } from '../ui'


interface Props {
  children?: ReactNode,
  title?: String
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Enzo Soria" />
            <meta name="description" content={`Información sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />

        <main>
            {children}
        </main>
    </>
  )
}
