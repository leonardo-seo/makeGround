// 로또 생성기

class LottoProgram {

    constructor() {
        this.lottoNumList = [];
        this.ticketCount = 0;
        this.luckyNum = [];
        this.matchResult = [
            { match: 3, prizePerMatch: "5000원", matchCount: 0, prizes: 0 },
            { match: 4, prizePerMatch: "50000원", matchCount: 0, prizes: 0 },
            { match: 5, prizePerMatch: "1500000원", matchCount: 0, prizes: 0 },
            { match: 6, prizePerMatch: "2000000000원", matchCount: 0, prizes: 0 },
        ]
    }

    // I. 로또 구입 및 번호 생성
    getLottoNums(money) {
        this.money = money;
        this.purchaseLottos(money);
        this.generateNums();
        this.printLottoSheet();
    }

    // 구입 금액에 해당하는 로또 받기
    purchaseLottos(money) {
        this.ticketCount = (money / 1000);
    }

    // 구입 매수 만큼 로또 번호 생성 
    generateNums() {
        for (let i = 0; i < this.ticketCount; i++) {
            let lottoNum = this.generateNumNotDuplicated();
            this.lottoNumList[i] = {
                order: i + 1,
                num: undefined
            }
            this.lottoNumList[i].num = lottoNum;
        }
    }

    // 로또 번호 1개 중복 없이 생성
    generateNumNotDuplicated() {
        let randomLottoNum = [];
        let arrToBeMatched = [];
        for (let i = 0; i < 6; i++) {
            randomLottoNum.push(Math.floor(Math.random() * (45 - 1 + 1)) + 1);
            for (let j = 0; j < randomLottoNum.length - 1; j++) {
                arrToBeMatched.push(randomLottoNum[j]);
            }
            if (arrToBeMatched.indexOf(randomLottoNum[randomLottoNum.length - 1]) !== -1) {
                arrToBeMatched = [];
                randomLottoNum = [];
                i = -1;
                continue;
            }
            arrToBeMatched = [];
        }
        return randomLottoNum;
    }

    // 번호 생성 결과 출력
    printLottoSheet() {
        console.log(`로또 ${this.ticketCount}장을 발행했습니다.\n===============`)
        this.lottoNumList.forEach(val => {
            console.log(`${val.order}번, 로또번호 : ${val.num}`)
        })
        console.log(`===============`);
    }

    // II. 당첨 결과 확인하기
    checkWinning(num) {
        this.generateluckyNum(num);
        this.getMatchResult();
        this.showMatchResult();
        this.getEarningRate();
    }

    // 당첨 번호 생성하기
    generateluckyNum(num) {
        this.luckyNum = num;
        console.log(`당첨번호: ${this.luckyNum}`);
    }

    // 확인 결과 얻기
    getMatchResult() {
        this.lottoNumList.forEach((val) => {
            this.checkMatchCount(val);
        });
    }

    // 일치 횟수 체크
    checkMatchCount(val) {
        let matchCount = 0;
        val.num.forEach((num) => {
            if (this.luckyNum.indexOf(num) !== -1) matchCount++;
        });
        if (matchCount === 3 || matchCount === 4 || matchCount === 5 || matchCount === 6) {
            this.calMatchResult(matchCount);
        }
    }

    // 일치 횟수 및 당첨 금액 계산
    calMatchResult(matchCount) { 
        if (matchCount === 3) {
            this.matchResult[0].matchCount++;
            this.matchResult[0].prizes += 5000;
        }
        if (matchCount === 4) {
            this.matchResult[1].matchCount++;
            this.matchResult[1].prizes += 50000;
        }
        if (matchCount === 5) {
            this.matchResult[2].matchCount++;
            this.matchResult[2].prizes += 1500000;
        }
        if (matchCount === 6) {
            this.matchResult[3].matchCount++;
            this.matchResult[3].prizes += 2000000000;
        }
    }

    // 확인 결과 출력하기
    showMatchResult() {
        console.log(`당첨 통계\n===============`)
        this.matchResult.forEach(val => {
            console.log(`${val.match}개 일치,(${val.prizePerMatch}) - ${val.matchCount}개`);
        });
    }

    // 수익률 계산하기
    getEarningRate() {
        let totalPrizes = 0;
        this.matchResult.forEach(val => totalPrizes += val.prizes);
        let earningRate = ((totalPrizes / this.money) * 100).toFixed(2);
        this.showEarningRate(totalPrizes, earningRate);
    }

    // 수익률 출력하기
    showEarningRate(totalPrizes, earningRate) {
        console.log(`로또 구입금액: ${this.money} 원`);
        console.log(`총 당첨금액: ${totalPrizes} 원`);
        console.log(`나의 수익률은 ${earningRate}% 입니다.`);
    }

} // end class

const lotto = new LottoProgram();
lotto.getLottoNums(7000);
lotto.checkWinning([14, 42, 23, 39, 17, 6]);
