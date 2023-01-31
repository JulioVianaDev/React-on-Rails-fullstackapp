class Car < ApplicationRecord
  validates :title,:ano, presence: true
end
