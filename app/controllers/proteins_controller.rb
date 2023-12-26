class ProteinsController < ApplicationController
  def index 
    @proteins = Protein.all
  end

  def show
    @proteins = Protein.find(params[:id])
  end
end
