const container = document.querySelector('.container')
    const text = document.querySelector('#text')

    const totaltime = 7500
    const breathtime = (totaltime / 5) * 2
    const holdtime = totaltime / 5

   breathanimation()

    function breathanimation (){
        text.innerHTML = 'Breathin'
        container.className = 'container grow'
        setTimeout(() => {
            text.innerText = 'hold'

            setTimeout(() => {
                text.innerText = 'Breathout'
                container.className = 'container shrink'
            }, holdtime)
        }, breathtime)
    }

    setInterval(breathanimation, totaltime)