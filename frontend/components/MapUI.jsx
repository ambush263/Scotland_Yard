import {TransformWrapper,TransformComponent} from "react-zoom-pan-pinch"
import styles from "./MapUI.module.css"

function MapUI() {
    return (
            <TransformWrapper
                initialPositionX={-100}
                initialPositionY={-100}
                centerOnInit={false}
                limitToBounds={true}
                disablePadding={false}
            >
                <TransformComponent
                    wrapperStyle={{
                        width: "100%",
                        height: "100%"
                    }}
                    contentStyle={{
                        width: "fit-content",
                        height: "fit-content"
                    }}
                >

                    <img src="../images/Model-Map.svg" className="map"></img>
                </TransformComponent>
            </TransformWrapper>
    )
}

export default MapUI