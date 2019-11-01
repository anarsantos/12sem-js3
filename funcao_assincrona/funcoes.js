//  Ex.: Arrow function
ensaboar = () => {
    return new Promise((resolve, reject) => {
        console.log('começou a ensaboar');
        setTimeout(() => {
            resolve(console.log('terminou de ensaboar'));
        }, 5000);
    })
}

// Ex.: Function "normal"
function enxaguar() {
    console.log('começou a enxaguar')

    // setTimout - recebe dois parâmentos no primeiro função e no segundo o tempo
    setTimeout(() => {
        console.log('terminou de enxaguar')
    }, 2000);
}

// Callback
function lavaLouca(callback1, callback2) {
    callback1().then(() => {
        callback2()
    });
}