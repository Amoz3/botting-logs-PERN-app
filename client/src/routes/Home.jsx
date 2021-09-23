import React from 'react'
import { Header } from '../components/Header'
import { MainList } from '../components/MainList'
import { Totals } from '../components/Totals'

export const Home = () => {
    return (
        <div>
            <Header/>
            {/* <Totals/> */}
            <MainList/>
        </div>
    )
}