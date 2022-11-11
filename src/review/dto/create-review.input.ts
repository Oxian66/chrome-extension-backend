import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field()
  time: Date;

  @Field()
  location: string;

  @Field(() => Int)
  likes: number;

  @Field()
  username: string;

  @Field({ nullable: true })
  comment?: string;
}
