// Define your Book class here: 
class Book{
    constructor(Title,Author,Copyrightdate,ISBN,Numberofpages,Bookcheckedoutnum,isBookdiscarded	){
        this.Title=Title;
        this.Author=Author;
        this.Copyrightdate=Copyrightdate;
        this.ISBN=ISBN;
        this.Numberofpages=Numberofpages;
        this.Bookcheckedoutnum=Bookcheckedoutnum;
        this.isBookdiscarded=isBookdiscarded;

    }

    checkoutBook(uses = 1){
        this.Bookcheckedoutnum=this.Bookcheckedoutnum+uses;
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(Title,Author,Copyrightdate,ISBN,Numberofpages,Bookcheckedoutnum,isBookdiscarded){
        super(Title,Author,Copyrightdate,ISBN,Numberofpages,Bookcheckedoutnum,isBookdiscarded);
    }
    discardManual(currentyear){
        if (currentyear - this.Copyrightdate > 5){
            this.isBookdiscarded = "Yes";
        }
    }


}
class Novel extends Book{
    constructor(Title,Author,Copyrightdate,ISBN,Numberofpages,Bookcheckedoutnum,isBookdiscarded){
        super(Title,Author,Copyrightdate,ISBN,Numberofpages,Bookcheckedoutnum,isBookdiscarded);
    }
    discardNovel(){
        if (this.Bookcheckedoutnum > 100){
            this.isBookdiscarded = "Yes";
        }    
    }
}




// Declare the objects for exercises 2 and 3 here:
let PrideandPrejudice = new Novel("Pride and Prejudice","Jane Austen",1813,"1111111111111",432,32,"No");

let TopSecretShuttleBuildingManual=new Manual("Top Secret Shuttle Building Manual","Redacted",2013,"0000000000000",1147,1,"No");





// Code exercises 4 & 5 here:
PrideandPrejudice.checkoutBook(5);
PrideandPrejudice.discardNovel();


console.log(PrideandPrejudice);
console.log(TopSecretShuttleBuildingManual);
