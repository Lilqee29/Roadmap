# Greeting Builder JavaScript

This directory contains the core greeting builder implementation in JavaScript.

Based on the roadmap.sh project: https://roadmap.sh/projects/js-greeting-builder

**Created by:** Ibrahim Qoyum

## Files

- **GreetingBuilder.js** - Main greeting builder module with three key functions

## Functions

### `formatName(firstname, lastname)`
Combines first and last name into a full name string.

**Parameters:**
- `firstname` (string) - User's first name
- `lastname` (string) - User's last name

**Returns:** (string) - Formatted full name

**Example:**
```javascript
formatName('Ibrahim', 'Qoyum') // Returns: "Ibrahim Qoyum"
```

### `getGreeting(timeOfDay)`
Determines the appropriate greeting based on the time of day.

**Parameters:**
- `timeOfDay` (number) - Hour of the day (0-23)

**Returns:** (string) - Time-appropriate greeting

**Logic:**
- 0-11: "Good Morning"
- 12-17: "Good Afternoon"
- 18-23: "Good night"

**Example:**
```javascript
getGreeting(10)  // Returns: "Good Morning"
getGreeting(14)  // Returns: "Good Afternoon"
getGreeting(20)  // Returns: "Good night"
```

### `createGreeting(firstname, lastname, timeOfDay)`
Combines name and greeting into a complete personalized message.

**Parameters:**
- `firstname` (string) - User's first name
- `lastname` (string) - User's last name
- `timeOfDay` (number | string) - Hour of the day

**Returns:** (string) - Complete personalized greeting

**Example:**
```javascript
createGreeting('Ava', 'Stone', 9)
// Returns: "Good Morning, Ava Stone"
```

## Usage

Run the file directly with Node.js:

```bash
node GreetingBuilder.js
```

This will execute the example greetings with sample data.

## Current Examples

- Ava Stone (morning)
- Noah Kim (evening)
- Mina Patel (afternoon)

## Future Enhancements

- [ ] Add timezone support
- [ ] Support 12-hour time format
- [ ] Add custom greeting messages
- [ ] Add unit tests
- [ ] Add error handling for invalid inputs
