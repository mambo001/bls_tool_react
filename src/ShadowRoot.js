import { useState } from 'react'
import root from "react-shadow";
import { StyleSheetManager } from "styled-components"

function ShadowRoot({ children }) {

    const [stylesNode, setStylesNode] = useState(null);

    return (
        <root.div>
            <div ref={(node) => setStylesNode(node)}>
                <StyleSheetManager target={stylesNode}>{children}</StyleSheetManager>
            </div>
        </root.div>
    )
}

export default ShadowRoot
