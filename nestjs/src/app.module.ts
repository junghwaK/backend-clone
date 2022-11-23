import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';


//decorator (nest.js with decorator. can add functionality to a class)
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
