import React from 'react'
import { Dropdown } from 'semantic-ui-react'
const semantic_url="https://semantic-ui.com"
const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/jenny.jpg`},
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/elliot.jpg` },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/stevie.jpg` },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/christian.jpg` },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/matt.jpg` },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: `${semantic_url}/images/avatar/small/justen.jpg` },
  },
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Choose User'
    fluid
    selection
    options={friendOptions}
    defaultValue={friendOptions[0].value}
  />
)

export default DropdownExampleSelection
