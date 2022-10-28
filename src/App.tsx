import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";


type ShowType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [show, setShow] = useState<ShowType[]>([])

    // const a = 100200
    //call back вызов
    const useShowUp = () => {
        // useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))
        // },[])
        //один раз передаем пустой массив если хотим один раз
        //следи за а
    }

    const clean = ( )=>
    {setShow([])}
    const showUp = () => {
        console.log(show)
    }

    return (
        <div className="App">
            <Button name={'Show me'} callBack={useShowUp}/>

            <Button name={`Clean me`} callBack={clean} />

            <ul>
                {show.map(el => {
                    return (
                        <li key={el.id}>
                            <span> {el.id}</span>
                            <span> {el.title}</span>
                            <span> {`${el.completed}`}</span>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default App;
