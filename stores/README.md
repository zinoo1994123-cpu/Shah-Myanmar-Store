# Stores Directory

This directory contains Zustand store definitions for global state management.

## Usage

Each store is a separate file managing a specific domain:

- `cart.ts` - Shopping cart state
- `user.ts` - User profile state
- `ui.ts` - UI state (modals, notifications, etc.)

Example:
```typescript
import { useCartStore } from '@/stores/cart'

function MyComponent() {
  const items = useCartStore((state) => state.items)
  return <div>{items.length}</div>
}
```
