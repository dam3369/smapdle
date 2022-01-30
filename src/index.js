import { StrictMode } from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Provider } from 'react-redux'

import store from './store'
import { FlashProvider } from './utils/flash'
import App from './components/app'
import Flash from './components/flash-messages'
import reportWebVitals, { sendToAnalytics } from './reportWebVitals'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    // colors 
    --blue: #152147;
    --yellow: #ffdd00;
    --light-yellow: #fbed53;
    --white: #fff;

    // colors definitions
    --c-primary: var(--blue);
    --c-secondary: var(--light-yellow);

    --foreground-color: #152147;
    --background-color: #fff;
    --accent-color: #ffdd00;
  }
`

render(
  <StrictMode>
    <GlobalStyle />

    <Provider store={store}>
      <App />
    </Provider>

    <FlashProvider>
      <Flash />
    </FlashProvider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToAnalytics)
