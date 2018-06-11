import React from 'react'
import { connect } from 'react-redux'
import { Button, Input, Form } from 'antd'
import { addTodo } from '../actions'


const AddTodo = ({dispatch}) => {
  let input  
  return (
    <div>
        <Form onSubmit={
            (e) => {
                e.preventDefault()
                if(!input.input.value) {
                    console.log(input.input.value)
                    return
                }
                dispatch(addTodo(input.input.value))
                input.input.value = ''
            }
        }>
            <Input ref={node => input = node} size="default" />
            <Button type="primary" htmlType="submit">
                Add TODO
            </Button>
        </Form>
      </div>
    )
}

export default connect()(AddTodo)