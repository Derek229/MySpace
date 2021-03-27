# frozen_string_literal: true

class User < ActiveRecord::Base
  serialize :friends, Array
  has_many :posts, dependent: :destroy

  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

 

  def get_friends_post()
    ids= self.friends.empty? ? [0] : self.friends
    Post.where('user_id IN (?)', ids)
  end
end
