import { AboutMe } from "./views/AboutMe/AboutMe"
import { Banner } from "./views/Banner/Banner"
import { Contacts } from "./views/Contacts/Contacts"
import { HowCanIBeUsefull } from "./views/HowCanIBeUsefull/HowCanIBeUsefull"
import { MyWorks } from "./views/MyWorks/MyWorks"
import { WhatIUseInMyWork } from "./views/WhatIUseInMyWork/WhatIUseInMyWork"

function App() {
  return (
    <>
    <Banner />
    <AboutMe />
    <HowCanIBeUsefull />
    <WhatIUseInMyWork />
    <MyWorks />
    <Contacts />
    </>
    
  )
}

export default App
