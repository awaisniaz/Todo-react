import React from 'react'
import Inputcontainer from '../input-container/index'
import './styles.scss'
function TodoChip() {
    return (
        <div className="Main-container">
            <div className="card-container">
                <Inputcontainer />
            </div>
        </div>
    )
}
export default TodoChip

TodoChip.propsTypes = {

}