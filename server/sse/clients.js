
let clients = [];

const addClient = (res)=> {
    
    clients.push(res);
};


const removeClient = (res) => {
    clients = clients.filter(client => client !== res);
};


const broadcast = (data) => {
    clients.forEach(client => {
        client.write(`data:${JSON.stringify(data)}\n\n`);
    });
};


module.exports={addClient, removeClient, broadcast};