import * as React from "react"

import { shallow, ShallowWrapper } from "enzyme"

import { returnMockSerie, transformConsoleMessagesToExceptions } from "../../utils/testUtils"
import Poster from "../Poster/Poster"
import Fanart from "./Fanart"

describe("COMPONENT: <Fanart />", () => {
  beforeEach(() => transformConsoleMessagesToExceptions())

  let wrapperShallow: ShallowWrapper<any, any>
  const video = returnMockSerie()[0]

  it("should render without crashing", () => {
    const component = <Fanart video={video} />
    wrapperShallow = shallow(component)
  })

  it("should have the style prop 'backgroundImage' being equal to the backdrop url from the video", () => {
    expect(wrapperShallow.dive().get(0).props.style.backgroundImage).toBe(
      "url(http://image.tmdb.org/t/p/w1280/bzoZjhbpriBT2N5kwgK0weUfVOX.jpg)",
    )
  })

  describe("should render poster with", () => {
    it("showSubtitle={false}", () => {
      expect(
        wrapperShallow
          .dive()
          .find(Poster)
          .prop("showSubtitle"),
      ).toBeFalsy()
    })

    it("hoverEffect={false}", () => {
      expect(
        wrapperShallow
          .dive()
          .find(Poster)
          .prop("hoverEffect"),
      ).toBeFalsy()
    })

    it("video being equal to the video passed", () => {
      expect(
        wrapperShallow
          .dive()
          .find(Poster)
          .prop("video"),
      ).toBe(video)
    })
  })
})
