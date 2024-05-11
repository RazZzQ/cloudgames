import {Unity, useUnityContext} from "react-unity-webgl";

function TopDownShooter() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/TopDownShooter.loader.js",
        dataUrl: "/TopDownShooter.data.unityweb",
        frameworkUrl: "/TopDownShooter.framework.js.unityweb",
        codeUrl: "/TopDownShooter.wasm.unityweb",
    });
    function handleClickReloadScene() {
        sendMessage("SceneHelper", "RestartScene");
    }
    function handleClickSpawnEnemy() {
        sendMessage("EnemyGenerator", "SpawnEnemyFromReact");
    }
    function handleClickActivateDoublePoints() {
        sendMessage("ScoreManager", "activateDoublePointsReact");
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickReloadScene}>ReloadScene</button>
                        <button onClick={handleClickSpawnEnemy}>Spawn Enemy</button>
                        <button onClick={handleClickActivateDoublePoints}>Activate Double Points</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TopDownShooter