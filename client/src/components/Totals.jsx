import React, {useContext, useEffect} from 'react'
import { Context } from '../context/Context'
import BotDataGetter from '../apis/BotDataGetter'

export const Totals = () => {

    const {TotalsData, setTotalsData} = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await BotDataGetter.get("/totalgp")
                setTotalsData(response.data)
            } catch (error) {}
        };

        fetchData();
    },[]);

    return (
        <div className="div h-100 row align-items-center">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.osrsbestprice.com%2Fassets%2Fimages%2Fsell_1.png&f=1&nofb=1"
                alt="gp"
                style={{ height: 50 }} />
                {TotalsData && TotalsData.map(el => <h1> {el.totalgp}</h1>)}
        </div>
    )

}