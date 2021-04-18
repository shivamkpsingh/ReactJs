import React from 'react'

function Code() {
    const date = new Date()
    const cTime = date.getHours()
    let greet = '';
    const greetStyle = {}
    if (cTime >= 0 && cTime < 12) {
        greet = "Good Morning";
        greetStyle.color = 'green'
    }
    else if (cTime >= 12 && cTime <= 18) {
        greet = "Good Evening"
        greetStyle.color = 'orange'

    }
    else {
        greet = 'Good Night'
        greetStyle.color = 'gray'

    }

    return(
        <>
        <h1>Hello sir, <span style={greetStyle}>{greet}</span></h1>
        </>
    )

}

export default Code;