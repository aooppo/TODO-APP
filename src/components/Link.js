import React from 'react'
import { Button } from 'antd'
const Link = ({ active, children, onClick }) => (
    <Button
        type="primary"
        onClick={onClick}
        disabled={active}
        style={{marginLeft: '4px'}}
    >
        {children}
    </Button>
)
export default Link