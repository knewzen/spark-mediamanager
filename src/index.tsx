import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import * as injectTapEventPlugin from "react-tap-event-plugin"
import "typeface-roboto"

import App from "./containers/App"
import configureStore from "./store/store"
import { returnMockAnime, returnMockMovie, returnMockSerie } from "./utils/testUtils"

import "./index.css"

const initialState = {
  video: {
    series: [returnMockSerie()],
    movies: [returnMockMovie()],
    animes: [returnMockAnime()]
  }
}

const store = configureStore(initialState)
const rootEl = document.getElementById("root")
injectTapEventPlugin()

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require<{ default: typeof App }>("./containers/App").default
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl
    )
  })
}
