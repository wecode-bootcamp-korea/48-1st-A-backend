-- migrate:up
ALTER TABLE users MODIFY nickname VARCHAR(200) DEFAULT "Name";
ALTER TABLE users MODIFY profile_image VARCHAR(1000) DEFAULT "https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-default-male-avatar-png-image_2811083.jpg";

-- migrate:down
DROP TABLE users;
