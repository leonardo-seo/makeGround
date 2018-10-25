class lottoProgram {

  constructor() {
    this.randomNumberArrays = [];
    this.lottoCount = 0;
  }

  changeMoney(money) {
    this.lottoCount = (money/1000);
  }

  printLottos() {
    console.log(`로또 ${this.lottoCount}개를 발행했습니다.`)
    this.randomNumberArrays.forEach(function(randomNumberArray) {
      console.log(randomNumberArray);
    })
  }

  buyLottos(money) {
    this.changeMoney(money);
    this.makeLottos();
    this.printLottos();
  }

  // 1. 1~45까지의 숫자만 넣을 것.
  // 2. 각각의 번호는 중복이 돼선 안된다.
  // 3. 여섯자리 배열일 것.
  makeLottos() {
    let randomNumberArray = [];
    for(let i = 0; i < this.lottoCount; i++) {
      randomNumberArray = [];
      for(let j = 0; j < 6; j++) {
        randomNumberArray.push(Math.floor(Math.random() * (45 - 1 + 1)) + 1);
      }
      this.randomNumberArrays[i] = randomNumberArray;
    }
  }

}



const lotto = new lottoProgram();
lotto.buyLottos(14000);