//fetch

const apyKey = 'MoVMc2ClAF9XR4IC7U6BEBc91tPUXz0T';
const urlFetch = 'https://api.giphy.com/v1/gifs/random?api_key='
const peticion= fetch(`${urlFetch}${apyKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const { url } = data.images.original;
         const img = document.createElement('img');
         img.src = url;

         document.body.append(img);
    })
    .catch(console.warn)
