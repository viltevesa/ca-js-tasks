console.group('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');

{
  class User {
    constructor(name,xp,log){
      this.name = name;
      this.xp = xp;
      this.log = log;
    }
    newSolvedChallenge(challenge){
      this.xp += challenge.points;
      this.log.push(challenge.id);
    }
  }
  
  
  var user1 = new User("Madam", 0, []);
  var user2 = new User("Steve", 0, []);
  var challenge1 = new Challenge(1, "VE");
  var challenge2 = new Challenge(2, "EA");
  var challenge3 = new Challenge(3, "ME");
  var challenge4 = new Challenge(4, "HA");
  var challenge5 = new Challenge(5, "VH");
  var challenge6 = new Challenge(6, "EX");
  
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);
  
  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

}

console.groupEnd();


console.group('https://edabit.com/challenge/ifDM26p25bqS8EsFu');

{
  class Player {
    constructor(a,b,c,d){
      this.name=a
      this.hp=b
      this.maxHp=b
      this.en=c
      this.maxEn=c
      this.armor=d
    }
    
    healthPerc(){
      this.hpPerc=(this.hp/this.maxHp*100).toFixed(2)
      return this.hpPerc+'% health.'
    }
  
    learnSkill(a,b){
      this[a]=(x)=>{
        let en=this.en-b.cost
        if(en>=0){
          this.en=en
          let arm=x.armor-b.penetration
          let dmg=(b.damage*(100-arm)/100).toFixed(2)
          let t=`${this.name} used ${a}, ${b.desc}, against ${x.name}, doing ${dmg} damage! `
          t+=b.heal?`${this.name} healed for ${b.heal} health! `:''
          this.hp=Math.min(this.maxHp,this.hp+b.heal)
          x.hp=Math.max(0,x.hp-dmg)
          t+=x.name+' '+(x.hp?`is at ${x.healthPerc()}`:`died. `)
          return t
        }else{
          return `${this.name} attempted to use ${a}, but didn't have enough energy!`
        }
      }
    }
  }
}

console.groupEnd();