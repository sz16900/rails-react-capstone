class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :coach_id
end
