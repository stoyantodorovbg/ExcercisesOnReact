const data = {
    getCars: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: 1, make: 'Opel', model: 'Astra'},
                    {id: 2, make: 'Subaro', model: 'Forester'},
                    {id: 3, make: 'VW', model: 'Golf'},
                    {id: 4, make: 'Toyota', model: 'Corolla'},
                ])
            }, 2000)
        })
    }
}

export default data