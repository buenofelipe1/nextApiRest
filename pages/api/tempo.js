 async function tempo(request, response) {
   
    const dynamicDate = new Date();

    const subscribeData = await fetch("https://picsum.photos/v2/list");
    const subscribeJson = await subscribeData.json();
    const Lista = subscribeJson;
    

    response.json({
       date: dynamicDate.toGMTString(),
       lista: Lista
        
    });
}

export default tempo;