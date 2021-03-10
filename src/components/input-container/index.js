import React, { useState } from 'react'
import { Input, Button, Card, DatePicker } from 'antd';
import moment from 'moment'
import './styles.scss'
import 'antd/dist/antd.css';

function Inputcontainer() {
    const [card, setcard] = useState([])
    const [input, setInput] = useState('')
    const [date, setDate] = useState()
    const addTask = () => {
        const newTask = { 'task': input, 'date': date }
        setcard([newTask, ...card])
        setInput('')
        setDate('')
    }
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
                <Button type="primary"
                    onClick={() => {
                        addTask()




                    }}>Add Task</Button>
            </div>
            <div className="card-dialog">
                {
                    (card || []).map((item, index) => {
                        return <Card title={`Task ${index + 1}`}>
                            <div className="card-body">
                                <p>{item.task}</p>
                                <p>{item.date}</p>
                            </div>
                        </Card>
                    })
                }

            </div>
        </>
    );
}
export default Inputcontainer
