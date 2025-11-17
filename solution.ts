

const formatValue=(value: string | number | boolean) : string | number | boolean =>{
    
    if(typeof value === 'string'){
        return value.toUpperCase();
    }

    else if (typeof value === 'number'){
        return value*10;
    }
    else if (typeof value === 'boolean'){
        return !value;
    }
    return value;
}






const getLength=(value:string | any[]) : number=>{
    if(typeof value === 'string'){
        return value.length;
    }
    else{
        return value.length;
    }

}





class Person{
    name:string;
    age:number

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}





type ItemType ={
    title:string;
    rating:number
}

const filterByRating=(arrayOfItems:ItemType[]):ItemType[]=>{
    const filteredArray=arrayOfItems.filter(item=>item.rating>=4)
    return filteredArray;
}   

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];




type Users={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const filterActiveUsers=(users:Users[]):Users[]=>{
    const filteredUsers=users.filter(user=>user.isActive===true)
    return filteredUsers;
}





interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
const printBookDetails=(books:Book)=>{
    const {title,author,publishedYear,isAvailable}=books;
    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable? 'Yes' : 'No'}`);
}






type typeOfArray=string | number ;
const getUniqueValues=<T extends typeOfArray>(array1:T[],array2:T[]):T[]=>{
    const newArray:T[]=[];
    let index=0;

    for(let i=0; i<array1.length;i++){
        newArray[index]=array1[i];
        index++;
    }

    for (let i = 0; i < array2.length; i++) {
         newArray[index]=array2[i];
        index++;
    }
    
    const uniqueValues: T[] = [];

    for (let i = 0; i < newArray.length; i++) {
        let found = false;

        for (let j = 0; j < uniqueValues.length; j++) {
            if (uniqueValues[j] === newArray[i]) {
                found = true;
                break;
            }
        }

        if (!found) {
            uniqueValues[uniqueValues.length] = newArray[i];
        }
    }

    return uniqueValues;
}








interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
const calculateTotalPrice=(products:Product[]):number=>{
    
    const totalPrice=products.reduce((totalPrice,product)=>{
        let total=product.price*product.quantity;;

        const discountedPrice=product.discount?total*(1-product.discount/100):total;
        return totalPrice+discountedPrice;
        
    },0);

    return totalPrice;
}



