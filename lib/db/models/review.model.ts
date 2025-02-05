import { IReviewInput } from '@/lib/types';
import { Document, Model, model, models, Schema } from 'mongoose';

export interface IReview extends Document, IReviewInput {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
const reviewSchema = new Schema<IReview>(
  {
    post: {
      type: Schema.Types.ObjectId as unknown as typeof String,
      ref: 'Post',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId as unknown as typeof String,
      ref: 'User',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Review =
  (models.Review as Model<IReview>) || model<IReview>('Review', reviewSchema);

export default Review;
