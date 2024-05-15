-- Insert test data into carts table
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES
('d290f1ee-6c54-4b01-90e6-d701748f0851', 'b68a432a-546f-4a2d-9ebf-22f4cbf2f9d5', '2024-01-01', '2024-01-01', 'OPEN'),
('e1cc8c1d-2c78-4c98-8f8d-37a5a5a74fdc', '2f4f2d0d-2c08-4d20-98e4-8f9e8b0a0e1b', '2024-01-02', '2024-01-02', 'ORDERED');

-- Insert test data into cart_items table
INSERT INTO cart_items (cart_id, product_id, count) VALUES
('d290f1ee-6c54-4b01-90e6-d701748f0851', '34b5b4e8-4c18-4d39-a915-2d5d0c1d8f2d', 2),
('e1cc8c1d-2c78-4c98-8f8d-37a5a5a74fdc', '5f8e9b0c-3c2b-4d1e-9c8b-4d3e8e1a7d8f', 5);
