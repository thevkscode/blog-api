# Blog API

This is a simple Blog API built with Node.js, Express, and TypeScript. It provides endpoints to create, read, update, and delete blog posts, all stored in memory using a simple array.

## Prerequisites

Before running the API, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/thevkscode/blog-api.git
   cd blog-api
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

### Starting the API

To start the API server, run the following command:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

### API Endpoints

- **Create a Blog Post**

  ```
  POST /api/posts/create

  Request Body:
  {
    "title": "Sample Post",
    "content": "This is the content of the sample post."
  }
  ```

- **Get All Blog Posts**

  ```
  GET /api/posts/fetch
  ```

- **Get a Blog Post by ID**

  ```
  GET /api/posts/fetch/:id
  ```

- **Update a Blog Post by ID**

  ```
  PUT /api/posts/update/:id

  Request Body:
  {
    "title": "Updated Post Title",
    "content": "Updated post content."
  }
  ```

- **Delete a Blog Post by ID**

  ```
  DELETE /api/posts/delete/:id
  ```

### Response Format

The API responses are typically in JSON format and include appropriate HTTP status codes.
