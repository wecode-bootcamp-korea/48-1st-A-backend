-- migrate:up
ALTER TABLE thread_comments MODIFY thread_id INT NULL

-- migrate:down
DROP TABLE thread_comments;
