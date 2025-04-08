# 📘 Task Manager Simple SDD

## 1. Overview

## 2. System architecture
 
## 3. Data Architecture

### 3.1. Database Schema (ERD)
```
+------------+           +-------------+           +----------+
|   users    |           |   tasks     |           |  tags    |
+------------+           +-------------+           +----------+
| id (PK)    |◄--------┐ | id (PK)     |           | id (PK)  |
| username   |         └─| title       |           | name     |
| email      |           | description |           | color    |
| password   |           | status      |           +----------+
+------------+           | due_date    |
                         | user_id (FK)├────┐
                         +-------------+    │
                                            ▼
                            +-------------------------+
                            |      task_tags          |
                            +-------------------------+
                            | task_id (FK)            |
                            | tag_id (FK)             |
                            +-------------------------+

```

### 3.2. Relationships

- One to many (Users -> Tasks):
    - One user can have many tasks.
    - The task.user_id is a foreign key  referencing users.id.
- Many-to-Many (Tasks ↔ Tags):
    - A task can have many tags.
    - A tag can belong to many tasks.
    - The task_tags join table is used to represent this relationship.

### 3.3. Field

#### `users` table

| Field     | Type                  | Description             |
|-----------|-----------------------|-------------------------|
| id        | UUID / Integer (PK)   | Primary Key             |
| username  | string                | Unique username         |
| email     | string                | Unique email address    |
| password  | string (hashed)       | Hashed password         |

#### `tasks` table

| Field       | Type                  | Description                       |
|-------------|-----------------------|-----------------------------------|
| id          | UUID / Integer (PK)   | Primary Key                       |
| title       | string                | Task title                        |
| description | text                  | Task description                  |
| status      | enum                  | e.g., TODO, IN_PROGRESS, DONE     |
| due_date    | Date                  | Task deadline                     |
| user_id     | UUID / Integer (FK)   | References `users.id`             |

#### `tags` table

| Field | Type                  | Description         |
|-------|-----------------------|---------------------|
| id    | UUID / Integer (PK)   | Primary Key         |
| name  | string                | Tag name            |
| color | string (e.g. #FF0000) | Tag color           |

#### `task_tags` table (Many-to-Many join table)

| Field    | Type                  | Description           |
|----------|-----------------------|-----------------------|
| task_id  | UUID / Integer (FK)   | References `tasks.id` |
| tag_id   | UUID / Integer (FK)   | References `tags.id`  |

# 4. Interface Design