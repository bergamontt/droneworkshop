
# DroneWorkshop

This is a fullstack web application for drone enthusiasts, engineers, and hobbyists to explore, customize, and simulate drone components and assemblies. The project is built using React.js (with Three.js/React Three Fiber for 3D visualization) on the frontend and Java Spring Boot on the backend. Data is stored locally using SQLite.


## Features

- Browse a collection of drone components (motors, frames, propellers, etc.)
- Build custom drone configurations from available components
- Interactive 3D visualization using React Three Fiber
- Share your schemas with other people in the workshop


## Tech Stack

**Client:** React JS, React Three Fiber

**Server:** Java, Sping Boot, SQLite


## Run Locally

Clone the project

```bash
  git clone https://github.com/bergamontt/droneworkshop.git
```

Go to the project directory

```bash
  cd droneworkshop
```

Start the Backend

```bash
  cd backend
  ./mvnw spring-boot:run
```

Start the Frontend

```bash
  cd frontend
  npm install
  npm start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

