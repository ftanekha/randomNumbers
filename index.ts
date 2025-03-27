document.addEventListener(
    'DOMContentLoaded', ()=> {
        function displayNumbers(){
            function getRandomNumbers(max: number, maxLines = 5):number[][] {
                //create a line of unique numbers
                function getLine(array: number[] = []):number[]{
                    let myNumbers = [...array]
    
                    if(myNumbers.length >= 6) return myNumbers
    
                    const nextNumber = Math.ceil(Math.random() * max)
                    //enforce uniqueness
                    if(myNumbers.includes(nextNumber)) {
                        return getLine(myNumbers)
                    }else{
                        myNumbers.push(nextNumber)
                        return getLine(myNumbers)
                    }
                }
                
                const ticket: number[][] = []
                //sort numbers in ascending order
                for(let line = 0; line < maxLines; line++){
                    ticket.push(getLine().sort((a,b)=> a - b))
                }
                return ticket
            }
            
            const randomNumbers = getRandomNumbers(59)
            
            randomNumbers.forEach(
                (line: number[], index: number) => {
                    const targetEl = document.getElementById(`${index + 1}`)
                    //clear the ticket
                    targetEl.innerHTML = ''
                    //render the lines
                    line.forEach(
                        number => {
                            const listItem = document.createElement('li')
                            listItem.className = `w-1/6 bg-gray-${11 - index}00 text-gray-${index + 1}00 font-black text-lg text-center border-b-4 border-gray-${index + 2}00`
                            listItem.textContent = String(number)
                            
                            targetEl?.append(listItem)
                        }
                    )
                }
            )

            document.getElementById('numbers-container').style.height = '500px'
        }
        const getLucky = document.getElementById('get-lucky')
        getLucky.addEventListener(
            'click', displayNumbers
        )
    }
)
