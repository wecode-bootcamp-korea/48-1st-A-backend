-- migrate:up
ALTER TABLE threads MODIFY updated_at TIMESTAMP NULL default now();

-- migrate:down
DROP TABLE threads;
