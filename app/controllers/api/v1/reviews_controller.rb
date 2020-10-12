module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        return render json: {}, status: 401 unless user_signed_in?

        render json: current_user.reviews
      end

      def create
        return unless user_signed_in?

        review = coach.reviews.create(review_params.merge(user_id: current_user.id))
        return render json: { error: review.errors.messages }, status: 422 unless review.save

        render json: ReviewSerializer.new(review).serialized_json
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end

      private

      def coach
        @coach ||= Coach.find(params[:coach_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :coach_id)
      end
    end
  end
end
