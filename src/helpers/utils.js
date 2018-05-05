export const sendData = (dataObj) => {

    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj) 
    }

    fetch('https://www.joonsub.com/php/sendData.php', data)
    .then((responseJson) => {
        return responseJson.json();
    })
    .then((text) => {
        //doNothing;
    })
    .catch((error) => {
        console.error(error);
    });
}