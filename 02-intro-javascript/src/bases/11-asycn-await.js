//async await

const getImagen = async() => {

    try{

        const apyKey = 'MoVMc2ClAF9XR4IC7U6BEBc91tPUXz0T';
        const urlFetch = 'https://api.giphy.com/v1/gifs/random?api_key=';
        const resp = await fetch(`${urlFetch}${apyKey}`);

        const {data} = await resp.json();
        const img = document.createElement('img');
        img.src = data.images.original.url;
        document.body.append(img)
    }catch (error){
        //manejo del error
        console.error(error)
    }



}

getImagen().then();
