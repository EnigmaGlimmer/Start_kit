const  ENDPOINT =  'https://dev-brand.api.vaultik.com/';

export const apiGet = async (subUrl, params) => {
    const result =await fetch(
        ENDPOINT + subUrl,
        {
            method: "GET",
            headers: {},
        }
    );

    return await result.json();
};

export const apiPost= async (subUrl, bodyParams) => {

};