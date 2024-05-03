import {Unity, useUnityContext} from "react-unity-webgl";

function MemoryGame() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/MemoryGame.loader.js",
        dataUrl: "/MemoryGame.data.unityweb",
        frameworkUrl: "/MemoryGame.framework.js.unityweb",
        codeUrl: "/MemoryGame.wasm.unityweb",
    });
    function handleClickSpawnEnemies() {
        sendMessage("SceneHelper", "ReloadScene");
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>ReloadScene</button>
                    </div>

                </div>
            </div>
        </>
    );
}
export default MemoryGame