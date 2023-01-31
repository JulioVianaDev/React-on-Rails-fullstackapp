class Api::CarsController < ApplicationController
  before_action :set_car, only: [:update,:show,:destroy]

  def index
    @cars = Car.all
    render json: @cars
  end

  def show
    render json: @car
  end

  def create
    @car  = Car.new(car_params)
    if @car.save
      render json: @car
    else 
      render json: {errors: @car.errors},status: :unprocessable_entity 
    end
  end

  def update
    if @car.update(car_params)
      render json: @car 
    else 
      render json: {errors: @car.errors},status: :unprocessable_entity 
    end
  end

  def destroy
    @car.destroy 
    render json: {message: " foi deletado com sucesso"}
  end
  
  def latest 
    @car = Car.last 
    render json: @car
  end
  private
    #{car: {title: '',desc: '',ano:''}}
    def car_params
      params.require(:car).permit(:title,:desc,:ano);
    end

    def set_car
      @car = Car.find(params[:id])
    end
end