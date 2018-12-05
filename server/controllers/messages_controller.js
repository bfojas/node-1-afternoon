let messages = [];
let id = 0

module.exports ={
    create:  (req,res) => {
        const {text, time} = req.body;
        const newMessages = {
            text: text,
            time: time,
            id: id
        }
        messages.push(newMessages);
        id++
        
        res.status(200).send(messages)
    },


    read: (req, res) => {
        res.status(200).send(messages)},



    update: (req,res) =>{
        const {id} = req.params;
        const {text, time} =req.body;
        messages.forEach((message) => {
            if(message.id === +id){
                message.text = text;
                message.time = time;
            }
        })
        res.status(200).send(messages)
    } ,




    delete: (req,res) =>{
        const {id} = req.params;
        messageId = messages.findIndex(message => message.id === +id)
        messages.splice(messageId,1)
        res.status(200).send(messages)
    }




}