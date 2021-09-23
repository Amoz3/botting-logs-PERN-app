import React, {useContext, useEffect} from 'react'
import BotDataGetter from '../apis/BotDataGetter'
import {Context} from '../context/Context'

export const MainList = () => {

    const {BotData, setBotData} = useContext(Context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await BotDataGetter.get("/")
                setBotData(response.data)
            } catch (error) {}
        };

        fetchData();
    },[]);

    return (
        <div className="list-group">
            <table className="table table table-hover table-light table-striped table-bordered">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Username</th>
                        <th scope="col">
                            
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.osrsbestprice.com%2Fassets%2Fimages%2Fsell_1.png&f=1&nofb=1"
                             alt="gp" 
                             style={{height: 50} }/>
                        </th>
                        <th scope="col">Script</th>
                        <th scope="col">Task</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {BotData && BotData.map(el => {
                        return (
                        <tr>
                            <td>{el.username}</td>
                            <td>{el.gp}</td>
                            <td>{el.script}</td>
                            <td>{el.task}</td>
                            <td>{el.age}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}