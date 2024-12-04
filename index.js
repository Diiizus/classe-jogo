class Hero {

    constructor(name, age, type){
  
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atack(){
  
      switch (this.type) {

        case "Guerreiro":
          console.log(`O ${this.type} atacou usando uma espada`)
  
          break;
  
        case "Mago":
          console.log(`O ${this.type} atacou usando magia`)
  
          break;
  
        case "Monge":
          console.log(`O ${this.type} atacou usando artes marciais`)
  
          break;
  
        case "Ninja":
          console.log(`O ${this.type} atacou usando uma Shuriken`)
  
          break;       
  
      }
  
    }
  
  }
  
  let hero = new Hero("Sekiro", 31, "Ninja")
  
  
  
  hero.atack()