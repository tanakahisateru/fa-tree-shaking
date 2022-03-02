import React from "react"
import { render } from "react-dom"

import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

render(<div>
    <FontAwesomeIcon icon={faCode} />
</div>, document.getElementById("root"))
