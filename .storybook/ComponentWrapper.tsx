import * as React from "react"
import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"
import * as injectTapEventPlugin from "react-tap-event-plugin"

import { getMessages } from "../src/utils/localeUtils"

injectTapEventPlugin()
addLocaleData([...en, ...pt])

interface IProps {
  children: React.ReactElement<any>
  locale: TSupportedLangs
}

const ComponentWrapper = ({ children, locale }: IProps) => (
  <IntlProvider locale={locale} messages={getMessages(locale)}>
    <div
      className="ComponentWrapper"
      style={{
        display: "flex",
        height: "100vh",
        userSelect: "none",
      }}
    >
      <div className="ComponentWrapper" style={{ margin: "auto" }}>
        {children}
      </div>
    </div>
  </IntlProvider>
)

export default ComponentWrapper
