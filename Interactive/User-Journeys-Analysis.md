# User Journeys Analysis

## Six Important User Journeys
### 1. Homepage to key destination
### 2. Browse and discover products
### 3. Product detail evaluation
### 4. Add to cart and review cart
### 5. Signup / login before purchase
### 6. Checkout completion

## Four Journeys Chosen for Automation

### 1. Browse and discover products
**Why:** this is the main entry into the shopping experience. It validates product listing, search, category and brand filtering, and basic navigation through the catalog.

### 2. Product detail evaluation
**Why:** this is where buying intent becomes stronger. It checks that product information, pricing, images, and item-specific actions load correctly before cart activity begins.

### 3. Add to cart and review cart
**Why:** this is one of the most business-critical flows on any e-commerce site. If cart behavior fails, users cannot buy, so this deserves automation early.

### 4. Signup / login before purchase
**Why:** authentication is a core dependency for many downstream actions, especially checkout and account flows. It also tends to be one of the most failure-prone areas because of validation, state, and session handling.

## Why the Other Two Were Not Picked First

### Homepage to key destination
Important, but lower value as a standalone scripted journey because much of it is covered indirectly by the other flows.

### Checkout completion
Very important, but better scripted after cart and login are stable, since it depends on both and is more efficient to build once those foundations are reliable.
