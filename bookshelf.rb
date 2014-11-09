require 'sinatra'

set :public_folder, 'www'

get '/' do
  send_file 'www/index.html'
end