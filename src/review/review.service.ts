import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Review, ReviewDocument } from './entities/review.entity';

@Injectable()
export class ReviewService {
  // create(createReviewInput: CreateReviewInput) {
  //   return 'This action adds a new review';
  // }

  // findAll() {
  //   return `This action returns all review`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} review`;
  // }

  // update(id: number, updateReviewInput: UpdateReviewInput) {
  //   return `This action updates a #${id} review`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} review`;
  // }

  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
  ) {}
  async getReview(location: string) {
    return this.reviewModel.find({ location });
  }
  async createReview(createReviewDto: CreateReviewInput) {
    const find = await this.reviewModel.find({
      username: createReviewDto.username,
      location: createReviewDto.location,
      isLiked: createReviewDto.isLiked,
    });
    if (find.length > 0)
      throw new ConflictException(
        'The user has already made a review for that site!',
      );

    const review = new this.reviewModel(createReviewDto);
    return review.save();
  }
}
