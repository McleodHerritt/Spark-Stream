# Spark-Stream

NoSQL Social Network API

## Table of Contents

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
5. [Usage](#usage)
6. [Models and Schema](#models-and-schema)
7. [API Routes](#api-routes)
8. [Walkthrough Video](#walkthrough-video)
9. [Contact](#contact)

## Overview

This NoSQL Social Network API is a backend application designed to power a social networking web application. It allows users to share thoughts, react to friends' thoughts, and manage a friend list. Built with Express.js and MongoDB, this API is well-suited for handling large amounts of unstructured data, a common requirement for social networking platforms.

## Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database known for its speed and flexibility with large amounts of data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- JavaScript Date Library: (Optional) For formatting timestamps.

## Features

- User Management: Create, update, and delete user profiles.
- Thought Sharing: Users can post, update, and delete their thoughts.
- Reactions: Users can react to thoughts, similar to replies or comments.
- Friend List: Users can add or remove friends from their friend list.
- Data Display: Fetch and display user and thought data in formatted JSON.

## Getting Started

Prerequisites

- MongoDB installed on your machine.
- Node.js installed on your machine.

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/McleodHerritt
```

2. Navigate to the project directory in your terminal.
3. Install the necessary Node modules:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

## Usage

- Use an API platform like Insomnia to test the routes:
- User Routes: GET, POST, PUT, DELETE for user management.
- Thought Routes: GET, POST, PUT, DELETE for managing thoughts.
- Reaction Routes: POST, DELETE for adding or removing reactions.
- Friend Routes: POST, DELETE for managing user's friend list.

## Models and Schema

- User Model: With username, email, thoughts, and friends.
- Thought Model: With thought text, creation date, username, and reactions.
- Reaction Schema: Subdocument schema in the Thought model.

## API Routes

**`/api/users`**

- `GET` all users

- `GET` a single user by its `_id` and populated thought and friend data

- `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

- `PUT` to update a user by its `_id`

- `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list

- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts

- `GET` to get a single thought by its `_id`

- `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`

- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field

- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Walkthrough Video

[Link to Walkthrough Video](https://app.screencastify.com/v2/watch/G3tQZ2IJ5dAuzX24qw75) - This video demonstrates the functionality of the API and how to use it.

## Contact

- **Author:** Nicole Herritt
- **GitHub:** [McleodHerritt](https://github.com/McleodHerritt)
