# Spark-Stream

NoSQL Social Network API

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
2. Navigate to the project directory in your terminal.
3. Install the necessary Node modules:

```
npm install
```

4. Start the server:

```
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

## Walkthrough Video

Link to Walkthrough Video - This video demonstrates the functionality of the API and how to use it.

## Repository

GitHub Repository Link
