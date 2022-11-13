import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // @Mutation(() => Comment)
  // createComment(
  //   @Args('createCommentInput') createCommentInput: CreateCommentInput,
  // ) {
  //   return this.commentService.create(createCommentInput);
  // }

  // @Query(() => [Comment])
  // findAll() {
  //   return this.commentService.findAll();
  // }

  // @Query(() => Comment, { name: 'comment' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.findOne(id);
  // }

  // @Mutation(() => Comment)
  // updateComment(
  //   @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  // ) {
  //   return this.commentService.update(
  //     updateCommentInput.id,
  //     updateCommentInput,
  //   );
  // }

  // @Mutation(() => Comment)
  // removeComment(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.remove(id);
  // }

  @Query((returns) => [Comment])
  getComments(@Args('location') location: string) {
    return this.commentService.findCommentsByPage(location);
  }

  @Mutation(() => Comment)
  createComment(@Args('commentText') createCommentDto: CreateCommentInput) {
    return this.commentService.createComment(createCommentDto);
  }

  @Mutation(() => Comment)
  createReaction(
    @Args('reaction') _id: string,
    updateComentDto: UpdateCommentInput,
  ) {
    return this.commentService.createReaction(_id, updateComentDto);
  }
}
