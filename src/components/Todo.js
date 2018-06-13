import React from 'react'
import { Tag, Button } from 'antd'
const Todo = ({onClick, completed, text, onDelete}) => (
    <div>
    <li>
        <div onClick={onClick}> <Tag color={completed? 'purple' : '#f50'}>{text}</Tag></div> 
        <Button type="danger" onClick={onDelete}> delete </Button>
    </li>
    
    </div>
)

export default Todo