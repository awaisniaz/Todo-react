import React, { useState, useEffect } from 'react'
import { Input, Button, Checkbox, DatePicker } from 'antd';
import moment from 'moment'
import './styles.scss'
import 'antd/dist/antd.css';
import { saveData, getTodo } from '../../libs/index'

function Inputcontainer() {
    const [card, setcard] = useState([])
    const [input, setInput] = useState(null)
    const [date, setDate] = useState(null)
    const addTask = () => {
        saveData(input, date)
        setcard([...card, { task: input, date: date }])
    }

    useEffect(() => {
        const response = getTodo()
        
        setcard([...card, response])
    }, [input])
    return (
        <>
            <div className="input-container">
                <div className="data-field">
                    <Input placeholder="Enter your Task"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        size="large" ></Input>
                    <DatePicker
                        onChange={(date) => {
                            setDate(moment(date).format('DD/MM/YYYY'))
                        }} />
                </div>
                <Button
                    type="primary"
                    onClick={() => {
                        addTask()
                    }}
                    className={`${input === null ? 'disable' : ''}`}
                >Add Task</Button>
            </div>
            <div className="card-dialog">
                {
                    (card || []).map(item => {
                        return <div className="card-body" >
                            <Checkbox />
                            <p>{item.task}</p>
                            <p>{item.date}</p>
                        </div>
                    }
                    )
                }

            </div>
        </>
    );
}
export default Inputcontainer
