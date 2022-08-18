const dataMethoud = ['body', 'params', 'query']


const validation = (schema) =>{

    return (req, res, next)=>{

        const validationArrErr = []

        dataMethoud.forEach(key =>{

            if(schema[key]){

                const validationResults = schema[key].validate(req[key], {abortEarly: flase});

                if(validationResults.error){

                    validationArrErr.push(validationResults.error.details)
                }
            }
        })

        if (validationArrErr.length) {

            res.json({ message: "validation error", err: validationErrArr})

            
        } else {
            next()
        }

    }
}



module.exports= validation