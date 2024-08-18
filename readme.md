# Camp Gear Backend


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Introduction

Welcome to the backend repository of the Campe Gear project! This system powers the e-commerce platform designed specifically for camping enthusiasts. It provides robust APIs to manage product listings, handle shopping carts, process orders, and manage customer data. The backend is built to ensure a seamless and efficient experience for both the users and administrators of the Campers Shop platform.


## Features

- **CRUD Operations for Products**
- **CRUD Operations for Bookings**

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Language:** TypeScript


## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas)
- **npm** (v6 or higher) or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mahmudulturan/camp-gear-backend
   cd camp-gear-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following this example:

   ```env
   NODE_ENV=development
   PORT=5000
   DB_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
   LIVE_FRONTEND_URL=https://example.com
   LOCAL_FRONTEND_URL=http://localhost:port
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

2. **Visit the application:**

   Open your browser and go to `http://localhost:5000`.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to make.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request
