import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, Card } from 'antd';
import './styles.scss'
import 'antd/dist/antd.css';

function Inputcontainer() {
    const [card, setcard] = useState([])
    const [input, setInput] = useState('')
    const addTask = () => {
        setcard([input, ...card])
        console.log(card)
    }
    useEffect(() => {
    }, [card])
    return (
        <>
            <div className="input-container">
                <Input placeholder="Enter your Task"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)

                    }} ></Input>
                <Button type="primary"
                    onClick={() => {
                        addTask()




                    }}>Add Task</Button>
            </div>
            <div>
                {
                    (card || []).map(item => {
                        return <Card title="Card title">{item}</Card>
                    })
                }

            </div>
        </>
    );
}
export default Inputcontainer
