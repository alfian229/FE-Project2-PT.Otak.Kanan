import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero hero="defaultHero">
            </Hero>
            <Banner title="Sewa In" subtitle="Sewa Ruangan Sesuai Kebutuhan Anda">
                <Link to="/rooms" className="btn btn-primary">
                    Our Rooms
                </Link>
            </Banner>
            <Services />
            <FeaturedRooms />
        </>

    )
}
