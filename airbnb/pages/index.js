import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, imageCardData }) {
  return (
    <div>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        
        
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5px'>Explore Nearby</h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              exploreData?.map((item, index) => (
                <SmallCard
                  key={index}
                  image={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              ))
            }
          </div>
        </section>


        <section className=''>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex gap-x-3 ml-3 overflow-x-scroll overflow-y-auto scrollbar-hide'>
            {
              imageCardData?.map((item, index) => <MediumCard key={index} image={item.img} title={item.title} />)
            }
          </div>
        </section>

        <LargeCard
        image='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
        title='The Gratest Outdoors'
        description='Wishlist curated by Airbnb'
        buttonText='Get Inspired' 
        />
      </main>
      <Footer />
    </div>
  )
}


export async function getStaticProps() {
  var exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then(
      (res) => res.json()
    ).catch((error) => {
      console.log(error)
    });

    var imageCardData = await fetch("https://www.jsonkeeper.com/b/VHHT")
    .then(
      (res) => res.json()
    ).catch((error) => {
      console.log(error)
    });

  return {
    props: {
      exploreData: exploreData?.filter(x => !(x.location == "Manchester" || x.location == "Birkenhead")),
      imageCardData
    }
  }
}