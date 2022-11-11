import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentDocument, Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async createComment(createCommentInput: CreateCommentInput) {
    const find = await this.commentModel.find({
      username: createCommentInput.username,
      text: createCommentInput.text,
      location: createCommentInput.location,
    });
    if (find.length > 0)
      throw new ConflictException(
        'The user has already made a such comment for that site!',
      );
    return await this.commentModel.create(createCommentInput);
  }

  async findCommentsByPage(location: string) {
    return await this.commentModel.find({ location });
  }

  async createReaction(id: string, updateCommentInput: UpdateCommentInput) {
    return await this.commentModel.findByIdAndUpdate(id, updateCommentInput);
  }

  // findAll() {
  //   return `This action returns all comment`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} comment`;
  // }

  // update(id: number, updateCommentInput: UpdateCommentInput) {
  //   return `This action updates a #${id} comment`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} comment`;
  // }
}
