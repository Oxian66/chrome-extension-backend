import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CommentDocument,
  Comment,
} from '../../comment/entities/comment.entity';
import * as mongoose from 'mongoose';

export type ReviewDocument = Review & Document;

@Schema()
@ObjectType()
export class Review {
  @Prop()
  @Field({ nullable: true })
  isLiked?: boolean;

  @Prop()
  @Field()
  location: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  // @Field((type) => [Comment], { nullable: true })
  // comments?: Comment[];

  @Prop()
  @Field()
  username: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
