document.addEventListener('DOMContentLoaded', async function (){
    async function getFact(){
        
    
    const response = await fetch('https://api.api-ninjas.com/v1/facts',{
        method: 'GET',
        headers:{
            'X-Api-Key': 'BWWW60cexQO3iXDuo1I5Jw==tY5MtYsL8OkuoEmC',
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    document.getElementById('fact').innerHTML = data[0].fact
    }
    getFact()

    document.getElementById('butn').addEventListener('click', getFact)

})


    
