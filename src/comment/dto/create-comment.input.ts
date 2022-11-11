import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  username: string;

  @Field()
  text: string;

  @Field()
  location: string;

  @Field()
  time: Date;
}
