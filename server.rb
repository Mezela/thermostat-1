require 'sinatra/base'
require 'json'
require 'pg'
require_relative 'db_methods'

class Thermostat < Sinatra::Base
  enable :sessions

  get "/temperature" do
    headers 'Access-Control-Allow-Origin' => '*'
    # get variable from database and return
    # if $temperature == nil
    #   $temperature = 20
    # end
    # $temperature.to_i.to_json

    load_temp.to_json
    
  end

  post "/temperature" do
    headers 'Access-Control-Allow-Origin' => '*'
    # $temperature = params[:temperature]
    save_temp(temperature: params[:temperature])
  end

  run! if app_file == $0

end