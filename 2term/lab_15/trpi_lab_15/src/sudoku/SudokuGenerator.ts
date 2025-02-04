class SudokuGenerator {
    private readonly field: string[][];
    private readonly completedField: string[][];
    private readonly N : number;
    private readonly SRN : number;
    private readonly K : number;

    constructor(N : number, K : number) {
        this.N = N;
        this.K = K;

        const SRNd = Math.sqrt(N);
        this.SRN = Math.floor(SRNd);

        this.field = Array.from({
            length: N
        }, () => Array.from({
            length: N
        }, () => ''));

        this.completedField = Array.from({
            length: N
        }, () => Array.from({
            length: N
        }, () => ''));
    }

    public getField() {
        return this.field;
    }

    public getCompletedField() {
        return this.completedField;
    }

    public fillValues() {
        this.fillDiagonal();

        this.fillRemaining(0, this.SRN);

        this.removeKDigits();
    }

    private fillDiagonal() {
        for (let i = 0; i < this.N; i += this.SRN) {
            this.fillBox(i, i);
        }
    }

    private unUsedInBox(rowStart : number, colStart : number, num : string) : boolean {
        for (let i = 0; i < this.SRN; i++) {
            for (let j = 0; j < this.SRN; j++) {
                if (this.field[rowStart + i][colStart + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    private fillBox(row : number, col : number) {
        let num = '0';
        for (let i = 0; i < this.SRN; i++) {
            for (let j = 0; j < this.SRN; j++) {
                while (true) {
                    num = '' + this.randomGenerator(this.N);
                    if (this.unUsedInBox(row, col, num)) {
                        break;
                    }
                }
                this.field[row + i][col + j] = num;
                this.completedField[row + i][col + j] = num;
            }
        }
    }

    private randomGenerator(num : number) : number {
        return Math.floor(Math.random() * num + 1);
    }

    private checkIfSafe(i : number, j : number, num : string) : boolean {
        return (
            this.unUsedInRow(i, num) &&
            this.unUsedInCol(j, num) &&
            this.unUsedInBox(i - (i % this.SRN), j - (j % this.SRN), num)
        );
    }

    private unUsedInRow(i : number, num : string) : boolean {
        for (let j = 0; j < this.N; j++) {
            if (this.field[i][j] === num) {
                return false;
            }
        }
        return true;
    }

    private unUsedInCol(j : number, num : string) : boolean {
        for (let i = 0; i < this.N; i++) {
            if (this.field[i][j] === num) {
                return false;
            }
        }
        return true;
    }

    private fillRemaining(i : number, j : number) : boolean {
        if (i === this.N - 1 && j === this.N) {
            return true;
        }

        if (j === this.N) {
            i += 1;
            j = 0;
        }

        if (this.field[i][j] !== '') {
            return this.fillRemaining(i, j + 1);
        }

        for (let num = 1; num <= this.N; num++) {
            if (this.checkIfSafe(i, j, '' + num)) {
                this.field[i][j] = '' + num;
                this.completedField[i][j] = '' + num;
                if (this.fillRemaining(i, j + 1)) {
                    return true;
                }
                this.field[i][j] = '';
                this.completedField[i][j] = '';
            }
        }

        return false;
    }

    private removeKDigits() {
        let count = this.K;

        while (count !== 0) {
            let i = Math.floor(Math.random() * this.N);
            let j = Math.floor(Math.random() * this.N);
            if (this.field[i][j] !== '') {
                count--;
                this.field[i][j] = '';
            }
        }

        return;
    }
}

export default SudokuGenerator;