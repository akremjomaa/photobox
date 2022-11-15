//https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos

export async function loadResource(url ='/www/canals5/phox/api/photos'){
    try {
        let resp = await fetch(`https://webetu.iutnc.univ-lorraine.fr${url}`,
            { credentials: 'include'})
        if (resp.ok){
            return await resp.json();
        }else {
            Promise.reject(new Error(resp.statusText))
        }
    }catch (error){
        console.log('network error : ' + error);
    }
}
