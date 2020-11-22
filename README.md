# Random names (docker study) 🐋

NodeJS application to receive and record random names with RabbitMQ &amp; MongoDB. 


### Requirements

- [Docker](https://docs.docker.com/get-docker/)

## Installation

- `git clone git@github.com:karolinedealencar/random-names-docker-study.git`
- `cd random-names-docker-study` 
- rename the `.env.example` file located in the `/app` folder to `.env`
- `docker-compose up` ⌛


## Usage

1. Go to `http://localhost:15672/` 
2. Log in (username: `guest`, password: `guest`)
3. Publish a **name** to the `names` queue
4. Go to `http://localhost:8081/` 
5. Go to `names` database
6. Go to `name` collection
7. Check your name! 🎉


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://opensource.org/licenses/ISC)
