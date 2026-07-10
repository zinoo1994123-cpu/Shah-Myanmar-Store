# API Routes

This directory contains Next.js API routes for backend operations.

## Structure

### `/products`
- `GET /api/products` - List all products
- `GET /api/products/[id]` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### `/orders`
- `GET /api/orders` - List user orders
- `POST /api/orders` - Create order
- `GET /api/orders/[id]` - Get order details
- `PUT /api/orders/[id]` - Update order status (admin)

### `/auth`
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### `/payment`
- `POST /api/payment/stripe` - Process Stripe payment
- `POST /api/payment/webhook` - Stripe webhook handler

### `/cart`
- `POST /api/cart/validate` - Validate cart items
- `POST /api/cart/calculate-shipping` - Calculate shipping cost
