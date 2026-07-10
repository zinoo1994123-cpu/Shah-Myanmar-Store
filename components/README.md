# Components Directory

This directory contains all reusable React components organized by functionality.

## Structure

### `/common`
Shared components used across the app:
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer component
- `Sidebar.tsx` - Sidebar navigation
- `Card.tsx` - Reusable card component

### `/ui`
Base UI components (shadcn/ui):
- `Button.tsx` - Button component
- `Input.tsx` - Input field
- `Modal.tsx` - Modal dialog
- `Toast.tsx` - Toast notifications

### `/product`
Product-related components:
- `ProductCard.tsx` - Product display card
- `ProductGrid.tsx` - Grid of products
- `ProductFilters.tsx` - Filter sidebar
- `ProductSearch.tsx` - Search component

### `/cart`
Cart-related components:
- `CartItem.tsx` - Individual cart item
- `CartSummary.tsx` - Cart totals
- `CartList.tsx` - Full cart list

### `/checkout`
Checkout flow components:
- `ShippingForm.tsx` - Shipping details form
- `PaymentForm.tsx` - Payment information
- `OrderSummary.tsx` - Order review

### `/auth`
Authentication components:
- `LoginForm.tsx` - Login form
- `RegisterForm.tsx` - Registration form
- `ForgotPasswordForm.tsx` - Password reset

### `/admin`
Admin panel components:
- `OrderManagement.tsx` - Manage orders
- `ProductManagement.tsx` - Manage products
- `InventoryManagement.tsx` - Stock management
