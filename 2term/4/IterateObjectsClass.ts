export class Iterator<T> {
    private collection: T[];
    private currentIndex: number = 0;

    public setCollection(collection: T[]): void {
        this.collection = collection;
    }

    public current(): T {
        return this.collection[this.currentIndex];
    }

    public next(): T | null {
        if (this.currentIndex < this.collection.length - 1) {
            this.currentIndex++;
            return this.collection[this.currentIndex];
        }else{
            return null;
        }
    }

    public prev(): T | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.collection[this.currentIndex];
        }else{
            return null;
        }
    }

    public key(): number {
        return this.currentIndex;
    }

    public reset(): void {
        this.currentIndex = 0;
    }
}
