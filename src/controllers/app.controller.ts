import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/books")
  async getBooks() {
    return await this.appService.readBookDataFromCSV();
  }

  @Get("/magazines")
  async getMagazines() {
    return await this.appService.readMagazinesDataFromCSV();
  }

  @Get("/authors")
  async getAuthors() {
    return await this.appService.readAuthorsDataFromCSV();
  }
}
