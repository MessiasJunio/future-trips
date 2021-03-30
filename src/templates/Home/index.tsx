import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Future Trips"
        description="A simple project to show in a map the places that I want go and show more informations and photos when clicked."
        canonical="https://future-trips.vercel.app"
        openGraph={{
          url: 'https://future-trips.vercel.app',
          title: 'Future Trips',
          description:
            'A simple project to show in a map the places that I want go and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://future-trips.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
