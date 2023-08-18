-- migrate:up
ALTER TABLE users MODIFY phone_number VARCHAR(200) NULL;

-- migrate:down
DROP TABLE users;
