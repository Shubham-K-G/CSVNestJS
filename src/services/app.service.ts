import { Injectable } from '@nestjs/common';

const csv=require('csvtojson')

@Injectable()
export class AppService {

  async readBookDataFromCSV() {
    const books = await csv({delimiter:";"}).fromFile('./assets/books.csv');
    //console.log(books);
    return books;
  }

  async readMagazinesDataFromCSV() {
    const books = await csv({delimiter:";"}).fromFile('./assets/Magazines.csv');
    //console.log(books);
    return books;
  }

  async readAuthorsDataFromCSV() {
    const books = await csv({delimiter:";"}).fromFile('./assets/authors.csv');
    //console.log(books);
    return books;
  }

}




