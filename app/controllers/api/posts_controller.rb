class Api::PostsController < ApplicationController
  before_action :authenticate_user!, except: [:all_posts]
  before_action :set_post, only: [:show, :destroy]

  def all_posts
    render json: Post.all
  end
  
  def friends_posts
    render json: current_user.get_friends_post
  end

  def index
    render json: current_user.posts
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post 
    else
    end

  def destroy 
    @post.destroy
    render json: @post
  end 


  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:body)
  end
end
