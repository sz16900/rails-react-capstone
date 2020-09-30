class Review < ApplicationRecord
  validates :title, :description, presence: true
  belongs_to :coach
  belongs_to :user
end
