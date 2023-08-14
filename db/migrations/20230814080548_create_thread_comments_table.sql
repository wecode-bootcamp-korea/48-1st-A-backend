-- migrate:up
CREATE TABLE thread_comments(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  thread_id INT NOT NULL,
  content VARCHAR(2000) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (thread_id) REFERENCES threads (id)
)

-- migrate:down
DROP TABLE thread_comments;
