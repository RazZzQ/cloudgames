import {Unity, useUnityContext} from "react-unity-webgl";
import { useState } from "react";

function MemoryGame() {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Memory.loader.js",
        dataUrl: "/Memory.data.unityweb",
        frameworkUrl: "/Memory.framework.js.unityweb",
        codeUrl: "/Memory.wasm.unityweb",
    });

    const [playerName, setPlayerName] = useState("");
    function handleClickSpawnEnemies() {
        sendMessage("SubmitManager", "Submit", playerName);
    }
    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <input 
                            type="text" 
                            placeholder="Player Name" 
                            value={playerName} 
                            onChange={(e) => setPlayerName(e.target.value)} 
                        />
                        <button onClick={handleClickSpawnEnemies}>Submit Score</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MemoryGame