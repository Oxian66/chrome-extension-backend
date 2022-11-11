import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewService } from './review.service';
import { ReviewResolver } from './review.resolver';
import { Review, ReviewSchema } from './entities/review.entity';
import { ReviewController } from './review.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
  ],
  providers: [ReviewResolver, ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
