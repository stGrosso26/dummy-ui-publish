import React, { Component } from 'react'

import { ColoredHeadingOne, ColoredHeadingTwo }from 'dummy-ui-publish'
import 'dummy-ui-publish/dist/index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored red heading works!"
          color={'red'}
        />
        <ColoredHeadingTwo
          text="Colored red heading works!"
          color={'red'}
        />
      </div>
    )
  }
}
