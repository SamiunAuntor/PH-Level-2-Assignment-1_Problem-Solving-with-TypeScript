function formatValue(value: string | number | boolean): string | number | boolean {

    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    return !value;
}



function getLength(value: string | any[]): number {

    if (typeof value === 'string') {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}



type RatedItem = {
    title: string;
    rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter((item) => item.rating >= 4);
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability: string = book.isAvailable ? 'Yes' : 'No';
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}



function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {

    const result: T[] = [];

    for (let i = 0; i < array1.length; i++) {

        let isDuplicate: boolean = false;

        for (let k = 0; k < result.length; k++) {
            if (result[k] === array1[i]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result[result.length] = array1[i];
        }
    }

    for (let j = 0; j < array2.length; j++) {

        let isDuplicate: boolean = false;

        for (let k = 0; k < result.length; k++) {
            if (result[k] === array2[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result[result.length] = array2[j];
        }
    }

    return result;
}



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products.reduce((total, product) => {

        const basePrice = product.price * product.quantity;

        const discountMultiplier = product.discount ? (100 - product.discount) / 100 : 1;

        const discountedPrice = basePrice * discountMultiplier;

        return total + discountedPrice;
    }, 0);
}

