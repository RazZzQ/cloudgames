import {Unity, useUnityContext} from "react-unity-webgl";

function Game() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/JuegoForCloud.loader.js",
        dataUrl: "/JuegoForCloud.data.unityweb",
        frameworkUrl: "/JuegoForCloud.framework.js.unityweb",
        codeUrl: "/JuegoForCloud.wasm.unityweb",
    });

    function handleClickSpawnEnemies() {
        sendMessage("GameObject", "SpawnEnemies");
    }


    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
                    </div>

                </div>
            </div>

        </>
    );
}


export default Game