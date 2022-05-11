
// const getImagePromise = () => new Promise((resolve) => resolve('https://asdasdasdsa.com'));


const getImagen = async () => {

    try {
        const apiKey = 'lNNfxkpnHZtSVzMm6omzHB1RoZbEODvg';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error)
    }

}

getImagen();



// httpCall.then((respuesta) => respuesta.json())
// .then(({data}) => {
//     const { url } = data.images.original;
//     const img =  document.createElement('img');
//     img.src = url;

//     document.body.append(img);
// })
// .catch(console.warn)