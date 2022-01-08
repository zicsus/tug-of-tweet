'use strict';

const assets = {
    images: {},
    music: {}
};

function get()
{
    
}

function load(data, callback)
{
    let loaded = 0;
    const check = (total) => 
    {
        loaded++;
        if (loaded === data.length) return true;
        else return false;
    } 

    for (const asset of data)
    {
        if (asset.type === "image")
        {
            const image = new Image();
            image.onload = () => 
            {
                assets.images[asset.name] = image;
                if (check(data.length)) callback(assets);
            }
            image.src = asset.path;
        }
    }
}

export default {
    get,
    load
}