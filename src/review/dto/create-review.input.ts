import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field()
  location: string;

  @Field()
  isLiked: boolean;

  @Field()
  username: string;
}
