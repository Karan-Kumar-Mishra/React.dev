import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setlength] = useState(10)
  const [numberAllowed, setnumberallowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passswordRef = useRef(null)
  const copypasswordToClipboard = useCallback(() => {
    passswordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$)(*&^%~`"
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllowed, charAllowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="h-screen  w-screen bg-slate-900 flex  items-center justify-center">
      <div className="bg-slate-500 w-auto h-20 rounded-md flex flex-col items-center p-2">
        <div className="input flex flex-row gap-4">
          <input
            type="text"
            value={password}
            className="bg-white text-black rounded-md p-1 "
            placeholder="Password"
            readOnly
            ref={passswordRef}
          />
          <button
            className="bg-indigo-500 p-1 rounded-md text-white font-bold "
            onClick={copypasswordToClipboard}
          >COPY</button>
        </div>
        <div className="buttons flex gap-2">
          <input className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => { setlength(e.target.value) }}
          />

          Number <input
            className=""
            onChange={() => {
              setnumberallowed((prev) => !prev)
            }}
            type="checkbox" />

          special <input
            className=""
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
            type="checkbox" />
        </div>


      </div>

    </div>
  );
}

export default App;
