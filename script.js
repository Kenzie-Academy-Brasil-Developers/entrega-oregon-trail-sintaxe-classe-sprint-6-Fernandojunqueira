    class Traveler{
        constructor(name){

            this._name       = name;
            this._amountFood = 1;
            this._isHealthy  = true;
            
            
        }


        hunt(){
            
            this._amountFood += 2
            if(this._amountFood > 0){
                this._isHealthy = true
                
            }
        }
        eat(){

            if(this._amountFood > 0){
                this._amountFood -= 1
                this._isHealthy = true
                
            }else{
                this._isHealthy = false
            }
        }
    }

    class Wagon {
        constructor(capacity){

            this._capacity       = capacity;
            this.passangersArray = []
        }

        getAvailableSeatCount(){

            return this._capacity - this.passangersArray.length;

        }
        join(obj){

            if(this._capacity > this.passangersArray.length){

                this.passangersArray.push(obj)
                
            }
        }
        shouldQuarantine(){

        return this.passangersArray.some(element => element._isHealthy == false)
        }
        
        totalFood(){

        return this.passangersArray.reduce((acc,act) => acc + act._amountFood,0)
        }

    
    }
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');


console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
console.log(wagon)
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)


console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);