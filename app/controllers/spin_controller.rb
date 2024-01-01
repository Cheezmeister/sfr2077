class SpinController < ApplicationController
  def index
    @proteins = Protein.all
    @veggies = Vegetable.all
    @seasonings = Seasoning.all
  end
end
