import React, { useState } from 'react'

export default function DisplayAPIData({ele}) {
    const [useKeys, setKeys] = useState([])
    const [useValues, setValues] = useState([])

    let keys = Object.keys(ele)
    let values = Object.values(ele)

    const showData = () => {
        setKeys(keys)
        setValues(values)
    }
  return (
    <div>
      {/* <button onClick={showData}>Click Me</button> */}
      <div>
        {/* {useKeys && useValues ? (
          useKeys.map((element, index) => {
            return (
              <div>
                <div>
                  {useKeys[index]}: {useValues[index]}
                </div><br/>
              </div>
            );
          })
        ) : (
          <p>click me to display</p>
        )} */}
      </div>
    </div>
  )
}
