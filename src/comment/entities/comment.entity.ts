import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLObjectType } from 'graphql';
import { Review } from 'src/review/entities/review.entity';

export type CommentDocument = Comment & Document;

@Schema()
@ObjectType()
export class Comment {
  @Prop()
  @Field()
  text: string;

  @Prop()
  @Field()
  time: Date;

  @Prop()
  @Field()
  username: string;

  // @Prop()
  // @Field((type) => Int, { nullable: true })
  // likes?: number;

  // @Prop()
  // @Field((type) => Int, { nullable: true })
  // dislikes?: number;

  @Prop()
  @Field(() => [Review], { nullable: true })
  reviews?: Review[];

  @Prop()
  @Field()
  location: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
