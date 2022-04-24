import React from "react"
import { IntroPageLayout } from "./IntroPage.layout"
import { RoundLinkButton } from "../components/Button"
import Typography from "../components/Typography"

function IntroPage() {
  return (
    <IntroPageLayout>
      <div>
        <Typography margin={"0 0 40px 0"} color={"#fff"} fontSize={"30px"}>
          Catch The Food
        </Typography>
        <RoundLinkButton to={"/game"} padding={"15px 30px"} background={"#fff"} color={"#5267d2"}>
          START!
        </RoundLinkButton>
      </div>
    </IntroPageLayout>
  )
}

export default IntroPage
